import useSubmittedFormStatusMutation from '@/hooks/query/form/useSubmittedFormStatusMutation';
import useModal from '@/hooks/useModal';
import { EventStatus } from '@/types/event';

import { FaCheckCircle } from 'react-icons/fa';
import { FaRegCheckCircle } from 'react-icons/fa';

import AlertModal from '../Modals/AlertModal';
import ConfirmModal from '../Modals/ConfirmModal';
import { ButtonValueStyled, StatusButtonContainer } from './ChangeFormStatusButton.style';

interface ChangeFormStatusButtonProps {
  eventId: string;
  formId: string;
  status: EventStatus;
}

const ChangeFormStatusButton = ({ eventId, formId, status }: ChangeFormStatusButtonProps) => {
  const { changeSubmittedFormStatus } = useSubmittedFormStatusMutation();
  const { showModal, modalOpen, modalClose } = useModal();

  return (
    <>
      {showModal &&
        (status === 'CANCEL_REQUESTED' ? (
          <AlertModal message="취소요청한 폼은 상태를 변경할 수 없습니다." onClose={modalClose} />
        ) : (
          <ConfirmModal
            message={`상태를 ${
              status === 'CONFIRMED' ? '"대기"로' : '"승인"으로'
            } 변경하시겠습니까?`}
            onConfirm={() =>
              changeSubmittedFormStatus({
                eventId,
                formUserId: formId,
                participationStatus: status === 'CONFIRMED' ? 'PENDING' : 'CONFIRMED',
              })
            }
            onClose={modalClose}
          />
        ))}
      <StatusButtonContainer
        status={status}
        onClick={() => modalOpen()}
        disabled={status === 'CANCELED'}
      >
        <ButtonValueStyled>
          {status === 'CONFIRMED' ? (
            <>
              <FaCheckCircle size={12} />
              <span>확인</span>
            </>
          ) : (
            <>
              <FaRegCheckCircle size={12} />
              <span>대기</span>
            </>
          )}
        </ButtonValueStyled>
      </StatusButtonContainer>
    </>
  );
};

export default ChangeFormStatusButton;
