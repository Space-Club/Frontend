import ActiveButton from '@/components/ActiveButton/ActiveButton';
import Avatar from '@/components/common/Avatar/Avatar';
import InputForm from '@/components/common/InputForm/InputForm';

import {
  ButtonWrapperStyled,
  ClubInfoWrapperStyled,
  ContentWrapperStyled,
  HeaderContainerStyled,
  TitleStyled,
} from './CreateClubPage.style';

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
