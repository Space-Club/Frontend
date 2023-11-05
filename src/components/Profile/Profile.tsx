<<<<<<< HEAD
<<<<<<< HEAD
import getMyProfileInfo from '@/apis/users/getMyProfileInfo';
=======
>>>>>>> 134da3e (코드리뷰 profile types 파일 이동및 buttonType추가)
import { ERROR_MESSAGE } from '@/constants/errorMessage';
import useMyProfile from '@/hooks/query/user/useMyProfile';
import { validateName, validateNumber } from '@/utils/validate';

import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

<<<<<<< HEAD
import { useQuery } from '@tanstack/react-query';

=======
>>>>>>> 9394bae (feat: profilePage ui 구현)
=======
>>>>>>> 134da3e (코드리뷰 profile types 파일 이동및 buttonType추가)
import Avatar from '../common/Avatar/Avatar';
import InputForm from '../common/InputForm/InputForm';
import { EditButton, InfoWrapper, ProfileContainer } from './Profile.style';

<<<<<<< HEAD
<<<<<<< HEAD
const QUERY_KEY = {
  ALL_EVENTS: 'USER_PROFILE',
  ID: getStorage('token'),
};

=======
>>>>>>> 134da3e (코드리뷰 profile types 파일 이동및 buttonType추가)
const Profile = () => {
  const { register, setValue } = useForm();
  const { data, refetch } = useMyProfile({ setValue });
  // TODO : 정보수정하기 버튼
  useEffect(() => {
    refetch();
  }, [refetch]);

  const { REQUIRED_NAME, REQUIRED_NUMBER, NAME } = ERROR_MESSAGE.REGISTER;

  return (
    <ProfileContainer>
      <Avatar avatarSize="large" isEditable profileImageSrc={data?.profileImageUrl} />
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
=======
const Profile = () => {
  return (
    <ProfileContainer>
      <Avatar avatarSize="large" isEditable />
      <InfoWrapper>
        <EditButton>정보 수정하기</EditButton>
        <InputForm inputType="text" />
        <InputForm inputType="text" />
>>>>>>> 9394bae (feat: profilePage ui 구현)
      </InfoWrapper>
    </ProfileContainer>
  );
};

export default Profile;
