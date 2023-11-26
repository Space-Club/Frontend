import ConfirmModal from '@/components/Modals/ConfirmModal';
import { MODAL_TEXT } from '@/constants/modalMessage';
import usePostEventApplyMutation from '@/hooks/query/event/usePostEventApplyMutation';
import { getEventDetailResponse } from '@/types/api/getEventDetail';

import { useNavigate } from 'react-router-dom';

interface ApplyEventModal {
  eventId: string;
  eventDetail: getEventDetailResponse;
  applyModalClose: () => void;
}

const ApplyEventModal = ({ eventId, eventDetail, applyModalClose }: ApplyEventModal) => {
  const navigate = useNavigate();
  const { hasForm = true } = eventDetail; // TODO: hasForm 기본값 삭제
  const { applyEvent } = usePostEventApplyMutation({ eventId });
  return (
    <ConfirmModal
      message={MODAL_TEXT.EVENT_APPLY}
      onClose={applyModalClose}
      onConfirm={() => (hasForm ? navigate('submitform') : applyEvent({ eventId }))}
    />
  );
};

export default ApplyEventModal;
