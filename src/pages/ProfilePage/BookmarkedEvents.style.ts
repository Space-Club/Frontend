import Theme from '@/styles/Theme';
import styled from '@emotion/styled';

const BookmarkedEventsContainer = styled.div`
  width: 100%;
  display: grid;
  padding: 1.53rem 0;
  grid-template-columns: 1fr 1fr;
  grid-gap: 4rem 3rem;
  justify-items: center;
  align-items: center;

  & > div:not(:nth-of-type(-n + 2)):after {
    content: '';
    position: absolute;
    width: 90%;
    height: 1px;
    border-top: 1px solid ${Theme.color.tSeparator};
    top: -2rem;
    right: 5%;
  }

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
    & > div:not(:nth-of-type(-n + 1)):after {
      content: '';
      position: absolute;
      width: 90%;
      height: 1px;
      border-top: 1px solid ${Theme.color.tSeparator};
      top: -2rem;
      right: 5%;
    }
  }
`;

export { BookmarkedEventsContainer };
