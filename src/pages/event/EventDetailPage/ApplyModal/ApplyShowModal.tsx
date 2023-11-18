import ConfirmModal from '@/components/Modals/ConfirmModal';
import DropDown from '@/components/common/DropDown/DropDown';
import { MODAL_BUTTON_TEXT, MODAL_TEXT } from '@/constants/modalMessage';
import usePostEventApplyMutation from '@/hooks/query/event/usePostEventApplyMutation';
import { ShowDetailResponse } from '@/types/api/getEventDetail';

import { useState } from 'react';

interface ApplyShowModal {
  eventId: string;
  eventDetail: ShowDetailResponse;
  applyModalClose: () => void;
}

const ApplyShowModal = ({ eventId, eventDetail, applyModalClose }: ApplyShowModal) => {
  const [ticketCount, setTicketCount] = useState('1');
  const { applyEvent } = usePostEventApplyMutation();
  const { maxTicketCount } = eventDetail;

  const ticketList = Array.from({ length: maxTicketCount }, (_, index) => ({
    label: `${index + 1}장`,
    value: index + 1,
  }));

  return (
    <ConfirmModal
      message={MODAL_TEXT.TICKET_APPLY}
      confirmLabel={MODAL_BUTTON_TEXT.CONFIRM}
      onClose={applyModalClose}
      onConfirm={() => applyEvent({ eventId })}
      children={
        <DropDown
          options={ticketList}
          selectedValue={ticketCount}
          onChange={(event) => setTicketCount(event.target.value)}
        />
      }
    />
  );
};

export default ApplyShowModal;
