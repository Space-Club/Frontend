import { EVENT_DETAIL_BUTTON } from '@/constants/event';
import { PATH } from '@/constants/path';
import useMemberAuth from '@/hooks/query/club/useMemberAuth';
import { getEventDetailResponse } from '@/types/api/getEventDetail';

import { useNavigate } from 'react-router-dom';

import { FormButtonWrapper, PurpleButton, UpdateDeleteWrapper } from '../EventDetailPage.style';

interface ManagerButton {
  eventId: string;
  eventDetail: getEventDetailResponse;
  deleteModalOpen: () => void;
}
//{role === 'MANAGER' && (
const ManagerButton = ({ eventId, eventDetail, deleteModalOpen }: ManagerButton) => {
  const { clubInfo } = eventDetail;
  const { clubId } = clubInfo;
  const { role } = useMemberAuth({ clubId });
  const navigate = useNavigate();

  return (
    <>
      {role === 'MANAGER' && (
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
      )}
    </>
  );
};

export default ManagerButton;
