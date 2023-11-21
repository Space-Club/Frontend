import ImageForm from '@/components/ImageForm/ImageForm';
import InputForm from '@/components/common/InputForm/InputForm';
import TextAreaForm from '@/components/common/TextAreaForm/TextAreaForm';
import { ERROR_MESSAGE } from '@/constants/errorMessage';
import useSubmitForm from '@/hooks/query/event/useSubmitForm';
import { ShowDetailResponse } from '@/types/api/getEventDetail';
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

const PerformanceForm = ({ eventType, clubId }: FormPage) => {
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
      const eventDetail: ShowDetailResponse = state.eventDetail;

      setValue('title', eventDetail.title);
      setValue('startDate', `${eventDetail.startDate}T${eventDetail.startTime}`);
      setValue('location', eventDetail.location);
      setValue('capacity', eventDetail.capacity);
      setValue('cost', eventDetail.cost);
      setValue('bankName', eventDetail.bankName);
      setValue('accountNumber', eventDetail.bankAccountNumber);
      setValue('maxTicketCount', eventDetail.maxTicketCount);
      setValue('openDate', `${eventDetail.formOpenDate}T${eventDetail.formOpenTime}`);
      setValue('closeDate', `${eventDetail.formCloseDate}T${eventDetail.formCloseTime}`);
      setImgFile(eventDetail.posterImageUrl);
      setValue('content', eventDetail.content);
    }
  }, [state, setValue]);

  const {
    REQUIRED_SHOW_NAME,
    REQUIRED_SHOW_START_TIME,
    REQUIRED_LOCATION,
    REQUIRED_FORM_START_TIME,
    REQUIRED_FORM_LAST_TIME,
    REQUIRED_POSTER,
    REQUIRED_SHOW_CONTENT,
    PERSONNEL,
    COST,
    BANK_NAME,
    ACCOUNT,
    MAX_TICKET,
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

  const onPerformanceSubmitForm = async (data: FieldValues) => {
    if (isSubmitLoading || !clubId) return;
    if (state) {
      submitForm({ data, clubId, eventType, eventId: state.eventId });
    } else {
      submitForm({ data, clubId, eventType });
    }
  };

  return (
    <PerformanceFormContainer onSubmit={handleSubmit(onPerformanceSubmitForm)}>
      <ContentArea>
        <InputForm
          {...register('title', {
            required: `${REQUIRED_SHOW_NAME}`,
            maxLength: 30,
          })}
          labelText="공연 이름"
          required
          inputType="text"
          placeholder="행사 이름을 입력하세요"
        />
        {errors.title && <ErrorMessage>{errors.title.message as string}</ErrorMessage>}
        <HalfInputForm
          {...register('startDate', {
            required: `${REQUIRED_SHOW_START_TIME}`,
            validate: validateTodayDate,
          })}
          labelText="공연 시작 날짜 및 시간"
          required
          inputType="datetime-local"
        />
        {errors.startDate && <ErrorMessage>{errors.startDate.message as string}</ErrorMessage>}
        <InputForm
          {...register('location', { required: `${REQUIRED_LOCATION}` })}
          labelText="공연 장소"
          required
          inputType="text"
        />
        {errors.location && <ErrorMessage>{errors.location.message as string}</ErrorMessage>}
        <TwoInputContainer>
          <InputForm
            {...register('capacity', {
              max: { value: 999, message: `${PERSONNEL}` },
            })}
            labelText="정원"
            inputType="number"
            placeholder="정수(1-n)"
          />
          <InputForm
            {...register('cost', {
              max: { value: 1000000, message: `${COST}` },
            })}
            labelText="비용"
            inputType="number"
            placeholder="정수(0-n)"
          />
        </TwoInputContainer>
        {errors.personnel && <ErrorMessage>{errors.personnel.message as string}</ErrorMessage>}
        {errors.cost && <ErrorMessage>{errors.cost.message as string}</ErrorMessage>}
        <TwoInputContainer>
          <InputForm
            {...register('bankName', {
              maxLength: { value: 20, message: `${BANK_NAME}` },
            })}
            labelText="은행 명"
            inputType="text"
            placeholder="은행명"
          />
          <InputForm
            {...register('accountNumber', {
              maxLength: { value: 30, message: `${ACCOUNT}` },
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
            max: { value: 999, message: `${MAX_TICKET}` },
          })}
          labelText="인당 예매 가능 수"
          inputType="number"
          placeholder="정수(1-n)"
        />
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
            required: `${REQUIRED_SHOW_CONTENT}`,
            maxLength: { value: 200, message: LENGTH(200) },
          })}
          labelText="공연 내용 작성"
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

export default PerformanceForm;
