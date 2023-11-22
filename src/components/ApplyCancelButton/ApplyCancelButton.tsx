import { MODAL_TEXT } from '@/constants/modalMessage';
import useSubmittedFormStatusMutation from '@/hooks/query/form/useSubmittedFormStatusMutation';
import useModal from '@/hooks/useModal';

import ConfirmModal from '../Modals/ConfirmModal';
import { ButtonStyled, ButtonTextStyled } from './ApplyCancelButton.style';

interface ApplyCancelButtonProps {
  isCanceled: boolean;
  eventId: string;
  formUserId: string;
}

const ApplyCancelButton = ({ isCanceled, eventId, formUserId }: ApplyCancelButtonProps) => {
  const { changeSubmittedFormStatus } = useSubmittedFormStatusMutation();
  const { showModal, modalOpen, modalClose } = useModal();

  return (
    <>
      {showModal && (
        <ConfirmModal
          message={MODAL_TEXT.CANCELED_SUBMITTED_FORM}
          onConfirm={() => changeSubmittedFormStatus({ eventId, formUserId, status: 'CANCELED' })}
          onClose={modalClose}
        />
      )}
      <ButtonStyled isCanceled={isCanceled} onClick={modalOpen} disabled={isCanceled}>
        <ButtonTextStyled>{isCanceled ? '취소처리 되었습니다. ' : '취소하기'}</ButtonTextStyled>
      </ButtonStyled>
    </>
  );
};

export default ApplyCancelButton;
