import ConfirmModal from '@/components/Modals/ConfirmModal';
import useCancelEventMutation from '@/hooks/query/event/useCancelEventMutation';
import useModal from '@/hooks/useModal';

import { EventCancelButtonStyled } from './EventCancelButton.style';

interface EventCancelButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  eventId: string;
  title: string;
}

const EventCancelButton = ({ title, eventId, ...props }: EventCancelButtonProps) => {
  const { modalClose, modalOpen, showModal } = useModal();
  const { requestCancel } = useCancelEventMutation();
  const handleCancelButtonClick = () => {
    modalOpen();
  };
  const handleCancelConfirm = () => {
    requestCancel({ eventId });
  };

  return (
    <>
      {showModal && (
        <ConfirmModal
          message={`정말 ${title} 신청을 취소하시겠습니까?`}
          onClose={modalClose}
          onConfirm={handleCancelConfirm}
        />
      )}
      <EventCancelButtonStyled onClick={handleCancelButtonClick} {...props}>
        취소하기
      </EventCancelButtonStyled>
    </>
  );
};

export default EventCancelButton;
