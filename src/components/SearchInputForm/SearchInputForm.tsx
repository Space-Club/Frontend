import { PATH } from '@/constants/path';
import useSearchResultQuery from '@/hooks/query/event/useSearchResultQuery';
import useDebounceValue from '@/hooks/useDebounce';

import { useState } from 'react';
import { CiSearch } from 'react-icons/ci';
import { useNavigate } from 'react-router-dom';

import SearchResult from '../SearchResult/SearchResult';
import {
  IconContainerStyled,
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
  const debouncedKeyword = useDebounceValue(keyword, 1000);
  const { data } = useSearchResultQuery({ keyword: debouncedKeyword, page: 1 });
  const navigate = useNavigate();

  return (
    <>
      <SearchInputContainerStyled>
        <SearchBarStyled>
          <SearchInputStyled
            placeholder="검색하기"
            value={keyword}
            onChange={(event) => setKeyword(event.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
          <IconContainerStyled onClick={() => navigate(`${PATH.SEARCH}/${debouncedKeyword}`)}>
            <CiSearch size="1.5rem" />
          </IconContainerStyled>
        </SearchBarStyled>
        {isFocused && (
          <SearchResultsWrapper>
            <SearchTitleStyled>{`"${debouncedKeyword}" 검색 결과`}</SearchTitleStyled>
            {data?.length ? (
              data.map((event) => (
                <SearchResult
                  key={event.id}
                  eventId={event.id}
                  eventTitle={event.eventInfo.title}
                  posterImageUrl={event.eventInfo.posterImageUrl}
                  location={event.eventInfo.location}
                  formEndDate={event.formInfo.endDate}
                  clubName={event.clubInfo.name}
                />
              ))
            ) : (
              <NoResultStyled>검색결과가 없습니다.</NoResultStyled>
            )}
          </SearchResultsWrapper>
        )}
      </SearchInputContainerStyled>
    </>
  );
};

export default SearchInputForm;
