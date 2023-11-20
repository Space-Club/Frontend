import { ERROR_MESSAGE } from '@/constants/errorMessage';
import useMyProfile from '@/hooks/query/user/useMyProfile';
import usePatchUserImageMutation from '@/hooks/query/user/usePatchUserImageMutation';
import { validateName, validateNumber } from '@/utils/validate';

import { useForm } from 'react-hook-form';

import DeleteUserButton from '../DeleteUserButton/DeleteUserButton';
import Avatar from '../common/Avatar/Avatar';
import InputForm from '../common/InputForm/InputForm';
import {
  DeleteUserButtonWrapper,
  EditButton,
  InfoWrapper,
  ProfileContainer,
} from './Profile.style';

const Profile = () => {
  const { register, setValue } = useForm();
  const { editUserImage } = usePatchUserImageMutation();
  const { data } = useMyProfile({ setValue });

  const { REQUIRED_NAME, REQUIRED_NUMBER, NAME } = ERROR_MESSAGE.REGISTER;

  return (
    <ProfileContainer>
      <Avatar
        avatarSize="large"
        isEditable
        profileImageSrc={data?.profileImageUrl}
        onEdit={(file) => editUserImage({ userImage: file })}
      />
      <InfoWrapper>
        <EditButton buttonText="정보 수정하기" />
        <InputForm
          {...register('username', {
            required: REQUIRED_NAME,
            minLength: { value: 2, message: `${NAME}` },
            maxLength: { value: 10, message: `${NAME}` },
            validate: validateName,
          })}
          inputType="text"
        />
        <InputForm
          {...register('phoneNumber', { required: REQUIRED_NUMBER, validate: validateNumber })}
          inputType="text"
        />
        <DeleteUserButtonWrapper>
          <DeleteUserButton />
        </DeleteUserButtonWrapper>
      </InfoWrapper>
    </ProfileContainer>
  );
};

export default Profile;
