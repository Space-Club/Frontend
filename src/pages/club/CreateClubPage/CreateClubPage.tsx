import ActiveButton from '@/components/ActiveButton/ActiveButton';
import Avatar from '@/components/common/Avatar/Avatar';
import InputForm from '@/components/common/InputForm/InputForm';
import { CREATE_CLUB } from '@/constants/club';

import { ChangeEvent, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import {
  ButtonWrapperStyled,
  ClubInfoWrapperStyled,
  ContentWrapperStyled,
  HeaderContainerStyled,
  TitleStyled,
} from './CreateClubPage.style';

interface FormValueType {
  name: string;
  info: string;
  image: File | string | null;
}

const CreateClubPage = () => {
  const {
    CREATE_CLUB_TEXT,
    CLUB_NAME,
    CLUB_NAME_PLACEHOLDER,
    CLUB_INTRO,
    CLUB_INTRO_PLACEHOLDER,
    CREATE_CLUB_BUTTON,
  } = CREATE_CLUB;
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormValueType>({
    defaultValues: {
      name: '',
      info: '',
      image: null,
    },
    mode: 'onChange',
  });

  const [clubName, clubInfo] = [watch('name'), watch('info')];
  const [previewImage, setPreviewImage] = useState<File | null>(null);

  const onSubmit: SubmitHandler<FormValueType> = (data) => {
    console.log(data);
    //createClub({...data, previewImage})
  };

  const handleChangeImage = (event: ChangeEvent<HTMLInputElement>) => {
    const imageFile = event.target.files;

    if (!imageFile || imageFile.length < 0) {
      return;
    }

    setPreviewImage(imageFile[0]);
  };

  return (
    <>
      <HeaderContainerStyled>
        <TitleStyled>{CREATE_CLUB_TEXT}</TitleStyled>
      </HeaderContainerStyled>
      <form onSubmit={handleSubmit(onSubmit)}>
        <ContentWrapperStyled>
          <Avatar
            avatarShape="large"
            profileImageSrc={previewImage ? `${URL.createObjectURL(previewImage)}` : ''}
          />
          <input type="file" accept="image/*" {...register('image')} onChange={handleChangeImage} />
          <ClubInfoWrapperStyled>
            <InputForm
              {...register('name', {
                required: '클럽 이름을 작성해주세요.',
                minLength: { value: 2, message: '최소 두 글자 이상 작성해주세요.' },
                maxLength: { value: 12, message: '12글자 이상 작성할 수 없습니다.' },
              })}
              labelText={CLUB_NAME}
              inputType="text"
              placeholoder={CLUB_NAME_PLACEHOLDER}
            />
            {errors?.name && <span>{errors.name.message}</span>}
            <span>{`${clubName.length}/12`}</span>
            <InputForm
              {...register('info', {
                required: '클럽 소개를 작성해주세요.',
                minLength: { value: 2, message: '최소 두 글자 이상 작성해주세요.' },
                maxLength: { value: 25, message: '25글자 이상 작성할 수 없습니다. ' },
              })}
              labelText={CLUB_INTRO}
              inputType="text"
              placeholoder={CLUB_INTRO_PLACEHOLDER}
            />
            {errors?.info && <span>{errors.info.message}</span>}
            <span>{`${clubInfo.length}/25`}</span>
          </ClubInfoWrapperStyled>
        </ContentWrapperStyled>
        <ButtonWrapperStyled>
          <ActiveButton buttonText={CREATE_CLUB_BUTTON} fontSize="mediumTitle" />
        </ButtonWrapperStyled>
      </form>
    </>
  );
};

export default CreateClubPage;
