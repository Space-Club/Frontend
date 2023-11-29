import { PropsWithChildren } from 'react';

import Button from '../common/Button/Button';
import {
  BackgroundOverlay,
  ButtonWrapper,
  MessageStyled,
  ModalBaseContainer,
  ModalContentWrapper,
} from './Modal.style';
import Portal from './Portal';

interface AlertModalProps extends PropsWithChildren {
  message?: string;
  onClose?: () => void;
  confirmLabel?: string;
}

const AlertModal = ({ message, onClose, confirmLabel = '확인', children }: AlertModalProps) => {
  return (
    <Portal>
      <BackgroundOverlay onClick={onClose} />
      <ModalBaseContainer>
        <ModalContentWrapper>
          {children}
          <MessageStyled>{message}</MessageStyled>
          <ButtonWrapper>
            <Button
              type="button"
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
