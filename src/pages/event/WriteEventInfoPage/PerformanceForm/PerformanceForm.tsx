import postPerformanceForm from '@/apis/event/postPerformanceForm';
import ImageForm from '@/components/ImageForm/ImageForm';
import InputForm from '@/components/common/InputForm/InputForm';
import TextAreaForm from '@/components/common/TextAreaForm/TextAreaForm';
import { ERROR_MESSAGE } from '@/constants/errorMessage';

import { useEffect, useState } from 'react';
import { FieldValues, useForm } from 'react-hook-form';

import {
  ContentArea,
  ErrorMessage,
  HalfInputForm,
  PerformanceFormContainer,
  SubmitButton,
  TwoInputContainer,
} from './PerformanceForm.style';

const PerformanceForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [imgFile, setImgFile] = useState('');

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

  const handleSubmitForm = async (data: FieldValues) => {
    try {
      await postPerformanceForm({ data });
    } catch {
      throw new Error('폼을 제출하는데 실패했습니다.');
    }
  };

  const validateTodayDate = (value: Date) => {
    const selectedDate = new Date(value);
    const today = new Date();

    if (selectedDate <= today) {
      return ERROR_MESSAGE.START_TIME;
    }

    return true;
  };

  const validateTimeCompare = (lastTime: Date, startTime: Date) => {
    const selectedTime = new Date(lastTime);
    const start = new Date(startTime);

    if (selectedTime <= start) {
      return ERROR_MESSAGE.LAST_TIME;
    }

    return true;
  };

  return (
    <PerformanceFormContainer onSubmit={handleSubmit(handleSubmitForm)}>
      <ContentArea>
        <InputForm
          {...register('eventName', {
            required: `${ERROR_MESSAGE.REQUIRED_EVENT_NAME}`,
            maxLength: 30,
          })}
          labelText="행사 이름"
          inputType="text"
          placeholder="행사 이름을 입력하세요"
        />
        {errors.eventName && <ErrorMessage>{errors.eventName.message as string}</ErrorMessage>}
        <TwoInputContainer>
          <HalfInputForm
            {...register('startTime', {
              required: `${ERROR_MESSAGE.REQUIRED_START_TIME}`,
              validate: validateTodayDate,
            })}
            labelText="행사 시작 날짜 및 시간"
            inputType="datetime-local"
          />
        </TwoInputContainer>
        {errors.startTime && <ErrorMessage>{errors.startTime.message as string}</ErrorMessage>}
        <InputForm
          {...register('location', { required: `${ERROR_MESSAGE.REQUIRED_LOCATION}` })}
          labelText="장소"
          inputType="text"
        />
        {errors.location && <ErrorMessage>{errors.location.message as string}</ErrorMessage>}
        <TwoInputContainer>
          <InputForm
            {...register('personnel', {
              max: { value: 999, message: `${ERROR_MESSAGE.PERSONNEL}` },
            })}
            labelText="정원"
            inputType="number"
            placeholder="정수(1-n)"
          />
          <InputForm
            {...register('cost', {
              max: { value: 1000000, message: `${ERROR_MESSAGE.COST}` },
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
              maxLength: { value: 20, message: `${ERROR_MESSAGE.BANK_NAME}` },
            })}
            labelText="은행 명"
            inputType="text"
            placeholder="은행명"
          />
          <InputForm
            {...register('account', {
              maxLength: { value: 30, message: `${ERROR_MESSAGE.ACCOUNT}` },
            })}
            labelText="계좌 번호"
            inputType="text"
            placeholder="계좌번호"
          />
        </TwoInputContainer>
        {errors.bankName && <ErrorMessage>{errors.bankName?.message as string}</ErrorMessage>}
        {errors.account && <ErrorMessage>{errors.account?.message as string}</ErrorMessage>}
        <HalfInputForm
          {...register('maxTicket', {
            max: { value: 999, message: `${ERROR_MESSAGE.MAX_TICKET}` },
          })}
          labelText="인당 예매 가능 수"
          inputType="number"
          placeholder="정수(1-n)"
        />
        <TwoInputContainer>
          <InputForm
            {...register('formStartTime', {
              required: `${ERROR_MESSAGE.REQUIRED_FORM_START_TIME}`,
              validate: validateTodayDate,
            })}
            labelText="신청 시작 날짜 및 시간"
            inputType="datetime-local"
          />
          <InputForm
            {...register('formLastTime', {
              required: `${ERROR_MESSAGE.REQUIRED_FORM_LAST_TIME}`,
              validate: (value) => validateTimeCompare(value, watch('formStartTime')),
            })}
            labelText="마감 시작 날짜 및 시간"
            inputType="datetime-local"
          />
        </TwoInputContainer>
        {errors.formStartTime && (
          <ErrorMessage>{errors.formStartTime.message as string}</ErrorMessage>
        )}
        {errors.formLastTime && (
          <ErrorMessage>{errors.formLastTime.message as string}</ErrorMessage>
        )}
      </ContentArea>
      <ContentArea>
        <ImageForm
          {...register('poster', { required: `${ERROR_MESSAGE.REQUIRED_POSTER}` })}
          imgFile={imgFile}
          labelText="포스터"
          buttonText="이미지 선택하기"
        />
        {errors.poster && <ErrorMessage>{errors.poster.message as string}</ErrorMessage>}
        <TextAreaForm
          {...register('eventContent', {
            required: `${ERROR_MESSAGE.REQUIRED_EVENT_CONTENT}`,
            maxLength: 200,
          })}
          labelText="행사 내용 작성"
          rows={10}
        />
        {errors.eventContent && (
          <ErrorMessage>{errors.eventContent?.message as string}</ErrorMessage>
        )}
        <SubmitButton type="submit">다음</SubmitButton>
      </ContentArea>
    </PerformanceFormContainer>
  );
};

export default PerformanceForm;
