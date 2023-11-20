import { ERROR_MESSAGE } from '@/constants/errorMessage';
import useMyProfile from '@/hooks/query/user/useMyProfile';
import usePatchUserImageMutation from '@/hooks/query/user/usePatchUserImageMutation';
import { PurpleButton } from '@/pages/event/EventDetailPage/EventDetailPage.style';
import { validateName, validateNumber } from '@/utils/validate';

import { useState } from 'react';
import { useForm } from 'react-hook-form';

import Avatar from '../common/Avatar/Avatar';
import InputForm from '../common/InputForm/InputForm';
import { InfoWrapper, ProfileButtonsWrapper, ProfileContainer } from './Profile.style';

const Profile = () => {
  const [isEdit, setIsEdit] = useState(false);
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
        <ProfileButtonsWrapper>
          {!isEdit ? (
            <PurpleButton onClick={() => setIsEdit(true)}>수정하기</PurpleButton>
          ) : (
            <PurpleButton onClick={() => setIsEdit(false)}>저장</PurpleButton>
          )}
        </ProfileButtonsWrapper>
        <InputForm
          {...register('username', {
            required: REQUIRED_NAME,
            minLength: { value: 2, message: `${NAME}` },
            maxLength: { value: 10, message: `${NAME}` },
            validate: validateName,
          })}
          editable={isEdit}
          inputType="text"
        />
        <InputForm
          {...register('phoneNumber', { required: REQUIRED_NUMBER, validate: validateNumber })}
          editable={isEdit}
          inputType="text"
        />
      </InfoWrapper>
    </ProfileContainer>
  );
};

export default Profile;
