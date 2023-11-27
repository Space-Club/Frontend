import { EVENT_DETAIL_BUTTON } from '@/constants/event';
import { PATH } from '@/constants/path';
import { getEventDetailResponse } from '@/types/api/getEventDetail';

import { useNavigate } from 'react-router-dom';

import { FormButtonWrapper, PurpleButton, UpdateDeleteWrapper } from '../EventDetailPage.style';

interface ManagerButton {
  clubId: string;
  eventId: string;
  eventDetail: getEventDetailResponse;
  deleteModalOpen: () => void;
}

const ManagerButton = ({ clubId, eventId, eventDetail, deleteModalOpen }: ManagerButton) => {
  const navigate = useNavigate();
  return (
    <FormButtonWrapper>
      <PurpleButton onClick={() => navigate(PATH.EVENT.SUBMITTED_FORMS(clubId!, eventId))}>
        {EVENT_DETAIL_BUTTON.showSubmitForm}
      </PurpleButton>
      <UpdateDeleteWrapper>
        <PurpleButton
          reverse
          onClick={() =>
            navigate(PATH.EVENT.EDIT_WRITE_INFO(clubId, eventDetail.category), {
              state: {
                eventDetail,
                eventId,
              },
            })
          }
        >
          {EVENT_DETAIL_BUTTON.edit}
        </PurpleButton>
        <PurpleButton onClick={deleteModalOpen}>{EVENT_DETAIL_BUTTON.delete}</PurpleButton>
      </UpdateDeleteWrapper>
    </FormButtonWrapper>
  );
};

export default ManagerButton;
