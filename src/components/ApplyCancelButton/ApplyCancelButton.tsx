import { ButtonStyled, ButtonTextStyled } from './ApplyCancelButton.style';

const ApplyCancelButton = ({ isCancelled }: { isCancelled: boolean }) => {
  return (
    <ButtonStyled isCancelled={isCancelled}>
      <ButtonTextStyled>{isCancelled ? '취소처리 되었습니다. ' : '취소하기'}</ButtonTextStyled>
    </ButtonStyled>
  );
};

export default ApplyCancelButton;
