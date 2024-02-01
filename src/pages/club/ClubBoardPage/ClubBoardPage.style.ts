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
  justify-content: flex-start;
  width: 100%;
`;

export { ClubBoardPageContainer, ClubBoardTopWrapper, ClubBoardContentWrapper, ButtonWrapper };
