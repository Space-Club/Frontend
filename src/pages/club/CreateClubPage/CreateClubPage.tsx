import ActiveButton from '@/components/ActiveButton/ActiveButton';
import Avatar from '@/components/common/Avatar/Avatar';
import InputForm from '@/components/common/InputForm/InputForm';
import TextAreaForm from '@/components/common/TextAreaForm/TextAreaForm';
import { CREATE_CLUB } from '@/constants/club';
import { ERROR_MESSAGE } from '@/constants/errorMessage';
import { useClub } from '@/hooks/query/club/useClub';
import { CreateClubFormValue } from '@/types/club';

import { ChangeEvent, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import {
  ButtonWrapperStyled,
  ClubInfoWrapperStyled,
  ContentWrapperStyled,
  ErrorMessageStyled,
  HeaderContainerStyled,
  ImageSelectWrapper,
  LengthCheckStyled,
  LengthCheckWrapper,
  TitleStyled,
} from './CreateClubPage.style';

const CreateClubPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<CreateClubFormValue>({
    defaultValues: {
      name: '',
      info: '',
      image: null,
    },
    mode: 'onChange',
  });

  const { createClub, isLoading } = useClub();
  const [clubName, clubInfo] = [watch('name'), watch('info')];
  const [previewImage, setPreviewImage] = useState<File | null>(null);

  const onSubmit: SubmitHandler<CreateClubFormValue> = (data) => {
    createClub(data);
  };

  const handleChangeImage = (event: ChangeEvent<HTMLInputElement>) => {
    const imageFile = event.target.files;

    if (!imageFile || imageFile.length < 0) {
      return;
    }

    setPreviewImage(imageFile[0]);
  };

  //#TODO: ImageForm의 ImageLabelStyled 적용하기

  return (
    <>
      <HeaderContainerStyled>
        <TitleStyled>{CREATE_CLUB.TITLE}</TitleStyled>
      </HeaderContainerStyled>
      <form onSubmit={handleSubmit(onSubmit)}>
        <ContentWrapperStyled>
          <ImageSelectWrapper>
            <Avatar
              avatarSize="large"
              isClub={true}
              profileImageSrc={previewImage ? `${URL.createObjectURL(previewImage)}` : ''}
            />
            <input
              type="file"
              accept="image/*"
              {...register('image')}
              onChange={handleChangeImage}
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
              })}
              // labelText={CREATE_CLUB.NAME}
              inputType="text"
              placeholder={CREATE_CLUB.NAME_PLACEHOLDER}
              maxLength={CREATE_CLUB.NAME_MAX_LENGTH}
            />
            <LengthCheckWrapper>
              <ErrorMessageStyled>{errors?.name ? errors.name.message : ''}</ErrorMessageStyled>
              <LengthCheckStyled>{`${clubName.length}/${CREATE_CLUB.NAME_MAX_LENGTH}`}</LengthCheckStyled>
            </LengthCheckWrapper>
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
              })}
              // labelText={CREATE_CLUB.INFO}
              rows={2}
              placeholder={CREATE_CLUB.INFO_PLACEHOLDER}
              maxLength={CREATE_CLUB.INFO_MAX_LENGTH}
            />
            <LengthCheckWrapper>
              <ErrorMessageStyled>{errors?.info ? errors.info.message : ''}</ErrorMessageStyled>
              <LengthCheckStyled>{`${clubInfo.length}/${CREATE_CLUB.INFO_MAX_LENGTH}`}</LengthCheckStyled>
            </LengthCheckWrapper>
          </ClubInfoWrapperStyled>
        </ContentWrapperStyled>
        <ButtonWrapperStyled>
          <ActiveButton
            buttonText={CREATE_CLUB.BUTTON}
            fontSize="mediumTitle"
            isLoading={isLoading}
            disabled={isLoading}
          />
        </ButtonWrapperStyled>
      </form>
    </>
  );
};

export default CreateClubPage;
