import postPerformanceForm from '@/apis/event/postPerformanceForm';
import ImageForm from '@/components/ImageForm/ImageForm';
import InputForm from '@/components/common/InputForm/InputForm';
import TextAreaForm from '@/components/common/TextAreaForm/TextAreaForm';

import { useEffect, useState } from 'react';
import { FieldValues, useForm } from 'react-hook-form';

import {
  ContentArea,
  HalfInputForm,
  PerformanceFormContainer,
  SubmitButton,
  TwoInputContainer,
} from './PerformanceForm.style';

const PerformanceForm = () => {
  const { register, handleSubmit, watch } = useForm();
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
      console.log(data);
      await postPerformanceForm({ data });
    } catch {
      throw new Error('폼을 제출하는데 실패했습니다.');
    }
  };

  return (
    <PerformanceFormContainer onSubmit={handleSubmit(handleSubmitForm)}>
      <ContentArea>
        <InputForm
          {...register('eventName')}
          labelText="행사 이름"
          inputType="text"
          placeholder="행사 이름을 입력하세요"
          required
        />
        <TwoInputContainer>
          <HalfInputForm
            {...register('startTime')}
            labelText="행사 시작 날짜 및 시간"
            inputType="datetime-local"
            required
          />
        </TwoInputContainer>
        <InputForm {...register('location')} labelText="장소" inputType="text" required />
        <TwoInputContainer>
          <InputForm
            {...register('personnel')}
            labelText="정원"
            inputType="number"
            placeholder="정수(1-n)"
            required
          />
          <InputForm
            {...register('cost')}
            labelText="비용"
            inputType="number"
            placeholder="정수(0-n)"
          />
        </TwoInputContainer>
        <TwoInputContainer>
          <InputForm
            {...register('bankName')}
            labelText="은행 명"
            inputType="text"
            placeholder="은행명"
          />
          <InputForm
            {...register('account')}
            labelText="계좌 번호"
            inputType="text"
            placeholder="계좌번호"
          />
        </TwoInputContainer>
        <HalfInputForm
          {...register('maxTicket')}
          labelText="인당 예매 가능 수"
          inputType="number"
          placeholder="정수(1-n)"
        />
        <TwoInputContainer>
          <InputForm
            {...register('formStartTime')}
            labelText="신청 시작 날짜 및 시간"
            inputType="datetime-local"
            required
          />
          <InputForm
            {...register('formLastTime')}
            labelText="마감 시작 날짜 및 시간"
            inputType="datetime-local"
          />
        </TwoInputContainer>
      </ContentArea>
      <ContentArea>
        <ImageForm
          {...register('poster')}
          imgFile={imgFile}
          labelText="포스터"
          buttonText="이미지 선택하기"
        />
        <TextAreaForm {...register('eventContent')} labelText="행사 내용 작성" rows={10} />
        <SubmitButton type="submit">다음</SubmitButton>
      </ContentArea>
    </PerformanceFormContainer>
  );
};

export default PerformanceForm;
