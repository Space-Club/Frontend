import ImageForm from '@/components/ImageForm/ImageForm';
import InputForm from '@/components/common/InputForm/InputForm';
import TextAreaForm from '@/components/common/TextAreaForm/TextAreaForm';
import { ERROR_MESSAGE } from '@/constants/errorMessage';
import { validateTimeCompare, validateTodayDate } from '@/utils/validate';

import { useEffect, useState } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import {
  ButtonWrapper,
  ContentArea,
  ErrorMessage,
  PerformanceFormContainer,
  PrevButton,
  SubmitButton,
  TwoInputContainer,
} from '../WriteEventInfoPage.style';

const RecruitForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [imgFile, setImgFile] = useState('');
  const navigate = useNavigate();

  const {
    REQUIRED_CLUB_NAME,
    REQUIRED_ACTIVITY_START_TIME,
    REQUIRED_ACTIVITY_LAST_TIME,
    REQUIRED_LOCATION,
    REQUIRED_FORM_START_TIME,
    REQUIRED_FORM_LAST_TIME,
    REQUIRED_POSTER,
    REQUIRED_CLUB_CONTENT,
    PERSONNEL,
    COST,
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
    console.log(data);
    // TODO: API 연결
  };

  return (
    <PerformanceFormContainer onSubmit={handleSubmit(onRecruitSubmitForm)}>
      <ContentArea>
        <InputForm
          {...register('title', {
            required: `${REQUIRED_CLUB_NAME}`,
            maxLength: 30,
          })}
          labelText="클럽 이름"
          inputType="text"
          placeholder="클럽 이름을 입력하세요"
        />
        {errors.title && <ErrorMessage>{errors.title.message as string}</ErrorMessage>}
        <TwoInputContainer>
          <InputForm
            {...register('startDate', {
              required: `${REQUIRED_ACTIVITY_START_TIME}`,
              validate: validateTodayDate,
            })}
            labelText="활동 시작 날짜"
            inputType="date"
          />
          <InputForm
            {...register('lastDate', {
              required: `${REQUIRED_ACTIVITY_LAST_TIME}`,
              validate: (value) => validateTimeCompare(value, watch('startDate')),
            })}
            labelText="활동 마감 날짜"
            inputType="date"
          />
        </TwoInputContainer>
        {errors.startDate && <ErrorMessage>{errors.startDate.message as string}</ErrorMessage>}
        {errors.lastDate && <ErrorMessage>{errors.lastDate.message as string}</ErrorMessage>}
        <InputForm
          {...register('location', { required: `${REQUIRED_LOCATION}` })}
          labelText="클럽 위치"
          inputType="text"
          placeholder="온라인일 경우, 온라인이라고 기재"
        />
        {errors.location && <ErrorMessage>{errors.location.message as string}</ErrorMessage>}
        <TwoInputContainer>
          <InputForm
            {...register('capacity', {
              max: { value: 999, message: `${PERSONNEL}` },
            })}
            labelText="모집 인원"
            inputType="number"
            placeholder="정수(1-n)"
          />
          <InputForm
            {...register('cost', {
              max: { value: 1000000, message: `${COST}` },
            })}
            labelText="회비"
            inputType="number"
            placeholder="정수(0-n)"
          />
        </TwoInputContainer>
        {errors.personnel && <ErrorMessage>{errors.personnel.message as string}</ErrorMessage>}
        {errors.cost && <ErrorMessage>{errors.cost.message as string}</ErrorMessage>}
        <TextAreaForm
          {...register('recruitTarget', {
            maxLength: { value: 100, message: LENGTH(100) },
          })}
          labelText="모집 대상"
          rows={5}
        />
        {errors.recruitTarget && (
          <ErrorMessage>{errors.recruitTarget.message as string}</ErrorMessage>
        )}
        <TwoInputContainer>
          <InputForm
            {...register('openDate', {
              required: `${REQUIRED_FORM_START_TIME}`,
              validate: validateTodayDate,
            })}
            labelText="신청 시작 날짜 및 시간"
            inputType="datetime-local"
          />
          <InputForm
            {...register('closeDate', {
              required: `${REQUIRED_FORM_LAST_TIME}`,
              validate: (value) => validateTimeCompare(value, watch('openDate')),
            })}
            labelText="마감 시작 날짜 및 시간"
            inputType="datetime-local"
          />
        </TwoInputContainer>
        {errors.openDate && <ErrorMessage>{errors.openDate.message as string}</ErrorMessage>}
        {errors.closeDate && <ErrorMessage>{errors.closeDate.message as string}</ErrorMessage>}
      </ContentArea>
      <ContentArea>
        <ImageForm
          {...register('poster', { required: `${REQUIRED_POSTER}` })}
          imgFile={imgFile}
          labelText="포스터"
          buttonText="이미지 선택하기"
        />
        {errors.poster && <ErrorMessage>{errors.poster.message as string}</ErrorMessage>}
        <TextAreaForm
          {...register('clubIntroduce', {
            required: `${REQUIRED_CLUB_CONTENT}`,
            maxLength: { value: 200, message: LENGTH(200) },
          })}
          labelText="클럽 소개 작성"
          rows={10}
        />
        {errors.clubIntroduce && (
          <ErrorMessage>{errors.clubIntroduce.message as string}</ErrorMessage>
        )}
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
