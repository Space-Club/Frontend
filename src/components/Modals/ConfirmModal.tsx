import { MODAL_BUTTON_TEXT } from '@/constants/modalMessage';

import {
  BackgroundOverlay,
  ButtonWrapper,
  MessageStyled,
  ModalBaseContainer,
  ModalContentWrapper,
} from './Modal.style';
import Portal from './Portal';

interface ConfirmModalProps {
  message?: string;
  confirmLabel?: string;
  onClose?: () => void;
  onConfirm?: () => void;
}

const ConfirmModal = ({ message, confirmLabel, onClose, onConfirm }: ConfirmModalProps) => {
  return (
    <Portal>
      <BackgroundOverlay onClick={onClose} />
      <ModalBaseContainer>
        <ModalContentWrapper>
          <MessageStyled>{message}</MessageStyled>
          <ButtonWrapper>
            <button type="button" onClick={onClose}>
              {MODAL_BUTTON_TEXT.CANCEL}
            </button>
            <button
              type="button"
              onClick={() => {
                onConfirm && onConfirm();
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

export default ConfirmModal;
