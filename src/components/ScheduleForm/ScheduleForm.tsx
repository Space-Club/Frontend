import InputForm from '@/components/common/InputForm/InputForm';
import TextAreaForm from '@/components/common/TextAreaForm/TextAreaForm';
import { ERROR_MESSAGE } from '@/constants/errorMessage';
import { FORM_INFO_VALUE } from '@/constants/limitInputValue';
import {
  ContentArea,
  ErrorMessage,
  TwoInputContainer,
} from '@/pages/event/WriteEventInfoPage/WriteEventInfoPage.style';
import { ClubDetailResponse } from '@/types/api/getEventDetail';
import { ReactHookFormProps } from '@/types/event';
import setFormValue from '@/utils/setFormValue';
import { validateTimeCompare, validateTodayDate, validateTrim } from '@/utils/validate';

import { useEffect } from 'react';

import ImageUploadInput from '../ImageUploadInput/ImageUploadInput';

interface ScheduleForm extends ReactHookFormProps {
  eventDetail?: ClubDetailResponse;
}

const ScheduleForm = ({ register, setValue, watch, errors, eventDetail }: ScheduleForm) => {
  useEffect(() => {
    if (eventDetail) {
      const { eventInfo } = eventDetail;
      const { startDate, startTime, endDate, endTime, location, capacity, dues } = eventInfo;

      setFormValue({ setValue, eventDetail });

      setValue('startDate', `${startDate}T${startTime}`);
      setValue('endDate', `${endDate}T${endTime}`);
      setValue('location', location);
      setValue('capacity', capacity);
      setValue('dues', dues);
    }
  }, [eventDetail, setValue]);

  const { PERSONNEL, COST, MAX_YEAR, REQUIRED, MAX_LENGTH, FORM_START_TIME, LAST_TIME } =
    ERROR_MESSAGE.EVENT;

  const { LIMIT_LENGTH, LIMIT_VALUE } = FORM_INFO_VALUE;

  return (
    <>
      <ContentArea>
        <InputForm
          {...register('title', {
            required: REQUIRED('일정 제목은'),
            maxLength: {
              value: LIMIT_LENGTH.TITLE_MAX,
              message: MAX_LENGTH('일정 제목', LIMIT_LENGTH.TITLE_MAX),
            },
            validate: (value) => validateTrim(value),
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
              required: REQUIRED('활동 시작 날짜는'),
              validate: {
                today: (value) => (eventDetail ? true : validateTodayDate(value)),
                compare: (value) => validateTimeCompare(value, watch('endDate'), LAST_TIME),
                compareForm: (value) =>
                  validateTimeCompare(watch('closeDate'), value, FORM_START_TIME('활동')),
              },
              max: { value: LIMIT_VALUE.DATE_MAX, message: MAX_YEAR },
            })}
            labelText="활동 시작 날짜"
            required
            inputType="datetime-local"
            containerWidth="50%"
            readOnly={Boolean(eventDetail)}
          />
          <InputForm
            {...register('endDate', {
              required: REQUIRED('활동 마감 날짜는'),
              validate: {
                compare: (value) => validateTimeCompare(watch('startDate'), value, LAST_TIME),
              },
              max: { value: LIMIT_VALUE.DATE_MAX, message: MAX_YEAR },
            })}
            labelText="활동 마감 날짜"
            required
            inputType="datetime-local"
            containerWidth="50%"
            readOnly={Boolean(eventDetail)}
          />
        </TwoInputContainer>
        {errors.startDate && errors.startDate.message !== errors.endDate?.message && (
          <ErrorMessage>{errors.startDate.message as string}</ErrorMessage>
        )}
        {errors.endDate && <ErrorMessage>{errors.endDate.message as string}</ErrorMessage>}
        <InputForm
          {...register('location', {
            maxLength: {
              value: LIMIT_LENGTH.LOCATION_MAX,
              message: MAX_LENGTH('장소', LIMIT_LENGTH.LOCATION_MAX),
            },
            validate: (value) => (value ? validateTrim(value) : true),
          })}
          labelText="장소"
          inputType="text"
          readOnly={Boolean(eventDetail)}
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
            min={LIMIT_VALUE.CAPACITY_MIN}
            max={LIMIT_VALUE.CAPACITY_MAX}
            unit="명"
            readOnly={Boolean(eventDetail)}
          />
          <InputForm
            {...register('dues', {
              min: { value: LIMIT_VALUE.COST_MIN, message: COST },
              max: { value: LIMIT_VALUE.COST_MAX, message: COST },
            })}
            labelText="회비"
            inputType="number"
            placeholder="정수(0-n)"
            min={LIMIT_VALUE.COST_MIN}
            max={LIMIT_VALUE.COST_MAX}
            unit="원"
            readOnly={Boolean(eventDetail)}
          />
        </TwoInputContainer>
        {errors.capacity && <ErrorMessage>{errors.capacity.message as string}</ErrorMessage>}
        {errors.dues && <ErrorMessage>{errors.dues.message as string}</ErrorMessage>}
        <TwoInputContainer>
          <InputForm
            {...register('openDate', {
              required: REQUIRED('신청 시작 날짜는'),
              validate: {
                today: (value) => (eventDetail ? true : validateTodayDate(value)),
                compare: (value) => validateTimeCompare(value, watch('closeDate'), LAST_TIME),
              },
              max: { value: LIMIT_VALUE.DATE_MAX, message: MAX_YEAR },
            })}
            labelText="신청 시작 날짜 및 시간"
            required
            inputType="datetime-local"
            containerWidth="50%"
            readOnly={Boolean(eventDetail)}
          />
          <InputForm
            {...register('closeDate', {
              required: REQUIRED('마감 시작 날짜는'),
              validate: (value) => validateTimeCompare(watch('openDate'), value, LAST_TIME),
              max: { value: LIMIT_VALUE.DATE_MAX, message: MAX_YEAR },
            })}
            labelText="마감 시작 날짜 및 시간"
            required
            inputType="datetime-local"
            containerWidth="50%"
            readOnly={Boolean(eventDetail)}
          />
        </TwoInputContainer>
        {errors.openDate && errors.openDate.message !== errors.closeDate?.message && (
          <ErrorMessage>{errors.openDate.message as string}</ErrorMessage>
        )}
        {errors.closeDate && <ErrorMessage>{errors.closeDate.message as string}</ErrorMessage>}
      </ContentArea>
      <ContentArea>
        <ImageUploadInput
          register={register}
          watch={watch}
          errors={errors}
          isRequired={false}
          posterImageUrl={eventDetail?.eventInfo.posterImageUrl}
        />
        <TextAreaForm
          {...register('content', {
            maxLength: {
              value: LIMIT_LENGTH.CONTENT_MAX,
              message: MAX_LENGTH('일정 안내', LIMIT_LENGTH.CONTENT_MAX),
            },
            validate: (value) => (value ? validateTrim(value) : true),
          })}
          labelText="일정 안내"
          rows={10}
          maxLength={LIMIT_LENGTH.CONTENT_MAX}
        />
        {errors.content && <ErrorMessage>{errors.content.message as string}</ErrorMessage>}
      </ContentArea>
    </>
  );
};

export default ScheduleForm;
