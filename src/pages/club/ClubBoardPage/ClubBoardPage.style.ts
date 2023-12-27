import styled from '@emotion/styled';

import { ClubHomePageContainer, ClubHomeTopWrapper } from '../ClubHomePage/ClubHomePage.style';

const ClubBoardPageContainer = styled(ClubHomePageContainer)``;

const ClubBoardTopWrapper = styled(ClubHomeTopWrapper)``;

const ClubBoardContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 1rem;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const MyPostsCommentsButtonStyled = styled.button`
  border: 0;
  background-color: transparent;
`;

const MyButtonsWrapper = styled.div`
  display: flex;
  gap: 1;
  width: fit-content;

  &:not(:last-of-type)::after {
    content: '|';
  }
`;

export {
  ClubBoardPageContainer,
  ClubBoardTopWrapper,
  ClubBoardContentWrapper,
  ButtonWrapper,
  MyPostsCommentsButtonStyled,
  MyButtonsWrapper,
};
