import getMyProfileInfo from '@/apis/users/getMyProfileInfo';
import { ERROR_MESSAGE } from '@/constants/errorMessage';
import { getStorage } from '@/utils/localStorage';
import { validateName, validateNumber } from '@/utils/validate';

import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

import { useQuery } from '@tanstack/react-query';

import Avatar from '../common/Avatar/Avatar';
import InputForm from '../common/InputForm/InputForm';
import { EditButton, InfoWrapper, ProfileContainer } from './Profile.style';

const QUERY_KEY = {
  ALL_EVENTS: 'USER_PROFILE',
  ID: getStorage('token'),
};

const Profile = () => {
  const { register, setValue } = useForm();
  const { data, refetch } = useQuery({
    queryKey: [QUERY_KEY.ALL_EVENTS, QUERY_KEY.ID],
    queryFn: () => getMyProfileInfo(),
    onSuccess: ({ username, phoneNumber }) => {
      setValue('username', username);
      setValue('phoneNumber', phoneNumber);
    },
    enabled: false,
  });
  // TODO : 정보수정하기 버튼
  useEffect(() => {
    refetch();
  }, [refetch]);

  const { REQUIRED_NAME, REQUIRED_NUMBER, NAME } = ERROR_MESSAGE.REGISTER;

  return (
    <ProfileContainer>
      <Avatar avatarSize="large" isEditable profileImageSrc={data?.profileImageUrl} />
      <InfoWrapper>
        <EditButton>정보 수정하기</EditButton>
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
      </InfoWrapper>
    </ProfileContainer>
  );
};

export default Profile;
