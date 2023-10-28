import ActiveButton from '@/components/ActiveButton/ActiveButton';
import Avatar from '@/components/common/Avatar/Avatar';
import InputForm from '@/components/common/InputForm/InputForm';
import styled from '@emotion/styled';

//#TODO: font-size 상수 사용하기

const HeaderContainerStyled = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 20%;
`;

const TitleStyled = styled.h1`
  font-size: 40px;
`;

const ContentWrapperStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* height: calc(100% - ${HeaderContainerStyled.height}); */
  min-width: 30rem;
  min-height: 17rem;
  height: 60%;
  gap: 5%;
`;

const ClubInfoWrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 50%;
  height: 40%;
`;

const ButtonWrapperStyled = styled.div`
  position: fixed;
  right: 10%;
  bottom: 10%;
`;

const CreateClubPage = () => {
  return (
    <>
      <HeaderContainerStyled>
        <TitleStyled>클럽을 생성해보세요</TitleStyled>
      </HeaderContainerStyled>
      <ContentWrapperStyled>
        <Avatar avatarShape="large" isEditable={true} />
        <ClubInfoWrapperStyled>
          <InputForm
            labelText="클럽 이름"
            inputType="text"
            placeholoder="클럽 이름을 작성하세요."
          />
          <InputForm
            labelText="클럽 소개"
            inputType="text"
            placeholoder="클럽 소개를 작성하세요."
          />
        </ClubInfoWrapperStyled>
      </ContentWrapperStyled>
      <ButtonWrapperStyled>
        <ActiveButton buttonText="클럽 생성하기" fontSize="mediumTitle" />
      </ButtonWrapperStyled>
    </>
  );
};

export default CreateClubPage;
