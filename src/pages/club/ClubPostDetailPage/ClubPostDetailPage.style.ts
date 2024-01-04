import styled from '@emotion/styled';

import { ClubHomePageContainer, ClubHomeTopWrapper } from '../ClubHomePage/ClubHomePage.style';

const ClubPostDetailPageContainer = styled(ClubHomePageContainer)``;

const ClubPostDetailTopWrapper = styled(ClubHomeTopWrapper)``;

const ClubPostWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 1rem;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: end;
  width: 100%;
  gap: 0.5rem;
`;

export { ClubPostDetailPageContainer, ClubPostDetailTopWrapper, ClubPostWrapper, ButtonWrapper };
