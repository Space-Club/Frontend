import ConfirmModal from '@/components/Modals/ConfirmModal';
import { MODAL_TEXT } from '@/constants/modalMessage';
import usePostEventApplyMutation from '@/hooks/query/event/usePostEventApplyMutation';

import { useNavigate } from 'react-router-dom';

interface ApplyEventModal {
  eventId: string;
  hasForm: boolean;
  applyModalClose: () => void;
}

const ApplyEventModal = ({ eventId, hasForm, applyModalClose }: ApplyEventModal) => {
  const navigate = useNavigate();
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
