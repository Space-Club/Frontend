import ClubHeader from '@/components/ClubHeader/ClubHeader';
import Button from '@/components/common/Button/Button';
import ClubBanner from '@/components/common/ClubBanner/ClubBanner';

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

  const onSubmit: SubmitHandler<ClubPostWriteValue> = () => {};

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
                  value: 2,
                  message: '2글자 이상 입력해주세요.',
                },
                maxLength: {
                  value: 30,
                  message: '30자 이상 입력할 수 없습니다.',
                },
              })}
              placeholder="제목을 입력해주세요."
            />
            <ErrorMessageStyled>{errors?.title ? errors.title.message : ''}</ErrorMessageStyled>
            <ContentStyled
              {...register('content', {
                required: '내용 입력은 필수입니다.',
                minLength: {
                  value: 2,
                  message: '2글자 이상 입력해주세요.',
                },
                maxLength: {
                  value: 1000,
                  message: '1000자 이상 입력할 수 없습니다.',
                },
              })}
              placeholder="내용을 입력해주세요."
            />
            <ErrorMessageStyled>{errors?.content ? errors.content.message : ''}</ErrorMessageStyled>
            <FileInputWrapper>
              <input type="file" accept=".jpg, .jpeg, .png, .heic" />
            </FileInputWrapper>
          </ContentWrapper>
        </form>
      </ClubPostWritePageContainer>
    </>
  );
};

export default ClubPostWritePage;
