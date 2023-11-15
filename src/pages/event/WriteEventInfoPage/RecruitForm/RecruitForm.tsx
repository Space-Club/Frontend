import ImageForm from '@/components/ImageForm/ImageForm';
import InputForm from '@/components/common/InputForm/InputForm';
import TextAreaForm from '@/components/common/TextAreaForm/TextAreaForm';
import { ERROR_MESSAGE } from '@/constants/errorMessage';
import useSubmitForm from '@/hooks/query/event/useSubmitForm';
import { FormPage } from '@/types/event';
import { validateTimeCompare, validateTodayDate } from '@/utils/validate';

import { useEffect, useState } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import {
  ButtonWrapper,
  ContentArea,
  ErrorMessage,
  HalfInputForm,
  PerformanceFormContainer,
  PrevButton,
  SubmitButton,
  TwoInputContainer,
} from '../WriteEventInfoPage.style';

const RecruitForm = ({ eventType, clubId }: FormPage) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [imgFile, setImgFile] = useState('');
  const navigate = useNavigate();
  const { submitForm, isSubmitLoading } = useSubmitForm({ eventType, clubId });

  const {
    REQUIRED_RECRUIT_NAME,
    REQUIRED_FORM_START_TIME,
    REQUIRED_FORM_LAST_TIME,
    REQUIRED_POSTER,
    REQUIRED_RECRUIT_CONTENT,
    PERSONNEL,
    LENGTH,
  } = ERROR_MESSAGE.EVENT;

  useEffect(() => {
    const imgSrc = watch('poster');
    if (imgSrc[0]) {
      const reader = new FileReader();
      reader.readAsDataURL(imgSrc[0]);
      reader.onload = () => {
        setImgFile(reader.result as string);
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [watch('poster')]);

  const onRecruitSubmitForm = (data: FieldValues) => {
    if (isSubmitLoading || !clubId) return;
    submitForm({ data, clubId, eventType });
  };

  return (
    <PerformanceFormContainer onSubmit={handleSubmit(onRecruitSubmitForm)}>
      <ContentArea>
        <InputForm
          {...register('title', {
            required: `${REQUIRED_RECRUIT_NAME}`,
            maxLength: 30,
          })}
          labelText="공고 제목"
          required
          inputType="text"
          placeholder="클럽 이름을 입력하세요"
        />
        {errors.title && <ErrorMessage>{errors.title.message as string}</ErrorMessage>}
        <InputForm
          {...register('activityArea')}
          labelText="활동 위치"
          inputType="text"
          placeholder="온라인일 경우, 온라인이라고 기재"
        />
        <TextAreaForm
          {...register('recruitmentTarget', {
            maxLength: { value: 50, message: LENGTH(50) },
          })}
          labelText="모집 대상"
          rows={2}
        />
        {errors.recruitmentTarget && (
          <ErrorMessage>{errors.recruitmentTarget.message as string}</ErrorMessage>
        )}
        <HalfInputForm
          {...register('capacity', {
            max: { value: 999, message: `${PERSONNEL}` },
          })}
          labelText="모집 인원"
          inputType="number"
          placeholder="정수(1-n)"
        />
        {errors.capacity && <ErrorMessage>{errors.capacity.message as string}</ErrorMessage>}
        <TwoInputContainer>
          <InputForm
            {...register('openDate', {
              required: `${REQUIRED_FORM_START_TIME}`,
              validate: {
                today: validateTodayDate,
                compare: (value) => validateTimeCompare(value, watch('closeDate')),
              },
            })}
            labelText="신청 시작 날짜 및 시간"
            required
            inputType="datetime-local"
          />
          <InputForm
            {...register('closeDate', {
              required: `${REQUIRED_FORM_LAST_TIME}`,
              validate: (value) => validateTimeCompare(watch('openDate'), value),
            })}
            labelText="마감 시작 날짜 및 시간"
            required
            inputType="datetime-local"
          />
        </TwoInputContainer>
        {errors.openDate && errors.openDate.message !== errors.closeDate?.message && (
          <ErrorMessage>{errors.openDate.message as string}</ErrorMessage>
        )}
        {errors.closeDate && <ErrorMessage>{errors.closeDate.message as string}</ErrorMessage>}
      </ContentArea>
      <ContentArea>
        <ImageForm
          {...register('poster', { required: `${REQUIRED_POSTER}` })}
          imgFile={imgFile}
          labelText="포스터"
          required
          buttonText="이미지 선택하기"
        />
        {errors.poster && <ErrorMessage>{errors.poster.message as string}</ErrorMessage>}
        <TextAreaForm
          {...register('content', {
            required: `${REQUIRED_RECRUIT_CONTENT}`,
            maxLength: { value: 200, message: LENGTH(200) },
          })}
          labelText="공고 내용"
          required
          rows={10}
        />
        {errors.content && <ErrorMessage>{errors.content.message as string}</ErrorMessage>}
      </ContentArea>
      <ButtonWrapper>
        <PrevButton type="button" onClick={() => navigate(-1)}>
          이전으로
        </PrevButton>
        <SubmitButton type="submit">다음</SubmitButton>
      </ButtonWrapper>
    </PerformanceFormContainer>
  );
};

export default RecruitForm;
