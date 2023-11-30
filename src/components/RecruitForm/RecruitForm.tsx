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
import { RecruitmentDetailResponse } from '@/types/api/getEventDetail';
import { ReactHookFormProps } from '@/types/event';
import setFormValue from '@/utils/setFormValue';
import { validateTimeCompare, validateTodayDate, validateTrim } from '@/utils/validate';

import { useEffect } from 'react';

import ImageUploadInput from '../ImageUploadInput/ImageUploadInput';

interface RecruitForm extends ReactHookFormProps {
  eventDetail?: RecruitmentDetailResponse;
}

const RecruitForm = ({ register, setValue, watch, errors, eventDetail }: RecruitForm) => {
  useEffect(() => {
    if (eventDetail) {
      const { eventInfo } = eventDetail;
      const { location, recruitmentTarget, recruitmentLimit } = eventInfo;

      setFormValue({ setValue, eventDetail });

      setValue('activityArea', location);
      setValue('recruitmentTarget', recruitmentTarget);
      setValue('capacity', recruitmentLimit);
    }
  }, [eventDetail, setValue]);

  const { PERSONNEL, MAX_YEAR, LAST_TIME, REQUIRED, MAX_LENGTH } = ERROR_MESSAGE.EVENT;

  const { LIMIT_LENGTH, LIMIT_VALUE } = FORM_INFO_VALUE;

  return (
    <>
      <ContentArea>
        <InputForm
          {...register('title', {
            required: REQUIRED('공고 제목은'),
            maxLength: {
              value: LIMIT_LENGTH.TITLE_MAX,
              message: MAX_LENGTH('공고 제목', LIMIT_LENGTH.TITLE_MAX),
            },
            validate: (value) => validateTrim(value),
          })}
          labelText="공고 제목"
          required
          inputType="text"
          placeholder="클럽 이름을 입력하세요"
        />
        {errors.title && <ErrorMessage>{errors.title.message as string}</ErrorMessage>}
        <InputForm
          {...register('activityArea', {
            maxLength: {
              value: LIMIT_LENGTH.LOCATION_MAX,
              message: MAX_LENGTH('활동 위치', LIMIT_LENGTH.LOCATION_MAX),
            },
            validate: (value) => (value ? validateTrim(value) : true),
          })}
          labelText="활동 위치"
          inputType="text"
          placeholder="온라인일 경우, 온라인이라고 기재"
          readOnly={Boolean(eventDetail)}
        />
        {errors.activityArea && (
          <ErrorMessage>{errors.activityArea.message as string}</ErrorMessage>
        )}
        <TextAreaForm
          {...register('recruitmentTarget', {
            maxLength: {
              value: LIMIT_LENGTH.TAGET_MAX,
              message: MAX_LENGTH('모집 대상', LIMIT_LENGTH.TAGET_MAX),
            },
            validate: (value) => (value ? validateTrim(value) : true),
          })}
          labelText="모집 대상"
          rows={2}
        />
        {errors.recruitmentTarget && (
          <ErrorMessage>{errors.recruitmentTarget.message as string}</ErrorMessage>
        )}
        <HalfInputForm
          {...register('capacity', {
            min: { value: LIMIT_VALUE.CAPACITY_MIN, message: `${PERSONNEL}` },
            max: { value: LIMIT_VALUE.CAPACITY_MAX, message: `${PERSONNEL}` },
          })}
          labelText="모집 인원"
          inputType="number"
          placeholder="정수(1-n)"
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
                today: validateTodayDate,
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
            required: REQUIRED('공고 내용은'),
            maxLength: {
              value: LIMIT_LENGTH.CONTENT_MAX,
              message: MAX_LENGTH('공고 내용', LIMIT_LENGTH.CONTENT_MAX),
            },
            validate: (value) => validateTrim(value),
          })}
          labelText="공고 내용"
          required
          rows={10}
        />
        {errors.content && <ErrorMessage>{errors.content.message as string}</ErrorMessage>}
      </ContentArea>
    </>
  );
};

export default RecruitForm;
