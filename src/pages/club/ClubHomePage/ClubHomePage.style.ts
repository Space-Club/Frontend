import styled from '@emotion/styled';

const TabWrapper = styled.div`
  display: flex;
  justify-content: end;
  width: 100%;
`;

const ClubHomePageContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ClubHomeTopWrapper = styled.section`
  margin-top: 1.3rem;
`;

const ClubHomeMiddleMemberWrapper = styled.section`
  height: 12.6rem;
  background-color: aliceblue; //TODO: 레이아웃 확인을 위한 배경 추후 삭제
`;

const ClubHomeBottomWrapper = styled.section`
  height: 22rem;
  background-color: antiquewhite; //TODO: 레이아웃 확인을 위한 배경 추후 삭제
`;

export {
  TabWrapper,
  ClubHomePageContainer,
  ClubHomeTopWrapper,
  ClubHomeMiddleMemberWrapper,
  ClubHomeBottomWrapper,
};
