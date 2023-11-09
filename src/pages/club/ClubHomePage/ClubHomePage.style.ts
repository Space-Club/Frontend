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
  justify-content: space-around;
  margin-top: 1.3rem;
  height: 10.5rem;

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
  }
`;

const ClubNoticeWrapper = styled(whiteGreyBox)`
  width: 1000px;
  overflow: hidden;
`;

const ClubMemberWrapper = styled(memberManagerScrollAreaStyled)`
  overflow-y: auto;
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
