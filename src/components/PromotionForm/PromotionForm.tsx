import InputForm from '@/components/common/InputForm/InputForm';
import TextAreaForm from '@/components/common/TextAreaForm/TextAreaForm';
import { ERROR_MESSAGE } from '@/constants/errorMessage';
import { FORM_INFO_VALUE } from '@/constants/limitInputValue';
import {
  ContentArea,
  ErrorMessage,
  HalfInputForm,
  TwoInputContainer,
} from '@/pages/event/WriteEventInfoPage/WriteEventInfoPage.style';
import { PromotionDetailResponse } from '@/types/api/getEventDetail';
import { ReactHookFormProps } from '@/types/event';
import setFormValue from '@/utils/setFormValue';
import { validateTimeCompare, validateTodayDate, validateTrim } from '@/utils/validate';

import { useEffect } from 'react';

import ImageUploadInput from '../ImageUploadInput/ImageUploadInput';

interface PromotionForm extends ReactHookFormProps {
  eventDetail?: PromotionDetailResponse;
}

const PromotionForm = ({ register, setValue, watch, errors, eventDetail }: PromotionForm) => {
  useEffect(() => {
    if (eventDetail) {
      const { eventInfo } = eventDetail;
      const { startDate, startTime, location, capacity } = eventInfo;

      setFormValue({ setValue, eventDetail });

      setValue('startDate', `${startDate}T${startTime}`);
      setValue('location', location);
      setValue('capacity', capacity);
    }
  }, [eventDetail, setValue]);

  const { PERSONNEL, MAX_YEAR, REQUIRED, MAX_LENGTH, FORM_START_TIME, LAST_TIME } =
    ERROR_MESSAGE.EVENT;

  const { LIMIT_LENGTH, LIMIT_VALUE } = FORM_INFO_VALUE;

  return (
    <>
      <ContentArea>
        <InputForm
          {...register('title', {
            required: REQUIRED('행사 이름은'),
            maxLength: {
              value: LIMIT_LENGTH.TITLE_MAX,
              message: MAX_LENGTH('행사 이름', LIMIT_LENGTH.TITLE_MAX),
            },
            validate: (value) => validateTrim(value),
          })}
          labelText="행사 이름"
          required
          inputType="text"
          placeholder="행사 이름을 입력하세요."
        />
        {errors.title && <ErrorMessage>{errors.title.message as string}</ErrorMessage>}
        <HalfInputForm
          {...register('startDate', {
            required: REQUIRED('행사 시작 날짜는'),
            validate: {
              today: (value) => (eventDetail ? true : validateTodayDate(value)),
              compare: (value) =>
                validateTimeCompare(watch('closeDate'), value, FORM_START_TIME('행사')),
            },
            max: { value: LIMIT_VALUE.DATE_MAX, message: MAX_YEAR },
          })}
          labelText="행사 시작 날짜 및 시간"
          required
          inputType="datetime-local"
          readOnly={Boolean(eventDetail)}
        />
        {errors.startDate && <ErrorMessage>{errors.startDate.message as string}</ErrorMessage>}
        <InputForm
          {...register('location', {
            required: REQUIRED('행사 장소는'),
            maxLength: {
              value: LIMIT_LENGTH.LOCATION_MAX,
              message: MAX_LENGTH('행사 장소', LIMIT_LENGTH.LOCATION_MAX),
            },
            validate: (value) => validateTrim(value),
          })}
          labelText="행사 장소"
          required
          inputType="text"
          readOnly={Boolean(eventDetail)}
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
          min={LIMIT_VALUE.CAPACITY_MIN}
          max={LIMIT_VALUE.CAPACITY_MAX}
          unit="명"
          isHalf={true}
          readOnly={Boolean(eventDetail)}
        />
        {errors.capacity && <ErrorMessage>{errors.capacity.message as string}</ErrorMessage>}
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
          isRequired={eventDetail ? false : REQUIRED('포스터는')}
          posterImageUrl={eventDetail?.eventInfo.posterImageUrl}
        />
        <TextAreaForm
          {...register('content', {
            required: REQUIRED('행사 내용은'),
            maxLength: {
              value: LIMIT_LENGTH.CONTENT_MAX,
              message: MAX_LENGTH('행사 내용', LIMIT_LENGTH.CONTENT_MAX),
            },
            validate: (value) => validateTrim(value),
          })}
          labelText="행사 내용 작성"
          required
          rows={10}
          maxLength={LIMIT_LENGTH.CONTENT_MAX}
        />
        {errors.content && <ErrorMessage>{errors.content?.message as string}</ErrorMessage>}
      </ContentArea>
    </>
  );
};

export default PromotionForm;
