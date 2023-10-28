import ActiveButton from '@/components/ActiveButton/ActiveButton';
import Avatar from '@/components/common/Avatar/Avatar';
import InputForm from '@/components/common/InputForm/InputForm';
import { createClub } from '@/constants/club';

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
        <TitleStyled>{createClub.CREATE_CLUB}</TitleStyled>
      </HeaderContainerStyled>
      <ContentWrapperStyled>
        <Avatar avatarShape="large" isEditable={true} />
        <ClubInfoWrapperStyled>
          <InputForm
            labelText={createClub.CLUB_NAME}
            inputType="text"
            placeholoder={createClub.CLUB_NAME_PLACEHOLDER}
          />
          <InputForm
            labelText={createClub.CLUB_INTRO}
            inputType="text"
            placeholoder={createClub.CLUB_INTRO_PLACEHOLDER}
          />
        </ClubInfoWrapperStyled>
      </ContentWrapperStyled>
      <ButtonWrapperStyled>
        <ActiveButton buttonText={createClub.CREATE_CLUB_BUTTON} fontSize="mediumTitle" />
      </ButtonWrapperStyled>
    </>
  );
};

export default CreateClubPage;
