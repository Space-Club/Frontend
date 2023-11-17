import styled from '@emotion/styled';

const BookmarkedEventsContainer = styled.div`
  width: 100%;
  margin-top: 4rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 2rem;
  justify-items: center;
  align-items: center;

  @media (max-width: 1400px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 1040px) {
    grid-template-columns: 1fr;
  }
`;

export { BookmarkedEventsContainer };
