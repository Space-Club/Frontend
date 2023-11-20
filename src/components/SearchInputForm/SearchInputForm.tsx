import { PATH } from '@/constants/path';
// import useSearchResultQuery from '@/hooks/query/event/useSearchResultQuery';
import useDebounceValue from '@/hooks/useDebounce';

import { useState } from 'react';
import { CiSearch } from 'react-icons/ci';
import { useNavigate } from 'react-router-dom';

import SearchResult from '../SearchResult/SearchResult';
import {
  IconContainerStyled,
  SearchBarStyled,
  SearchInputContainerStyled,
  SearchInputStyled,
  SearchResultsWrapper,
  SearchTitleStyled,
} from './SearchInputForm.style';

const SearchInputForm = () => {
  const [keyword, setKeyword] = useState('');
  const debouncedKeyword = useDebounceValue(keyword, 1000);
  // const { data } = useSearchResultQuery({ keyword: debouncedKeyword, page: 1 });
  const navigate = useNavigate();

  return (
    <>
      <SearchInputContainerStyled>
        <SearchBarStyled>
          <SearchInputStyled
            placeholder="검색하기"
            value={keyword}
            onChange={(event) => setKeyword(event.target.value)}
          />
          <IconContainerStyled onClick={() => navigate(`${PATH.SEARCH}/${debouncedKeyword}`)}>
            <CiSearch size="1.5rem" />
          </IconContainerStyled>
        </SearchBarStyled>
        <SearchResultsWrapper>
          <SearchTitleStyled>검색 결과</SearchTitleStyled>
          <SearchResult
            eventId="1"
            eventTitle="연사모"
            posterImageUrl="https://picsum.photos/200/300"
            location="우리집"
            eventStartDate="10101010"
            clubName="연사모"
          />
          <SearchResult
            eventId="1"
            eventTitle="연사모asfjlsjflsf"
            posterImageUrl="https://picsum.photos/200/300"
            location="우리집asldfjals"
            formEndDate="10101010"
            clubName="연사모"
          />
        </SearchResultsWrapper>
      </SearchInputContainerStyled>
    </>
  );
};

export default SearchInputForm;
