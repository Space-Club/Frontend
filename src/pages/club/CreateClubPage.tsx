import Avatar from '@/components/common/Avatar/Avatar';
import InputForm from '@/components/common/InputForm/InputForm';
import styled from '@emotion/styled';

//#TODO: font-size 상수 사용하기

const HeaderContainerStyled = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 20%;
  border: 1px solid;
`;

const TitleStyled = styled.h1`
  font-size: 40px;
  border: 1px solid;
`;

const ContentWrapperStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* height: calc(100% - ${HeaderContainerStyled.height}); */
  min-width: 30rem;
  height: 60%;
  gap: 5%;
  border: 1px solid;
`;

const ClubInfoWrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  border: 1px solid;
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
    </>
  );
};

export default CreateClubPage;
