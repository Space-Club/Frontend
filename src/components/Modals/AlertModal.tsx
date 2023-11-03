import {
  ButtonWrapper,
  MessageStyled,
  ModalBaseContainer,
  ModalContentWrapper,
} from './Modal.style';

interface AlertModalProps {
  message?: string;
  onClose?: () => void;
  confirmLabel?: string;
}

const AlertModal = ({
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

export default AlertModal;
