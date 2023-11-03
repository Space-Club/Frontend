import {
  BackgroundOverlay,
  ButtonWrapper,
  MessageStyled,
  ModalBaseContainer,
  ModalContentWrapper,
} from './Modal.style';
import Portal from './Portal';

interface AlertModalProps {
  message?: string;
  onClose?: () => void;
  confirmLabel?: string;
}

const AlertModal = ({ message, onClose, confirmLabel }: AlertModalProps) => {
  return (
    <Portal>
      <BackgroundOverlay onClick={onClose} />
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
    </Portal>
  );
};

export default AlertModal;
