import { ButtonStyled, ButtonTextStyled } from './ApplyCancelButton.style';

const ApplyCancelButton = ({ isCanceled: isCanceled }: { isCanceled: boolean }) => {
  return (
    <ButtonStyled isCanceled={isCanceled}>
      <ButtonTextStyled>{isCanceled ? '취소처리 되었습니다. ' : '취소하기'}</ButtonTextStyled>
    </ButtonStyled>
  );
};

export default ApplyCancelButton;
