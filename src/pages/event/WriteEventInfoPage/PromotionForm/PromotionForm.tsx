import ImageForm from '@/components/ImageForm/ImageForm';
import InputForm from '@/components/common/InputForm/InputForm';
import TextAreaForm from '@/components/common/TextAreaForm/TextAreaForm';
import { ERROR_MESSAGE } from '@/constants/errorMessage';
import { FORM_INFO_VALUE } from '@/constants/limitInputValue';
import useSubmitForm from '@/hooks/query/event/useSubmitForm';
import { PromotionDetailResponse } from '@/types/api/getEventDetail';
import { FormPage } from '@/types/event';
import setFormValue from '@/utils/setFormValue';
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
      setFormValue({ setValue, setImgFile, eventDetail });

      setValue('startDate', `${eventDetail.startDate}T${eventDetail.startTime}`);
      setValue('location', eventDetail.activityArea);
    }
  }, [state, setValue]);

  const {
    REQUIRED_EVENT_NAME,
    REQUIRED_EVENT_START_TIME,
    REQUIRED_LOCATION,
    PERSONNEL,
    REQUIRED_FORM_START_TIME,
    REQUIRED_FORM_LAST_TIME,
    REQUIRED_POSTER,
    REQUIRED_EVENT_CONTENT,
    MAX_YEAR,
    MAX_LENGTH,
    FORM_START_TIME,
    LAST_TIME,
  } = ERROR_MESSAGE.EVENT;

  const { LIMIT_LENGTH, LIMIT_VALUE } = FORM_INFO_VALUE;

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
            maxLength: {
              value: LIMIT_LENGTH.TITLE_MAX,
              message: MAX_LENGTH('행사 이름', LIMIT_LENGTH.TITLE_MAX),
            },
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
            validate: {
              today: validateTodayDate,
              compare: (value) =>
                validateTimeCompare(watch('closeDate'), value, FORM_START_TIME('행사')),
            },
            max: { value: LIMIT_VALUE.DATE_MAX, message: MAX_YEAR },
          })}
          labelText="행사 시작 날짜 및 시간"
          required
          inputType="datetime-local"
        />
        {errors.startDate && <ErrorMessage>{errors.startDate.message as string}</ErrorMessage>}
        <InputForm
          {...register('location', {
            required: `${REQUIRED_LOCATION}`,
            maxLength: {
              value: LIMIT_LENGTH.LOCATION_MAX,
              message: MAX_LENGTH('행사 장소', LIMIT_LENGTH.LOCATION_MAX),
            },
          })}
          labelText="행사 장소"
          required
          inputType="text"
        />
        {errors.location && <ErrorMessage>{errors.location.message as string}</ErrorMessage>}
        <HalfInputForm
          {...register('capacity', {
            min: { value: LIMIT_VALUE.CAPACITY_MIN, message: `${PERSONNEL}` },
            max: { value: LIMIT_VALUE.CAPACITY_MAX, message: `${PERSONNEL}` },
          })}
          labelText="정원"
          inputType="number"
          placeholder="정수(0-n)"
        />
        {errors.capacity && <ErrorMessage>{errors.capacity.message as string}</ErrorMessage>}
        <TwoInputContainer>
          <InputForm
            {...register('openDate', {
              required: `${REQUIRED_FORM_START_TIME}`,
              validate: {
                today: validateTodayDate,
                compare: (value) => validateTimeCompare(value, watch('closeDate'), LAST_TIME),
              },
              max: { value: LIMIT_VALUE.DATE_MAX, message: MAX_YEAR },
            })}
            labelText="신청 시작 날짜 및 시간"
            required
            inputType="datetime-local"
            containerWidth="50%"
          />
          <InputForm
            {...register('closeDate', {
              required: `${REQUIRED_FORM_LAST_TIME}`,
              validate: (value) => validateTimeCompare(watch('openDate'), value, LAST_TIME),
              max: { value: LIMIT_VALUE.DATE_MAX, message: MAX_YEAR },
            })}
            labelText="마감 시작 날짜 및 시간"
            required
            inputType="datetime-local"
            containerWidth="50%"
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
            maxLength: {
              value: LIMIT_LENGTH.CONTENT_MAX,
              message: MAX_LENGTH('행사 내용', LIMIT_LENGTH.CONTENT_MAX),
            },
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
