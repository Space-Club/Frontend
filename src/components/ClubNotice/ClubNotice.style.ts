import Theme from '@/styles/Theme';
import { whiteGreyBox } from '@/styles/common';
import styled from '@emotion/styled';

const ClubNoticeContainer = styled(whiteGreyBox)`
  display: flex;
  width: 100%;
  height: 100%;
  padding: 1.1rem 2rem;
  cursor: pointer;
`;

const ClubNoticeTextStyled = styled.textarea`
  font-size: ${Theme.fontSize.largeContent};
  width: 100%;
  height: 100%;
  background: none;
  border: none;
  overflow: hidden;
  resize: none;
  cursor: pointer;

  :focus {
    outline: none;
  }
`;

export { ClubNoticeContainer, ClubNoticeTextStyled };
