import useSubmittedFormStatusMutation from '@/hooks/query/form/useSubmittedFormStatusMutation';
import { EventStatus } from '@/types/event';

import { FaCheckCircle } from 'react-icons/fa';
import { FaRegCheckCircle } from 'react-icons/fa';

import { ButtonValueStyled, StatusButtonContainer } from './ChangeFormStatusButton.style';

interface ChangeFormStatusButtonProps {
  eventId: string;
  formId: string;
  status: EventStatus;
}

const ChangeFormStatusButton = ({ eventId, formId, status }: ChangeFormStatusButtonProps) => {
  const { changeSubmittedFormStatus } = useSubmittedFormStatusMutation();

  return (
    <StatusButtonContainer
      status={status}
      onClick={() =>
        changeSubmittedFormStatus({
          eventId,
          formUserId: formId,
          participationStatus: status === 'CONFIRMED' ? 'PENDING' : 'CONFIRMED',
        })
      }
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
  );
};

export default ChangeFormStatusButton;
