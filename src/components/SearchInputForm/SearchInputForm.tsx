import { PATH } from '@/constants/path';
import useDebounceValue from '@/hooks/useDebounce';

import { useState } from 'react';
import { CiSearch } from 'react-icons/ci';
import { useNavigate } from 'react-router-dom';

import {
  IconContainerStyled,
  SearchBarStyled,
  SearchInputContainerStyled,
  SearchInputStyled,
} from './SearchInputForm.style';

const SearchInputForm = () => {
  const [keyword, setKeyword] = useState('');
  const debouncedKeyword = useDebounceValue(keyword, 1000);
  const navigate = useNavigate();

  console.log(debouncedKeyword);

  return (
    <SearchInputContainerStyled>
      <SearchBarStyled>
        <SearchInputStyled
          placeholder="검색하기"
          value={keyword}
          onChange={(event) => setKeyword(event.target.value)}
        />
        <IconContainerStyled onClick={() => navigate(PATH.SEARCH)}>
          <CiSearch size="1.5rem" />
        </IconContainerStyled>
      </SearchBarStyled>
    </SearchInputContainerStyled>
  );
};

export default SearchInputForm;
