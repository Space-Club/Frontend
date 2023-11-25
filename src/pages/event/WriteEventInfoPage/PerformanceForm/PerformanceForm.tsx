import InputForm from '@/components/common/InputForm/InputForm';
import TextAreaForm from '@/components/common/TextAreaForm/TextAreaForm';
import { ERROR_MESSAGE } from '@/constants/errorMessage';
import { FORM_INFO_VALUE } from '@/constants/limitInputValue';
import useSubmitForm from '@/hooks/query/event/useSubmitForm';
import { ShowDetailResponse } from '@/types/api/getEventDetail';
import { FormPage } from '@/types/event';
import setFormValue from '@/utils/setFormValue';
import { validateTimeCompare, validateTodayDate } from '@/utils/validate';

import { useEffect } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import { useLocation } from 'react-router-dom';

import ImageUploadInput from '../ImageUploadInput/ImageUploadInput';
import NavigateButton from '../NavigateButton/NavigateButton';
import {
  ContentArea,
  ErrorMessage,
  HalfInputForm,
  PerformanceFormContainer,
  TwoInputContainer,
} from '../WriteEventInfoPage.style';

const PerformanceForm = ({ eventType, clubId }: FormPage) => {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm();
  const { state } = useLocation();
  const { submitForm, isSubmitLoading } = useSubmitForm({ eventType, clubId, isEdit: !!state });

  useEffect(() => {
    if (state) {
      const eventDetail: ShowDetailResponse = state.eventDetail;
      setFormValue({ setValue, eventDetail });

      setValue('startDate', `${eventDetail.startDate}T${eventDetail.startTime}`);
      setValue('location', eventDetail.location);
      setValue('cost', eventDetail.cost);
      setValue('bankName', eventDetail.bankName);
      setValue('accountNumber', eventDetail.bankAccountNumber);
      setValue('maxTicketCount', eventDetail.maxTicketCount);
    }
  }, [state, setValue]);

  const { PERSONNEL, COST, TICKET, MAX_YEAR, REQUIRED, MAX_LENGTH, FORM_START_TIME, LAST_TIME } =
    ERROR_MESSAGE.EVENT;

  const { LIMIT_LENGTH, LIMIT_VALUE } = FORM_INFO_VALUE;

  const onPerformanceSubmitForm = async (data: FieldValues) => {
    console.log(3);
    if (isSubmitLoading || !clubId) return;
    if (state) {
      submitForm({ data, clubId, eventType, eventId: state.eventId });
    } else {
      console.log('2');
      submitForm({ data, clubId, eventType });
    }
  };

  return (
    <PerformanceFormContainer onSubmit={handleSubmit(onPerformanceSubmitForm)}>
      <ContentArea>
        <InputForm
          {...register('title', {
            required: REQUIRED('공연 이름은'),
            maxLength: {
              value: LIMIT_LENGTH.TITLE_MAX,
              message: MAX_LENGTH('공연 이름', LIMIT_LENGTH.TAGET_MAX),
            },
          })}
          labelText="공연 이름"
          required
          inputType="text"
          placeholder="행사 이름을 입력하세요"
        />
        {errors.title && <ErrorMessage>{errors.title.message as string}</ErrorMessage>}
        <HalfInputForm
          {...register('startDate', {
            required: REQUIRED('공연 시작 날짜는'),
            validate: {
              today: validateTodayDate,
              compare: (value) =>
                validateTimeCompare(watch('closeDate'), value, FORM_START_TIME('공연')),
            },
          })}
          labelText="공연 시작 날짜 및 시간"
          required
          inputType="datetime-local"
        />
        {errors.startDate && <ErrorMessage>{errors.startDate.message as string}</ErrorMessage>}
        <InputForm
          {...register('location', {
            required: REQUIRED('공연 장소는'),
            maxLength: {
              value: LIMIT_LENGTH.LOCATION_MAX,
              message: MAX_LENGTH('공연 장소', LIMIT_LENGTH.LOCATION_MAX),
            },
          })}
          labelText="공연 장소"
          required
          inputType="text"
        />
        {errors.location && <ErrorMessage>{errors.location.message as string}</ErrorMessage>}
        <TwoInputContainer>
          <InputForm
            {...register('capacity', {
              min: { value: LIMIT_VALUE.CAPACITY_MIN, message: `${PERSONNEL}` },
              max: { value: LIMIT_VALUE.CAPACITY_MAX, message: `${PERSONNEL}` },
            })}
            labelText="정원"
            inputType="number"
            placeholder="정수(1-n)"
          />
          <InputForm
            {...register('cost', {
              min: { value: LIMIT_VALUE.COST_MIN, message: `${COST}` },
              max: { value: LIMIT_VALUE.COST_MAX, message: `${COST}` },
            })}
            labelText="비용"
            inputType="number"
            placeholder="정수(0-n)"
          />
        </TwoInputContainer>
        {errors.capacity && <ErrorMessage>{errors.capacity.message as string}</ErrorMessage>}
        {errors.cost && <ErrorMessage>{errors.cost.message as string}</ErrorMessage>}
        <TwoInputContainer>
          <InputForm
            {...register('bankName', {
              maxLength: {
                value: LIMIT_LENGTH.BANK_NAME_MAX,
                message: MAX_LENGTH('은행 이름', LIMIT_LENGTH.BANK_NAME_MAX),
              },
            })}
            labelText="은행 명"
            inputType="text"
            placeholder="은행명"
          />
          <InputForm
            {...register('accountNumber', {
              maxLength: {
                value: LIMIT_LENGTH.ACCOUNT_NUMBER_MAX,
                message: MAX_LENGTH('계좌 번호', LIMIT_LENGTH.ACCOUNT_NUMBER_MAX),
              },
            })}
            labelText="계좌 번호"
            inputType="text"
            placeholder="계좌번호"
          />
        </TwoInputContainer>
        {errors.bankName && <ErrorMessage>{errors.bankName.message as string}</ErrorMessage>}
        {errors.account && <ErrorMessage>{errors.account.message as string}</ErrorMessage>}
        <HalfInputForm
          {...register('maxTicketCount', {
            min: { value: LIMIT_VALUE.TICKET_COUNT_MIN, message: `${TICKET}` },
            max: { value: LIMIT_VALUE.TICKET_COUNT_MAX, message: `${TICKET}` },
          })}
          labelText="인당 예매 가능 수"
          inputType="number"
          placeholder="정수(1-n)"
        />
        {errors.maxTicketCount && (
          <ErrorMessage>{errors.maxTicketCount.message as string}</ErrorMessage>
        )}
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
          isRequired={state ? false : REQUIRED('포스터는')}
          posterImageUrl={state?.eventDetail.imagePosterUrl}
        />
        <TextAreaForm
          {...register('content', {
            required: REQUIRED('공연 내용은'),
            maxLength: {
              value: LIMIT_LENGTH.CONTENT_MAX,
              message: MAX_LENGTH('공연 내용', LIMIT_LENGTH.CONTENT_MAX),
            },
          })}
          labelText="공연 내용 작성"
          required
          rows={10}
        />
        {errors.content && <ErrorMessage>{errors.content?.message as string}</ErrorMessage>}
      </ContentArea>
      <NavigateButton submitButtonText={state ? '수정' : '다음'} />
    </PerformanceFormContainer>
  );
};

export default PerformanceForm;
