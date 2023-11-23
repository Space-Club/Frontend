import ImageForm from '@/components/ImageForm/ImageForm';
import InputForm from '@/components/common/InputForm/InputForm';
import TextAreaForm from '@/components/common/TextAreaForm/TextAreaForm';
import { ERROR_MESSAGE } from '@/constants/errorMessage';
import { FORM_INFO_VALUE } from '@/constants/limitInputValue';
import useSubmitForm from '@/hooks/query/event/useSubmitForm';
import { ClubDetailResponse } from '@/types/api/getEventDetail';
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
  PerformanceFormContainer,
  PrevButton,
  SubmitButton,
  TwoInputContainer,
} from '../WriteEventInfoPage.style';

const ScheduleForm = ({ eventType, clubId }: FormPage) => {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm({});
  const { state } = useLocation();
  const [imgFile, setImgFile] = useState('');
  const navigate = useNavigate();
  const { submitForm, isSubmitLoading } = useSubmitForm({ eventType, clubId, isEdit: !!state });

  useEffect(() => {
    if (state) {
      const eventDetail: ClubDetailResponse = state.eventDetail;
      setFormValue({ setValue, setImgFile, eventDetail });

      setValue('startDate', `${eventDetail.startDate}T${eventDetail.startTime}`);
      setValue('endDate', `${eventDetail.endDate}T${eventDetail.endTime}`);
      setValue('location', eventDetail.location);
      setValue('dues', eventDetail.dues);
    }
  }, [state, setValue]);

  const {
    REQUIRED_SCHEDULE_NAME,
    REQUIRED_ACTIVITY_START_TIME,
    REQUIRED_ACTIVITY_LAST_TIME,
    REQUIRED_SCHEDULE_MASTER,
    TITLE,
    PERSONNEL,
    LOCATION,
    COST,
    MASTER,
    ENTER_BOTH_SIDE,
    MAX_YEAR,
    CONTENT,
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

  const onScheduleSubmitForm = (data: FieldValues) => {
    if (isSubmitLoading || !clubId) return;
    if (state) {
      submitForm({ data, clubId, eventType, eventId: state.eventId });
    } else {
      submitForm({ data, clubId, eventType });
    }
  };

  const openDate = watch('openDate');
  const closeDate = watch('closeDate');

  return (
    <PerformanceFormContainer onSubmit={handleSubmit(onScheduleSubmitForm)}>
      <ContentArea>
        <InputForm
          {...register('title', {
            required: REQUIRED_SCHEDULE_NAME,
            maxLength: { value: LIMIT_LENGTH.TITLE_MAX, message: TITLE },
          })}
          labelText="일정 제목"
          required
          inputType="text"
          placeholder="일정 제목을 입력해주세요."
        />
        {errors.title && <ErrorMessage>{errors.title.message as string}</ErrorMessage>}
        <TwoInputContainer>
          <InputForm
            {...register('startDate', {
              required: REQUIRED_ACTIVITY_START_TIME,
              validate: {
                today: validateTodayDate,
                compare: (value) => validateTimeCompare(value, watch('endDate')),
              },
              max: { value: LIMIT_VALUE.DATE_MAX, message: MAX_YEAR },
            })}
            labelText="활동 시작 날짜"
            required
            inputType="datetime-local"
            containerWidth="50%"
          />
          <InputForm
            {...register('endDate', {
              required: REQUIRED_ACTIVITY_LAST_TIME,
              validate: {
                compare: (value) => validateTimeCompare(watch('startDate'), value),
              },
              max: { value: LIMIT_VALUE.DATE_MAX, message: MAX_YEAR },
            })}
            labelText="활동 마감 날짜"
            required
            inputType="datetime-local"
            containerWidth="50%"
          />
        </TwoInputContainer>
        {errors.startDate && errors.startDate.message !== errors.endDate?.message && (
          <ErrorMessage>{errors.startDate.message as string}</ErrorMessage>
        )}
        {errors.endDate && <ErrorMessage>{errors.endDate.message as string}</ErrorMessage>}
        <InputForm
          {...register('location', {
            maxLength: { value: LIMIT_LENGTH.LOCATION_MAX, message: LOCATION },
          })}
          labelText="장소"
          inputType="text"
        />
        <TwoInputContainer>
          <InputForm
            {...register('capacity', {
              min: { value: LIMIT_VALUE.CAPACITY_MIN, message: PERSONNEL },
              max: { value: LIMIT_VALUE.CAPACITY_MAX, message: PERSONNEL },
            })}
            labelText="정원"
            inputType="number"
            placeholder="정수(1-n)"
          />
          <InputForm
            {...register('dues', {
              min: { value: LIMIT_VALUE.COST_MIN, message: COST },
              max: { value: LIMIT_VALUE.COST_MAX, message: COST },
            })}
            labelText="회비"
            inputType="number"
            placeholder="정수(0-n)"
          />
        </TwoInputContainer>
        {errors.capacity && <ErrorMessage>{errors.capacity.message as string}</ErrorMessage>}
        {errors.dues && <ErrorMessage>{errors.dues.message as string}</ErrorMessage>}
        <InputForm
          {...register('master', {
            required: REQUIRED_SCHEDULE_MASTER,
            maxLength: { value: LIMIT_LENGTH.MASTER_MAX, message: MASTER },
          })}
          labelText="일정 생성자"
          required
          inputType="text"
        />
        {errors.master && <ErrorMessage>{errors.master.message as string}</ErrorMessage>}
        <TwoInputContainer>
          <InputForm
            {...register('openDate', {
              required: closeDate && ENTER_BOTH_SIDE,
              validate: {
                today: validateTodayDate,
                compare: (value) => validateTimeCompare(value, watch('closeDate')),
              },
              max: { value: LIMIT_VALUE.DATE_MAX, message: MAX_YEAR },
            })}
            labelText="신청 시작 날짜 및 시간"
            inputType="datetime-local"
            containerWidth="50%"
          />
          <InputForm
            {...register('closeDate', {
              required: openDate && ENTER_BOTH_SIDE,
              validate: (value) => validateTimeCompare(watch('openDate'), value),
              max: { value: LIMIT_VALUE.DATE_MAX, message: MAX_YEAR },
            })}
            labelText="마감 시작 날짜 및 시간"
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
          {...register('poster')}
          imgFile={imgFile}
          labelText="포스터"
          buttonText="이미지 선택하기"
        />
        <TextAreaForm
          {...register('content', {
            maxLength: { value: LIMIT_LENGTH.CONTENT_MAX, message: CONTENT },
          })}
          labelText="일정 안내"
          rows={10}
        />
        {errors.content && <ErrorMessage>{errors.content.message as string}</ErrorMessage>}
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

export default ScheduleForm;
