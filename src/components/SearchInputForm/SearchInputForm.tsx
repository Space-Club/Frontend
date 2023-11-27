import { PATH } from '@/constants/path';
import useSearchResultQuery from '@/hooks/query/event/useSearchResultQuery';
import useDebounceValue from '@/hooks/useDebounce';

import { useState } from 'react';
import { CiSearch } from 'react-icons/ci';
import { useNavigate } from 'react-router-dom';

import SearchResult from '../SearchResult/SearchResult';
import {
  IconContainerStyled,
  MoreResultStyled,
  NoResultStyled,
  SearchBarStyled,
  SearchInputContainerStyled,
  SearchInputStyled,
  SearchResultsWrapper,
  SearchTitleStyled,
} from './SearchInputForm.style';

const SearchInputForm = () => {
  const [keyword, setKeyword] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const debouncedKeyword = useDebounceValue(keyword, 300);
  const { data, pageData } = useSearchResultQuery({ keyword: debouncedKeyword, page: 0 });
  const navigate = useNavigate();

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && debouncedKeyword.trim() !== '') {
      navigate(PATH.SEARCH(debouncedKeyword));
    }
  };

  const handleInputClick = () => {
    setIsFocused(!isFocused);
  };

  return (
    <SearchInputContainerStyled>
      <SearchBarStyled>
        <SearchInputStyled
          placeholder="검색하기"
          value={keyword}
          onChange={(event) => setKeyword(event.target.value)}
          onClick={() => handleInputClick()}
          onKeyDown={(event) => handleKeyDown(event)}
        />
        <IconContainerStyled
          onClick={() => {
            if (debouncedKeyword.trim() !== '') {
              navigate(PATH.SEARCH(keyword));
            }
          }}
        >
          <CiSearch size="1.5rem" />
        </IconContainerStyled>
      </SearchBarStyled>
      {isFocused && (
        <SearchResultsWrapper>
          <SearchTitleStyled>{`"${debouncedKeyword}" 검색 결과`}</SearchTitleStyled>
          {data?.length ? (
            data.map(({ id, eventInfo, clubInfo }) => (
              <SearchResult
                key={id}
                eventId={id}
                eventTitle={eventInfo.title}
                posterImageUrl={eventInfo.posterImageUrl}
                location={eventInfo.location}
                startDate={eventInfo.startDate}
                endDate={eventInfo.endDate}
                clubName={clubInfo.name}
                isEnded={eventInfo.isEnded}
              />
            ))
          ) : (
            <NoResultStyled>검색결과가 없습니다.</NoResultStyled>
          )}
          {pageData && pageData.totalPages > 1 && (
            <MoreResultStyled
              onClick={() => {
                navigate(PATH.SEARCH(debouncedKeyword));
              }}
            >
              검색결과 더 보러 가기
            </MoreResultStyled>
          )}
        </SearchResultsWrapper>
      )}
    </SearchInputContainerStyled>
  );
};

export default SearchInputForm;
