import { PATH } from '@/constants/path';

import { CiSearch } from 'react-icons/ci';
import { useNavigate } from 'react-router-dom';

import {
  IconContainerStyled,
  SearchBarStyled,
  SearchInputContainerStyled,
  SearchInputStyled,
} from './SearchInputForm.style';

const SearchInputForm = () => {
  const navigate = useNavigate();

  return (
    <SearchInputContainerStyled>
      <SearchBarStyled>
        <SearchInputStyled placeholder="검색하기" />
        <IconContainerStyled onClick={() => navigate(PATH.SEARCH)}>
          <CiSearch size="1.5rem" />
        </IconContainerStyled>
      </SearchBarStyled>
    </SearchInputContainerStyled>
  );
};

export default SearchInputForm;
