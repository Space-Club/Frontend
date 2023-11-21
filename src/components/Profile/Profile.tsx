import { ERROR_MESSAGE } from '@/constants/errorMessage';
import useMyProfile from '@/hooks/query/user/useMyProfile';
import usePatchUserImageMutation from '@/hooks/query/user/usePatchUserImageMutation';
import usePatchUserInfoMutation from '@/hooks/query/user/usePatchUserInfoMutation';
import { PurpleButton } from '@/pages/event/EventDetailPage/EventDetailPage.style';
import { validateName, validateNumber } from '@/utils/validate';

import { useState } from 'react';
import { useForm } from 'react-hook-form';

import Avatar from '../common/Avatar/Avatar';
import InputForm from '../common/InputForm/InputForm';
import { InfoWrapper, ProfileButtonsWrapper, ProfileContainer } from './Profile.style';

const Profile = () => {
  const [isEdit, setIsEdit] = useState(false);
  const { register, setValue, watch } = useForm();
  const { editUserImage } = usePatchUserImageMutation();
  const { editUserInfo } = usePatchUserInfoMutation();

  const { data } = useMyProfile({ setValue });

  const { REQUIRED_NAME, REQUIRED_NUMBER, NAME } = ERROR_MESSAGE.REGISTER;

  const handleInfoEditComplete = () => {
    setIsEdit(false);
    editUserInfo({
      name: watch('username'),
      phoneNumber: watch('phoneNumber'),
    });
  };

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
            <PurpleButton onClick={handleInfoEditComplete}>저장</PurpleButton>
          )}
        </ProfileButtonsWrapper>
        <InputForm
          {...register('username', {
            required: REQUIRED_NAME,
            minLength: { value: 2, message: `${NAME}` },
            maxLength: { value: 10, message: `${NAME}` },
            validate: validateName,
          })}
          disabled={!isEdit}
          inputType="text"
        />
        <InputForm
          {...register('phoneNumber', { required: REQUIRED_NUMBER, validate: validateNumber })}
          disabled={!isEdit}
          inputType="text"
        />
      </InfoWrapper>
    </ProfileContainer>
  );
};

export default Profile;
