import { MODAL_BUTTON_TEXT } from '@/constants/modalMessage';

import Button from '../common/Button/Button';
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

const ConfirmModal = ({
  message,
  confirmLabel = '확인',
  onClose,
  onConfirm,
}: ConfirmModalProps) => {
  return (
    <Portal>
      <BackgroundOverlay onClick={onClose} />
      <ModalBaseContainer>
        <ModalContentWrapper>
          <MessageStyled>{message}</MessageStyled>
          <ButtonWrapper>
            <Button type="button" buttonText={MODAL_BUTTON_TEXT.CANCEL} outline onClick={onClose} />
            <Button
              type="button"
              buttonText={confirmLabel}
              onClick={() => {
                onConfirm && onConfirm();
                onClose && onClose();
              }}
            />
          </ButtonWrapper>
        </ModalContentWrapper>
      </ModalBaseContainer>
    </Portal>
  );
};

export default ConfirmModal;
