import ActiveButton from '@/components/ActiveButton/ActiveButton';
import Avatar from '@/components/common/Avatar/Avatar';
import InputForm from '@/components/common/InputForm/InputForm';
import TextAreaForm from '@/components/common/TextAreaForm/TextAreaForm';
import { CREATE_CLUB } from '@/constants/club';
import { ERROR_MESSAGE } from '@/constants/errorMessage';
import useClub from '@/hooks/query/club/useClub';
import { CreateClubFormValue } from '@/types/club';

import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import {
  ButtonWrapperStyled,
  ClubInfoWrapperStyled,
  ContentWrapperStyled,
  ErrorMessageStyled,
  ImageSelectWrapper,
  TitleStyled,
} from './CreateClubPage.style';

const CreateClubPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateClubFormValue>({
    defaultValues: {
      name: '',
      info: '',
      image: undefined,
    },
    mode: 'onChange',
  });

  const { createClub, isLoading } = useClub();
  const [previewImage, setPreviewImage] = useState<File | null>(null);

  const onSubmit: SubmitHandler<CreateClubFormValue> = (data) => {
    const newData = previewImage
      ? { ...data, name: data.name?.trim(), info: data.info?.trim(), image: previewImage }
      : { ...data, name: data.name?.trim(), info: data.info?.trim() };

    createClub(newData);
  };

  const handleInputValueValidate = (value: string) => {
    if (value.trim() === '') {
      return '공백 문자만 입력할 수 없습니다.';
    }

    return true;
  };

  return (
    <>
      <TitleStyled>{CREATE_CLUB.TITLE}</TitleStyled>
      <form onSubmit={handleSubmit(onSubmit)}>
        <ContentWrapperStyled>
          <ImageSelectWrapper>
            <Avatar
              avatarSize="large"
              isClub={true}
              profileImageSrc={previewImage ? `${URL.createObjectURL(previewImage)}` : ''}
              isEditable
              onEdit={(file) => setPreviewImage(file)}
            />
          </ImageSelectWrapper>
          <ClubInfoWrapperStyled>
            <InputForm
              {...register('name', {
                required: ERROR_MESSAGE.CLUB.REQUIRED_NAME,
                minLength: {
                  value: CREATE_CLUB.NAME_MIN_LENGTH,
                  message: ERROR_MESSAGE.CLUB.MIN_LENGTH_NAME,
                },
                maxLength: {
                  value: CREATE_CLUB.NAME_MAX_LENGTH,
                  message: ERROR_MESSAGE.CLUB.MAX_LENGTH_NAME,
                },
                validate: (value) => handleInputValueValidate(value ?? ''),
              })}
              inputType="text"
              placeholder={CREATE_CLUB.NAME_PLACEHOLDER}
              maxLength={CREATE_CLUB.NAME_MAX_LENGTH}
            />
            <ErrorMessageStyled>{errors?.name ? errors.name.message : ''}</ErrorMessageStyled>
            <TextAreaForm
              {...register('info', {
                required: ERROR_MESSAGE.CLUB.REQUIRED_INFO,
                minLength: {
                  value: CREATE_CLUB.INFO_MIN_LENGTH,
                  message: ERROR_MESSAGE.CLUB.MIN_LENGTH_INFO,
                },
                maxLength: {
                  value: CREATE_CLUB.INFO_MAX_LENGTH,
                  message: ERROR_MESSAGE.CLUB.MAX_LENGTH_INFO,
                },
                validate: (value) => handleInputValueValidate(value ?? ''),
              })}
              rows={2}
              placeholder={CREATE_CLUB.INFO_PLACEHOLDER}
              maxLength={CREATE_CLUB.INFO_MAX_LENGTH}
            />
            <ErrorMessageStyled>{errors?.info ? errors.info.message : ''}</ErrorMessageStyled>
          </ClubInfoWrapperStyled>
        </ContentWrapperStyled>
        <ButtonWrapperStyled>
          <ActiveButton
            buttonText={CREATE_CLUB.BUTTON}
            fontSize="mediumContent"
            isLoading={isLoading}
            disabled={isLoading}
          />
        </ButtonWrapperStyled>
      </form>
    </>
  );
};

export default CreateClubPage;
