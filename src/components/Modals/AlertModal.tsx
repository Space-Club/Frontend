import Button from '../common/Button/Button';
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

const AlertModal = ({ message, onClose, confirmLabel = '확인' }: AlertModalProps) => {
  return (
    <Portal>
      <BackgroundOverlay onClick={onClose} />
      <ModalBaseContainer>
        <ModalContentWrapper>
          <MessageStyled>{message}</MessageStyled>
          <ButtonWrapper>
            <Button
              buttonType="button"
              buttonText={confirmLabel}
              onClick={() => {
                onClose && onClose();
              }}
            />
          </ButtonWrapper>
        </ModalContentWrapper>
      </ModalBaseContainer>
    </Portal>
  );
};

export default AlertModal;
