import ImageForm from '@/components/ImageForm/ImageForm';
import InputForm from '@/components/common/InputForm/InputForm';
import TextAreaForm from '@/components/common/TextAreaForm/TextAreaForm';
import { ERROR_MESSAGE } from '@/constants/errorMessage';
import useSubmitForm from '@/hooks/query/event/useSubmitForm';
import { PromotionDetailResponse } from '@/types/api/getEventDetail';
import { FormPage } from '@/types/event';
import { validateTimeCompare, validateTodayDate } from '@/utils/validate';

import { useEffect, useState } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';

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

const PromotionForm = ({ eventType, clubId }: FormPage) => {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm();
  const { state } = useLocation();
  const [imgFile, setImgFile] = useState('');
  const navigate = useNavigate();
  const { submitForm, isSubmitLoading } = useSubmitForm({ eventType, clubId, isEdit: !!state });

  useEffect(() => {
    if (state) {
      const eventDetail: PromotionDetailResponse = state.eventDetail;

      setValue('title', eventDetail.title);
      setValue('startDate', `${eventDetail.startDate}T${eventDetail.startTime}`);
      setValue('location', eventDetail.activityArea);
      setValue('capacity', eventDetail.capacity);
      setValue('openDate', `${eventDetail.formOpenDate}T${eventDetail.formOpenTime}`);
      setValue('closeDate', `${eventDetail.formCloseDate}T${eventDetail.formCloseTime}`);
      setImgFile(eventDetail.posterImageUrl);
      setValue('content', eventDetail.content);
    }
  });

  const {
    REQUIRED_EVENT_NAME,
    REQUIRED_EVENT_START_TIME,
    REQUIRED_LOCATION,
    PERSONNEL,
    REQUIRED_FORM_START_TIME,
    REQUIRED_FORM_LAST_TIME,
    REQUIRED_POSTER,
    REQUIRED_EVENT_CONTENT,
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

  const onPromotionSubmitForm = async (data: FieldValues) => {
    if (isSubmitLoading || !clubId) return;
    if (state) {
      submitForm({ data, clubId, eventType, eventId: state.eventId });
    } else {
      submitForm({ data, clubId, eventType });
    }
  };

  return (
    <PerformanceFormContainer onSubmit={handleSubmit(onPromotionSubmitForm)}>
      <ContentArea>
        <InputForm
          {...register('title', {
            required: `${REQUIRED_EVENT_NAME}`,
            maxLength: 30,
          })}
          labelText="행사 이름"
          required
          inputType="text"
          placeholder="행사 이름을 입력하세요."
        />
        {errors.title && <ErrorMessage>{errors.title.message as string}</ErrorMessage>}
        <HalfInputForm
          {...register('startDate', {
            required: `${REQUIRED_EVENT_START_TIME}`,
            validate: validateTodayDate,
          })}
          labelText="행사 시작 날짜 및 시간"
          required
          inputType="datetime-local"
        />
        {errors.startDate && <ErrorMessage>{errors.startDate.message as string}</ErrorMessage>}
        <InputForm
          {...register('location', { required: `${REQUIRED_LOCATION}` })}
          labelText="행사 장소"
          required
          inputType="text"
        />
        {errors.location && <ErrorMessage>{errors.location.message as string}</ErrorMessage>}
        <HalfInputForm
          {...register('capacity', {
            max: { value: 999, message: `${PERSONNEL}` },
          })}
          labelText="정원"
          inputType="number"
          placeholder="정수(0-n)"
        />
        {errors.capacity && <ErrorMessage>{errors.capacity.message as string}</ErrorMessage>}
        <TwoInputContainer>
          <HalfInputForm
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
          <HalfInputForm
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
          {...register('poster', { required: state ? false : `${REQUIRED_POSTER}` })}
          imgFile={imgFile}
          labelText="포스터"
          required
          buttonText="이미지 선택하기"
        />
        {errors.poster && <ErrorMessage>{errors.poster.message as string}</ErrorMessage>}
        <TextAreaForm
          {...register('content', {
            required: `${REQUIRED_EVENT_CONTENT}`,
            maxLength: { value: 200, message: LENGTH(200) },
          })}
          labelText="행사 내용 작성"
          required
          rows={10}
        />
        {errors.content && <ErrorMessage>{errors.content?.message as string}</ErrorMessage>}
      </ContentArea>
      <ButtonWrapper>
        <PrevButton type="button" onClick={() => navigate(-1)}>
          이전으로
        </PrevButton>
        <SubmitButton type="submit">{state ? '수정' : '다음'}</SubmitButton>
      </ButtonWrapper>
    </PerformanceFormContainer>
  );
};

export default PromotionForm;
