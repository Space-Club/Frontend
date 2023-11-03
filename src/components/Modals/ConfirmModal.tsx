import {
  ButtonWrapper,
  MessageStyled,
  ModalBaseContainer,
  ModalContentWrapper,
} from './Modal.style';

interface ConfirmModalProps {
  message?: string;
  confirmLabel?: string;
  onClose?: () => void;
  onConfirm?: () => void;
}

const ConfirmModal = ({
  message = '멤버를 탈퇴시키겠습니까?',
  confirmLabel = '확인',
  onClose,
  onConfirm,
}: ConfirmModalProps) => {
  return (
    <ModalBaseContainer>
      <ModalContentWrapper>
        <MessageStyled>{message}</MessageStyled>
        <ButtonWrapper>
          <button type="button" onClick={onClose}>
            취소
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
  );
};

export default ConfirmModal;
