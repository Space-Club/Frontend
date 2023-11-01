import Avatar from '../common/Avatar/Avatar';
import InputForm from '../common/InputForm/InputForm';
import { EditButton, InfoWrapper, ProfileContainer } from './Profile.style';

const Profile = () => {
  return (
    <ProfileContainer>
      <Avatar avatarSize="large" isEditable />
      <InfoWrapper>
        <EditButton>정보 수정하기</EditButton>
        <InputForm inputType="text" />
        <InputForm inputType="text" />
      </InfoWrapper>
    </ProfileContainer>
  );
};

export default Profile;
