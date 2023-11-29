import { ERROR_MESSAGE } from '@/constants/errorMessage';
import { MODAL_TEXT } from '@/constants/modalMessage';
import useMyProfile from '@/hooks/query/user/useMyProfile';
import usePatchUserImageMutation from '@/hooks/query/user/usePatchUserImageMutation';
import usePutUserInfoMutation from '@/hooks/query/user/usePutUserInfoMutation';
import useLogout from '@/hooks/useLogout';
import useModal from '@/hooks/useModal';
import { RegisterFormValue } from '@/pages/RegisterPage/RegisterPage';
import { ErrorMessage } from '@/pages/RegisterPage/RegisterPage.style';
import { PurpleButton } from '@/pages/event/EventDetailPage/EventDetailPage.style';
import { validateName, validateNumber } from '@/utils/validate';

import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import ConfirmModal from '../Modals/ConfirmModal';
import ProfileImageDeleteButton from '../ProfileImageDeleteButton/ProfileImageDeleteButton';
import Avatar from '../common/Avatar/Avatar';
import InputForm from '../common/InputForm/InputForm';
import { InfoWrapper, ProfileButtonsWrapper, ProfileContainer } from './Profile.style';

const Profile = () => {
  const [isEdit, setIsEdit] = useState(false);
  const { modalClose, modalOpen, showModal } = useModal();
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormValue>();
  const { editUserImage } = usePatchUserImageMutation();
  const { editUserInfo } = usePutUserInfoMutation();
  const { logOut } = useLogout();

  const { data } = useMyProfile({ setValue });

  const { REQUIRED_NAME, REQUIRED_NUMBER, NAME } = ERROR_MESSAGE.REGISTER;

  const handleInfoEditComplete: SubmitHandler<RegisterFormValue> = ({ name, number }) => {
    editUserInfo({
      name,
      phoneNumber: number,
    });
    setIsEdit(false);
  };

  const handleLogoutConfirm = () => {
    modalClose();
    logOut();
  };

  const handleInfoEditStart = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setIsEdit(true);
  };

  const handleLogoutStart = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    modalOpen();
  };

  return (
    <>
      {showModal && (
        <ConfirmModal
          onClose={modalClose}
          onConfirm={handleLogoutConfirm}
          message={MODAL_TEXT.LOGOUT}
        />
      )}
      <ProfileContainer>
        <Avatar
          avatarSize="large"
          isEditable
          profileImageSrc={data?.profileImageUrl}
          onEdit={(file) => editUserImage({ userImage: file })}
        />
        <ProfileImageDeleteButton />
        <InfoWrapper>
          <form onSubmit={handleSubmit(handleInfoEditComplete)}>
            <ProfileButtonsWrapper>
              {!isEdit ? (
                <>
                  <PurpleButton reverse onClick={handleLogoutStart}>
                    로그아웃
                  </PurpleButton>
                  <PurpleButton onClick={handleInfoEditStart}>정보 수정하기</PurpleButton>
                </>
              ) : (
                <PurpleButton>저장</PurpleButton>
              )}
            </ProfileButtonsWrapper>
            <InputForm
              {...register('name', {
                required: REQUIRED_NAME,
                minLength: { value: 2, message: `${NAME}` },
                maxLength: { value: 10, message: `${NAME}` },
                validate: validateName,
              })}
              disabled={!isEdit}
              inputType="text"
            />
            {errors.name && <ErrorMessage>{errors.name?.message as string}</ErrorMessage>}
            <InputForm
              {...register('number', { required: REQUIRED_NUMBER, validate: validateNumber })}
              disabled={!isEdit}
              inputType="text"
            />
            {errors.number && <ErrorMessage>{errors.number?.message as string}</ErrorMessage>}
          </form>
        </InfoWrapper>
      </ProfileContainer>
    </>
  );
};

export default Profile;
