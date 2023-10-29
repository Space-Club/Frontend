import Theme from '@/styles/Theme';
import styled from '@emotion/styled';

const SearchInputContainerStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  height: 100%;
`;

const SearchBarStyled = styled.div`
  display: flex;
  align-items: center;
  width: 90%;
  height: 50%;
  border: 0.05rem solid ${Theme.color.lineColor};
  border-radius: 1rem;
`;

const SearchInputStyled = styled.input`
  flex-grow: 1;
  height: 70%;
  margin-left: 1rem;
  outline: none;
  border: none;
`;

const IconContainerStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 0.5rem;
  color: ${Theme.color.lineColor};
`;

export { SearchInputContainerStyled, SearchBarStyled, SearchInputStyled, IconContainerStyled };
