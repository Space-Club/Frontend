import { CiSearch } from 'react-icons/ci';

import {
  IconContainerStyled,
  SearchBarStyled,
  SearchInputContainerStyled,
  SearchInputStyled,
} from './SearchInputForm.style';

const SearchInputForm = () => {
  return (
    <SearchInputContainerStyled>
      <SearchBarStyled>
        <SearchInputStyled />
        <IconContainerStyled>
          <CiSearch size="1.5rem" />
        </IconContainerStyled>
      </SearchBarStyled>
    </SearchInputContainerStyled>
  );
};

export default SearchInputForm;
