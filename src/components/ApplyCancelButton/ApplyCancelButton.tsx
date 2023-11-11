import Theme from '@/styles/Theme';
import styled from '@emotion/styled';

const ButtonStyled = styled.div<{ isCancelled: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3.3rem;
  height: 1.5rem;
  font-size: ${Theme.fontSize.tagText};
  color: ${Theme.color.tSeparator};
  border: ${({ isCancelled }) => (isCancelled ? 'none' : `1px solid ${Theme.color.tSeparator}`)};
  border-radius: ${({ isCancelled }) => (isCancelled ? '0' : '0.3rem')};
`;

const ButtonTextStyled = styled.span`
  word-break: keep-all;
  text-align: center;
`;

const ApplyCancelButton = ({ isCancelled }: { isCancelled: boolean }) => {
  return (
    <ButtonStyled isCancelled={isCancelled}>
      <ButtonTextStyled>{isCancelled ? '취소처리 되었습니다. ' : '취소하기'}</ButtonTextStyled>
    </ButtonStyled>
  );
};

export default ApplyCancelButton;
