import { MODAL_BUTTON_TEXT } from '@/constants/modalMessage';

import { ReactNode } from 'react';

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
  children?: ReactNode;
  onClose?: () => void;
  onConfirm?: () => void;
}

const ConfirmModal = ({
  message,
  confirmLabel = '확인',
  children,
  onClose,
  onConfirm,
}: ConfirmModalProps) => {
  return (
    <Portal>
      <BackgroundOverlay onClick={onClose} />
      <ModalBaseContainer>
        <ModalContentWrapper>
          <MessageStyled>{message}</MessageStyled>
          {children && children}
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
