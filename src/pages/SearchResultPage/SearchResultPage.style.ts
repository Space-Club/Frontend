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

export { SearchesContainer, SearchMessageStyled };