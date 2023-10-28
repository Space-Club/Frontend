import ImageForm from '@/components/ImageForm/ImageForm';
import InputForm from '@/components/common/InputForm/InputForm';
import TextAreaForm from '@/components/common/TextAreaForm/TextAreaForm';

import {
  ContentArea,
  HalfInputForm,
  PerformanceFormContainer,
  SubmitButton,
  TwoInputContainer,
} from './PerformanceForm.style';

const PerformanceForm = () => {
  return (
    <PerformanceFormContainer>
      <ContentArea>
        <InputForm
          labelText="행사 이름"
          inputType="text"
          placeholoder="행사 이름을 입력하세요"
          required
        />
        <TwoInputContainer>
          <HalfInputForm labelText="행사 시작 날짜 및 시간" inputType="datetime-local" required />
        </TwoInputContainer>
        <InputForm labelText="장소" inputType="text" required />
        <TwoInputContainer>
          <InputForm labelText="정원" inputType="number" placeholoder="정수(1-n)" required />
          <InputForm labelText="비용" inputType="number" placeholoder="정수(0-n)" />
        </TwoInputContainer>
        <TwoInputContainer>
          <InputForm labelText="은행 명" inputType="text" placeholoder="은행명" />
          <InputForm labelText="계좌 번호" inputType="text" placeholoder="계좌번호" />
        </TwoInputContainer>
        <HalfInputForm labelText="인당 예매 가능 수" inputType="number" placeholoder="정수(1-n)" />
        <TwoInputContainer>
          <InputForm labelText="신청 시작 날짜 및 시간" inputType="datetime-local" required />
          <InputForm labelText="마감 시작 날짜 및 시간" inputType="datetime-local" />
        </TwoInputContainer>
      </ContentArea>
      <ContentArea>
        <ImageForm labelText="포스터" buttonText="이미지 선택하기" />
        <TextAreaForm labelText="행사 내용 작성" rows={10} />
        <SubmitButton>다음</SubmitButton>
      </ContentArea>
    </PerformanceFormContainer>
  );
};

export default PerformanceForm;
