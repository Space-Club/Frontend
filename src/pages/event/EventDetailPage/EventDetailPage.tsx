import ConfirmModal from '@/components/Modals/ConfirmModal';
import SearchInputForm from '@/components/SearchInputForm/SearchInputForm';
import Header from '@/components/common/Header/Header';
import Poster from '@/components/common/Poster/Poster';
import Tab from '@/components/common/Tab/Tab';
import { MODAL_TEXT } from '@/constants/modalMessage';
import { MAIN_TABS } from '@/constants/tab';
import useGetClubQuery from '@/hooks/query/club/useGetClubQuery';
import useMemberAuth from '@/hooks/query/club/useMemberAuth';
import useDeleteEventMutation from '@/hooks/query/event/useDeleteEventMutation';
import useEventDetailQuery from '@/hooks/query/event/useEventDetailQuery';
import useEventFormQuery from '@/hooks/query/event/useEventFormQuery';
import useModal from '@/hooks/useModal';
import { ShowDetailResponse } from '@/types/api/getEventDetail';
import { getStorage } from '@/utils/localStorage';

import { useNavigate, useParams } from 'react-router-dom';

import ApplyEventModal from './ApplyModal/ApplyEventModal';
import ApplyShowModal from './ApplyModal/ApplyShowModal';
import CategoryDetailForm from './CategoryDetail/CategoryDetailForm';
import {
  ContentWrapper,
  DetailContentWrapper,
  EventContentTitle,
  EventContentWrapper,
  EventDetailPageContainer,
  EventDetailWrapper,
} from './EventDetailPage.style';
import ManagerButton from './ManagerButton/ManagerButton';
import UserApplyButton from './UserApplyButton/UserApplyButton';

const EventDetailPage = () => {
  const { eventId } = useParams();
  const navigate = useNavigate();
  const token = getStorage('token');

  const {
    showModal: showApplyModal,
    modalOpen: applyModalOpen,
    modalClose: applyModalClose,
  } = useModal();
  const {
    showModal: deleteEventModal,
    modalOpen: deleteModalOpen,
    modalClose: deleteModalClose,
  } = useModal();

  if (!eventId) {
    throw new Error('eventId is null');
  }

  const { eventDetail, isEventDetailLoading, isEventDetailSuccess } = useEventDetailQuery({
    eventId,
  });

  const { deleteEventMutate } = useDeleteEventMutation({ eventId });

  const { category, eventInfo, clubId } = eventDetail ?? {};
  const { content, posterImageUrl } = eventInfo ?? {};

  const { eventFormData } = useEventFormQuery({ eventId });
  const { clubInfo, refetch: clubInfoRefetch } = useGetClubQuery({ clubId: '', isEnabled: false });
  const { role, refetch: memberAuthRefetch } = useMemberAuth({ clubId: '', isEnabled: false });
  if (isEventDetailSuccess) {
    clubInfoRefetch();
    memberAuthRefetch();
  }

  const handleEventDelete = async () => {
    deleteEventMutate();
    navigate('/');
  };

  return (
    <EventDetailPageContainer>
      {!isEventDetailLoading && (
        <>
          {showApplyModal &&
            (!token ? (
              <ConfirmModal
                message={MODAL_TEXT.LOGIN}
                onClose={applyModalClose}
                onConfirm={() => navigate('/login')}
              />
            ) : category === 'SHOW' ? (
              <ApplyShowModal
                eventId={eventId}
                eventDetail={eventDetail as ShowDetailResponse}
                hasForm={!!eventFormData?.form}
                applyModalClose={applyModalClose}
              />
            ) : (
              <ApplyEventModal
                eventId={eventId}
                hasForm={!!eventFormData?.form}
                applyModalClose={applyModalClose}
              />
            ))}
          {deleteEventModal && (
            <ConfirmModal
              message={MODAL_TEXT.DELETE_EVENT}
              onClose={deleteModalClose}
              onConfirm={handleEventDelete}
            />
          )}
          <Header>
            <SearchInputForm />
            <Tab tabItems={MAIN_TABS} />
          </Header>
          <ContentWrapper>
            {role === 'MANAGER' && (
              <ManagerButton
                clubId={clubId!}
                eventId={eventId}
                eventDetail={eventDetail!}
                deleteModalOpen={deleteModalOpen}
              />
            )}
            <EventDetailWrapper>
              <Poster posterSrc={posterImageUrl ? posterImageUrl : ''} width={23} />
              <DetailContentWrapper>
                <CategoryDetailForm data={eventDetail!} clubName={clubInfo?.name} />
                <UserApplyButton
                  eventId={eventId}
                  eventDetail={eventDetail!}
                  applyModalOpen={applyModalOpen}
                />
              </DetailContentWrapper>
            </EventDetailWrapper>
            <EventContentWrapper>
              <EventContentTitle>행사 상세 내용</EventContentTitle>
              {content}
            </EventContentWrapper>
          </ContentWrapper>
        </>
      )}
    </EventDetailPageContainer>
  );
};

export default EventDetailPage;
