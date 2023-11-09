import { memberManagerScrollAreaStyled, whiteGreyBox } from '@/styles/common';
import styled from '@emotion/styled';

const ClubHomePageContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ClubHomeTopWrapper = styled.section`
  margin-top: 1.3rem;
`;

const ClubMiddleWrapper = styled.section`
  display: flex;
  margin-top: 1.3rem;
  height: 10.5rem;

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
  }
`;

const ClubNoticeWrapper = styled(whiteGreyBox)`
  overflow: hidden;
`;

const ClubMemberWrapper = styled(memberManagerScrollAreaStyled)`
  min-width: 20rem;
  overflow-y: auto;
  flex-grow: 1;
  height: 100%;
`;

const ClubHomeBottomWrapper = styled.section`
  height: 22rem;
  background-color: antiquewhite; //TODO: 레이아웃 확인을 위한 배경 추후 삭제
`;

export {
  ClubHomePageContainer,
  ClubHomeTopWrapper,
  ClubNoticeWrapper,
  ClubHomeBottomWrapper,
  ClubMiddleWrapper,
  ClubMemberWrapper,
};
