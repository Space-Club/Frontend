import Theme from '@/styles/Theme';
import { ellipsisText } from '@/styles/common';
import styled from '@emotion/styled';

const BookmarkedCardContainer = styled.div`
  display: flex;
  width: 20rem;
  position: relative;
`;

const BookmarkedTitleStyled = styled.h3`
  font-size: 1.375rem;
  font-weight: 400;
  margin-bottom: 1.2rem;
`;

const BookmarkedInfoStyled = styled(ellipsisText)`
  color: ${Theme.color.semiBlack};
  margin-left: 0.2rem;
  font-size: 1rem;
  font-weight: 400;
`;

const BookmarkedInfoLine = styled.div`
  display: flex;
  font-size: 1.125rem;
  font-weight: 400;
  margin-bottom: 0.1rem;
`;

const BookmarkedInfoWrapper = styled.div`
  width: 10rem;
  padding: 1rem;
  display: flex;
  flex-grow: 1;
  flex-direction: column;
`;

export {
  BookmarkedCardContainer,
  BookmarkedInfoWrapper,
  BookmarkedTitleStyled,
  BookmarkedInfoStyled,
  BookmarkedInfoLine,
};
