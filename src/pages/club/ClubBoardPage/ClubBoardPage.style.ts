import styled from '@emotion/styled';

import { ClubHomePageContainer, ClubHomeTopWrapper } from '../ClubHomePage/ClubHomePage.style';

const ClubBoardPageContainer = styled(ClubHomePageContainer)``;

const ClubBoardTopWrapper = styled(ClubHomeTopWrapper)``;

const ClubBoardContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3rem;
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
  cursor: pointer;
`;

const MyButtonsWrapper = styled.div`
  display: flex;
  width: fit-content;
  gap: 0.5rem;

  & > *:not(:last-of-type)::after {
    content: '|';
    margin-left: 0.5rem;
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
