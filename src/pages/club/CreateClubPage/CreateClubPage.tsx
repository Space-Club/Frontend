import { CreateClubFormValue } from '@/apis/club/postCreateClub';
import ActiveButton from '@/components/ActiveButton/ActiveButton';
import Avatar from '@/components/common/Avatar/Avatar';
import InputForm from '@/components/common/InputForm/InputForm';
import { CREATE_CLUB } from '@/constants/club';
import { useClub } from '@/hooks/query/club/useClub';

import { ChangeEvent, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import {
  ButtonWrapperStyled,
  ClubInfoWrapperStyled,
  ContentWrapperStyled,
  HeaderContainerStyled,
  ImageSelectWrapper,
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
  } = useForm<CreateClubFormValue>({
    defaultValues: {
      name: '',
      info: '',
      image: null,
      owner: '이채연', //#TODO: 로그인 한 유저 정보 받아오기
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
  //#TODO: InputForm의 labelText props 옵셔널로 변경
  //#TODO: 클럽소개 TextAreaForm으로 변경하기

  return (
    <>
      <HeaderContainerStyled>
        <TitleStyled>{CREATE_CLUB_TEXT}</TitleStyled>
      </HeaderContainerStyled>
      <form onSubmit={handleSubmit(onSubmit)}>
        <ContentWrapperStyled>
          <ImageSelectWrapper>
            <Avatar
              avatarSize="large"
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
                required: '클럽 이름을 작성해주세요.',
                minLength: { value: 2, message: '최소 두 글자 이상 작성해주세요.' },
                maxLength: { value: 12, message: '12글자 이상 작성할 수 없습니다.' },
              })}
              labelText={CLUB_NAME}
              inputType="text"
              placeholder={CLUB_NAME_PLACEHOLDER}
              maxLenght={12}
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
              placeholder={CLUB_INTRO_PLACEHOLDER}
              maxLenght={25}
            />
            {errors?.info && <span>{errors.info.message}</span>}
            <span>{`${clubInfo.length}/25`}</span>
          </ClubInfoWrapperStyled>
        </ContentWrapperStyled>
        <ButtonWrapperStyled>
          <ActiveButton
            buttonText={CREATE_CLUB_BUTTON}
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
