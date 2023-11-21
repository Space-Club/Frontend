import Theme from '@/styles/Theme';
import styled from '@emotion/styled';

const SearchesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SearchMessageStyled = styled.div`
  padding: 2rem 2rem;
  color: black;
  font-size: ${Theme.fontSize.smallTitle};
`;

const SearchesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 5%;
`;

const PaginationWrapper = styled.div`
  padding: 2rem 0 5rem 0;
`;

export { SearchesContainer, SearchMessageStyled, SearchesWrapper, PaginationWrapper };
