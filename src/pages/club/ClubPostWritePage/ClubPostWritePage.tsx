import ClubHeader from '@/components/ClubHeader/ClubHeader';
import Button from '@/components/common/Button/Button';
import ClubBanner from '@/components/common/ClubBanner/ClubBanner';
import {
  MAX_CLUB_POST_CONTENT_LENGTH,
  MAX_CLUB_POST_TITLE_LENGTH,
  MIN_CLUB_POST_CONTENT_LENGTH,
  MIN_CLUB_POST_TITLE_LENGTH,
} from '@/constants/club';
import usePostCreateClubPost from '@/hooks/query/club/usePostCreateClubPost';

import { SubmitHandler, useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';

import {
  ButtonWrapper,
  ClubPostWritePageContainer,
  ClubPostWriteTopWrapper,
  ContentStyled,
  ContentWrapper,
  ErrorMessageStyled,
  FileInputWrapper,
  TitleStyled,
} from './ClubPostWritePage.style';

interface ClubPostWriteValue {
  image: File;
  title: string;
  content: string;
}

const ClubPostWritePage = () => {
  const { clubId } = useParams();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ClubPostWriteValue>({
    defaultValues: {
      title: '',
      content: '',
      image: undefined,
    },
  });
  if (!clubId) throw new Error('클럽 ID를 찾을 수 없습니다');
  const { createPost } = usePostCreateClubPost();

  const onSubmit: SubmitHandler<ClubPostWriteValue> = (data) => {
    createPost({ clubId, ...data, title: data.title?.trim(), content: data.content?.trim() });
  };

  const handleInputValueValidate = (value: string) => {
    if (value.trim() === '') {
      return '공백 문자만 입력할 수 없습니다.';
    }
  };

  return (
    <>
      <ClubHeader clubId={clubId} />
      <ClubPostWritePageContainer>
        <ClubPostWriteTopWrapper>
          <ClubBanner withdrawClubButton clubId={clubId} bannerSize="small" />
        </ClubPostWriteTopWrapper>
        <form onSubmit={handleSubmit(onSubmit)}>
          <ContentWrapper>
            <ButtonWrapper>
              <Button buttonText="작성 완료" />
            </ButtonWrapper>
            <TitleStyled
              {...register('title', {
                required: '제목 입력은 필수입니다.',
                minLength: {
                  value: MIN_CLUB_POST_TITLE_LENGTH,
                  message: `${MIN_CLUB_POST_TITLE_LENGTH}글자 이상 입력해주세요.`,
                },
                maxLength: {
                  value: MAX_CLUB_POST_TITLE_LENGTH,
                  message: `${MAX_CLUB_POST_TITLE_LENGTH}자 이상 입력할 수 없습니다.`,
                },
                validate: (value) => handleInputValueValidate(value ?? ''),
              })}
              placeholder="제목을 입력해주세요."
            />
            <ErrorMessageStyled>{errors?.title ? errors.title.message : ''}</ErrorMessageStyled>
            <ContentStyled
              {...register('content', {
                required: '내용 입력은 필수입니다.',
                minLength: {
                  value: MIN_CLUB_POST_CONTENT_LENGTH,
                  message: `${MIN_CLUB_POST_CONTENT_LENGTH}글자 이상 입력해주세요.`,
                },
                maxLength: {
                  value: MAX_CLUB_POST_CONTENT_LENGTH,
                  message: `${MAX_CLUB_POST_CONTENT_LENGTH}자 이상 입력할 수 없습니다.`,
                },
                validate: (value) => handleInputValueValidate(value ?? ''),
              })}
              placeholder="내용을 입력해주세요."
            />
            <ErrorMessageStyled>{errors?.content ? errors.content.message : ''}</ErrorMessageStyled>
            <FileInputWrapper>
              <input {...register('image')} type="file" accept=".jpg, .jpeg, .png, .heic" />
            </FileInputWrapper>
          </ContentWrapper>
        </form>
      </ClubPostWritePageContainer>
    </>
  );
};

export default ClubPostWritePage;
