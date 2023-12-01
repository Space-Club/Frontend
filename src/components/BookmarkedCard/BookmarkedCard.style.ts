import Theme from '@/styles/Theme';
import { ellipsisMultiLineText, ellipsisText } from '@/styles/common';
import styled from '@emotion/styled';

const BookmarkedCardContainer = styled.div`
  display: flex;
  width: 20rem;
  height: 100%;
  cursor: pointer;
  padding: 0 1rem;
  position: relative;
`;

const BookmarkedCardImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BookmarkedTitleStyled = styled(ellipsisMultiLineText)`
  font-size: 1.375rem;
  font-weight: 400;
  margin-bottom: 1.8rem;
`;

const BookmarkedInfoStyled = styled(ellipsisText)`
  color: ${Theme.color.semiBlack};
  font-weight: 400;
`;

const BookmarkedInfoLine = styled.div`
  display: flex;
  margin-bottom: 0.5rem;
`;

const BookmarkedInfoWrapper = styled.div`
  width: 12rem;
  font-size: 0.9rem;
  overflow: hidden;
  padding: 1rem;
  display: flex;
  flex-direction: column;
`;

const BookmarkedInfoLabelStyled = styled.p`
  color: ${Theme.color.black};
  white-space: nowrap;
  margin-right: 0.3rem;
`;

export {
  BookmarkedCardContainer,
  BookmarkedInfoWrapper,
  BookmarkedTitleStyled,
  BookmarkedInfoStyled,
  BookmarkedInfoLine,
  BookmarkedInfoLabelStyled,
  BookmarkedCardImageWrapper,
};
