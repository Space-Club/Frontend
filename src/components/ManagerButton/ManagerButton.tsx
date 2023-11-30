import { EVENT_DETAIL_BUTTON } from '@/constants/event';
import { PATH } from '@/constants/path';
import useMemberAuth from '@/hooks/query/club/useMemberAuth';
import {
  FormButtonWrapper,
  PurpleButton,
  UpdateDeleteWrapper,
} from '@/pages/event/EventDetailPage/EventDetailPage.style';
import { getEventDetailResponse } from '@/types/api/getEventDetail';

import { useNavigate } from 'react-router-dom';

interface ManagerButton {
  eventId: string;
  eventDetail: getEventDetailResponse;
  deleteModalOpen: () => void;
}

const ManagerButton = ({ eventId, eventDetail, deleteModalOpen }: ManagerButton) => {
  const { clubInfo, hasForm } = eventDetail;
  const { clubId } = clubInfo;
  const { role } = useMemberAuth({ clubId });
  const navigate = useNavigate();

  return (
    <>
      {role === 'MANAGER' && (
        <FormButtonWrapper hasForm={hasForm}>
          {hasForm && (
            <PurpleButton onClick={() => navigate(PATH.EVENT.SUBMITTED_FORMS(clubId!, eventId))}>
              {EVENT_DETAIL_BUTTON.SHOW_SUBMIT_FORM}
            </PurpleButton>
          )}
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
              {EVENT_DETAIL_BUTTON.EDIT}
            </PurpleButton>
            <PurpleButton onClick={deleteModalOpen}>{EVENT_DETAIL_BUTTON.DELETE}</PurpleButton>
          </UpdateDeleteWrapper>
        </FormButtonWrapper>
      )}
    </>
  );
};

export default ManagerButton;
