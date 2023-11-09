import Theme from '@/styles/Theme';
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
  margin-top: 1rem;
  height: 12.5rem;

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
  }
`;

const ClubNoticeTextedWrapper = styled.div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  margin-right: 1rem;
`;

const ClubMemberTextedWrapper = styled.div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
`;

const ClubNoticeTextStyled = styled.div`
  display: flex;
  font-size: ${Theme.fontSize.smallTitle};
  margin-bottom: 0.5rem;
  > button {
    margin-left: 0.2rem;
  }
`;

const ClubNoticeWrapper = styled(whiteGreyBox)`
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const ClubMemberWrapper = styled(memberManagerScrollAreaStyled)`
  height: 100%;
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
  ClubNoticeTextStyled,
  ClubNoticeTextedWrapper,
  ClubMemberTextedWrapper,
};
