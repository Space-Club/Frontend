import ConfirmModal from '@/components/Modals/ConfirmModal';
import SearchInputForm from '@/components/SearchInputForm/SearchInputForm';
import Header from '@/components/common/Header/Header';
import Poster from '@/components/common/Poster/Poster';
import Tab from '@/components/common/Tab/Tab';
import { MODAL_TEXT } from '@/constants/modalMessage';
import { MAIN_TABS } from '@/constants/tab';
import useDeleteEventMutation from '@/hooks/query/event/useDeleteEventMutation';
import useEventDetailData from '@/hooks/query/event/useEventDetailData';
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

  const { deleteEventMutate } = useDeleteEventMutation({ eventId });

  const { eventDetail, isEventDetailLoading, isEventDetailSuccess, clubInfo, role, refetchAll } =
    useEventDetailData({ eventId });

  const { category, eventInfo } = eventDetail ?? {};
  const { content, posterImageUrl } = eventInfo ?? {};

  const { eventFormData } = useEventFormQuery({ eventId });

  if (isEventDetailSuccess) {
    refetchAll();
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
                clubId={eventDetail?.clubId}
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
