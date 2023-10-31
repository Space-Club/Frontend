import ActiveButton from '@/components/ActiveButton/ActiveButton';
import Avatar from '@/components/common/Avatar/Avatar';
import InputForm from '@/components/common/InputForm/InputForm';
import { CREATE_CLUB } from '@/constants/club';

import {
  ButtonWrapperStyled,
  ClubInfoWrapperStyled,
  ContentWrapperStyled,
  HeaderContainerStyled,
  TitleStyled,
} from './CreateClubPage.style';

const CreateClubPage = () => {
  const {
    CREATE_CLUB_TEXT,
    CLUB_NAME,
    CLUB_NAME_PLACEHOLDER,
    CLUB_INTRO,
    CLUB_INTRO_PLACEHOLDER,
    CREATE_CLUB_BUTTON,
  } = CREATE_CLUB;

  return (
    <>
      <HeaderContainerStyled>
        <TitleStyled>{CREATE_CLUB_TEXT}</TitleStyled>
      </HeaderContainerStyled>
      <ContentWrapperStyled>
        <Avatar avatarSize="large" isEditable={true} />
        <ClubInfoWrapperStyled>
          <InputForm labelText={CLUB_NAME} inputType="text" placeholder={CLUB_NAME_PLACEHOLDER} />
          <InputForm labelText={CLUB_INTRO} inputType="text" placeholder={CLUB_INTRO_PLACEHOLDER} />
        </ClubInfoWrapperStyled>
      </ContentWrapperStyled>
      <ButtonWrapperStyled>
        <ActiveButton buttonText={CREATE_CLUB_BUTTON} fontSize="mediumTitle" />
      </ButtonWrapperStyled>
    </>
  );
};

export default CreateClubPage;
