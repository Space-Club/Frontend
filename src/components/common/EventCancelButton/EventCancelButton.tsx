import ConfirmModal from '@/components/Modals/ConfirmModal';
import useModal from '@/hooks/useModal';

import { EventCancelButtonStyled } from './EventCancelButton.style';

interface EventCancelButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  title: string;
  eventId: string;
}

const EventCancelButton = ({ title, ...props }: EventCancelButtonProps) => {
  const { modalClose, modalOpen, showModal } = useModal();
  const handleCancelButtonClick = () => {
    modalOpen();
  };
  const handleCancelConfirm = () => {};

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
