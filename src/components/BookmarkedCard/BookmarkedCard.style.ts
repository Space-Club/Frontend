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
  font-size: 1rem;
  font-weight: 400;
`;

const BookmarkedInfoLine = styled.div`
  display: flex;
  margin-bottom: 0.1rem;
`;

const BookmarkedInfoWrapper = styled.div`
  width: 12rem;
  overflow: hidden;

  padding: 1rem;
  display: flex;
  flex-direction: column;
`;

const BookmarkedInfoLabelStyled = styled.p`
  color: ${Theme.color.black};
  font-size: 1rem;
`;

export {
  BookmarkedCardContainer,
  BookmarkedInfoWrapper,
  BookmarkedTitleStyled,
  BookmarkedInfoStyled,
  BookmarkedInfoLine,
  BookmarkedInfoLabelStyled,
};
