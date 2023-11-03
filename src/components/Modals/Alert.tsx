import Theme from '@/styles/Theme';
import styled from '@emotion/styled';

interface AlertModalProps {
  message: string;
  onClose?: () => void;
  confirmLabel?: string;
}

const ModalBaseContainer = styled.div`
  display: flex;
  justify-content: center;
  min-width: 10rem;
  padding: 3rem 6rem;
  border-radius: 2rem;
  background-color: ${Theme.color.tWhiteGrey};
  overflow: hidden;
`;

const ModalContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
`;

const MessageStyled = styled.p`
  font-size: ${Theme.fontSize.smallTitle};
  text-align: center;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Alert = ({
  message = '성공적으로 신청이 완료되었습니다.',
  onClose,
  confirmLabel = '확인',
}: AlertModalProps) => {
  return (
    <ModalBaseContainer>
      <ModalContentWrapper>
        <MessageStyled>{message}</MessageStyled>
        <ButtonWrapper>
          <button
            type="button"
            onClick={() => {
              onClose && onClose();
            }}
          >
            {confirmLabel}
          </button>
        </ButtonWrapper>
      </ModalContentWrapper>
    </ModalBaseContainer>
  );
};

export default Alert;
