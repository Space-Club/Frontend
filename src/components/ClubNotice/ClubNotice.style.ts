import Theme from '@/styles/Theme';
import { ellipsisMultiLineText, whiteGreyBox } from '@/styles/common';
import styled from '@emotion/styled';

const ClubNoticeContainer = styled(whiteGreyBox)`
  display: flex;
  align-items: center;
  height: 10.5rem;
  width: 36.1875rem;
  padding: 1.1rem 2rem;
  cursor: pointer;
`;

const ClubNoticeTextStyled = styled(ellipsisMultiLineText)`
  font-size: ${Theme.fontSize.largeContent};
  -webkit-line-clamp: 4;
`;

export { ClubNoticeContainer, ClubNoticeTextStyled };
