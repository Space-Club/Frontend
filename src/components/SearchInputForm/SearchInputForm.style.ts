import Theme from '@/styles/Theme';
import styled from '@emotion/styled';

const SearchInputContainerStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  position: relative;
  height: 100%;
`;

const SearchBarStyled = styled.div`
  display: flex;
  align-items: center;
  width: 90%;
  max-width: 40rem;
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
  cursor: pointer;
`;

const SearchResultsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 40rem;
  width: 90%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, 6%);
  padding: 0.5rem 0;
  border: 1px solid ${Theme.color.tWhiteGrey};
  border-radius: 0.6rem;
  background-color: white;
  filter: drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.25));
  z-index: 5;
`;

const SearchTitleStyled = styled.div`
  padding: 1rem 1rem 0.5rem 1rem;
  color: black;
  font-size: ${Theme.fontSize.smallContent};
`;

export {
  SearchInputContainerStyled,
  SearchBarStyled,
  SearchInputStyled,
  IconContainerStyled,
  SearchTitleStyled,
  SearchResultsWrapper,
};
