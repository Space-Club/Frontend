import ConfirmModal from '@/components/Modals/ConfirmModal';
import { MODAL_TEXT } from '@/constants/modalMessage';
import usePostEventApplyMutation from '@/hooks/query/event/usePostEventApplyMutation';
import { getEventDetailResponse } from '@/types/api/getEventDetail';

interface ApplyEventModal {
  eventId: string;
  eventDetail: getEventDetailResponse;
  applyModalClose: () => void;
}

const ApplyEventModal = ({ eventId, applyModalClose }: ApplyEventModal) => {
  const { applyEvent } = usePostEventApplyMutation();
  return (
    <ConfirmModal
      message={MODAL_TEXT.EVENT_APPLY}
      onClose={applyModalClose}
      onConfirm={() => applyEvent({ eventId })}
    />
  );
};

export default ApplyEventModal;
