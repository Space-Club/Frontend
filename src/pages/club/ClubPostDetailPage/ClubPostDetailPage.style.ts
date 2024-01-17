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

const ClubCommentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;

export {
  ClubPostDetailPageContainer,
  ClubPostDetailTopWrapper,
  ClubPostWrapper,
  ClubCommentWrapper,
};
