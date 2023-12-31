import ManagerButton from '@/components/ManagerButton/ManagerButton';
import ApplyEventModal from '@/components/Modals/ApplyModal/ApplyEventModal';
import ApplyShowModal from '@/components/Modals/ApplyModal/ApplyShowModal';
import ConfirmModal from '@/components/Modals/ConfirmModal';
import SearchInputForm from '@/components/SearchInputForm/SearchInputForm';
import UserApplyButton from '@/components/UserApplyButton/UserApplyButton';
import Breadcrumb from '@/components/common/Breadcrumb/Breadcrumb';
import Header from '@/components/common/Header/Header';
import Poster from '@/components/common/Poster/Poster';
import Tab from '@/components/common/Tab/Tab';
import { MODAL_TEXT } from '@/constants/modalMessage';
import { MAIN_TABS } from '@/constants/tab';
import useDeleteEventMutation from '@/hooks/query/event/useDeleteEventMutation';
import useEventDetailQuery from '@/hooks/query/event/useEventDetailQuery';
import useModal from '@/hooks/useModal';
import { ShowDetailResponse } from '@/types/api/getEventDetail';
import { getStorage } from '@/utils/localStorage';

import { useNavigate, useParams } from 'react-router-dom';

import CategoryDetailForm from './CategoryDetail/CategoryDetailForm';
import {
  ContentWrapper,
  DetailContentWrapper,
  EventContent,
  EventContentTitle,
  EventContentWrapper,
  EventDetailPageContainer,
  EventDetailWrapper,
} from './EventDetailPage.style';

const EventDetailPage = () => {
  const { eventId } = useParams();
  const navigate = useNavigate();
  const token = getStorage('token');

  const {
    showModal: loginModal,
    modalOpen: loginModalOpen,
    modalClose: loginModalClose,
  } = useModal();
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

  const { eventDetail, isEventDetailLoading } = useEventDetailQuery({
    eventId,
  });

  const { deleteEventMutate } = useDeleteEventMutation({ eventId });

  const { category, hasForm, eventInfo } = eventDetail ?? {};
  const { content, posterImageUrl } = eventInfo ?? {};

  return (
    <EventDetailPageContainer>
      {!isEventDetailLoading && (
        <>
          {loginModal && (
            <ConfirmModal
              message={MODAL_TEXT.LOGIN}
              onClose={loginModalClose}
              onConfirm={() => navigate('/login')}
            />
          )}
          {showApplyModal &&
            (category === 'SHOW' ? (
              <ApplyShowModal
                eventId={eventId}
                eventDetail={eventDetail as ShowDetailResponse}
                hasForm={hasForm!}
                applyModalClose={applyModalClose}
              />
            ) : (
              <ApplyEventModal
                eventId={eventId}
                hasForm={hasForm!}
                applyModalClose={applyModalClose}
              />
            ))}
          {deleteEventModal && (
            <ConfirmModal
              message={MODAL_TEXT.DELETE_EVENT}
              onClose={deleteModalClose}
              onConfirm={() => deleteEventMutate()}
            />
          )}
          <Header>
            <SearchInputForm />
            <Tab tabItems={MAIN_TABS} />
          </Header>
          <Breadcrumb eventId={eventId} pageType="eventDetail" />
          <ContentWrapper>
            <ManagerButton
              isToken={Boolean(token)}
              eventId={eventId}
              eventDetail={eventDetail!}
              deleteModalOpen={deleteModalOpen}
            />
            <EventDetailWrapper>
              <Poster posterSrc={posterImageUrl ? posterImageUrl : ''} width={23} />
              <DetailContentWrapper>
                <CategoryDetailForm data={eventDetail!} />
                <UserApplyButton
                  isToken={Boolean(token)}
                  eventId={eventId}
                  eventDetail={eventDetail!}
                  applyModalOpen={applyModalOpen}
                  loginModalOpen={loginModalOpen}
                />
              </DetailContentWrapper>
            </EventDetailWrapper>
            <EventContentWrapper>
              <EventContentTitle>행사 상세 내용</EventContentTitle>
              <EventContent>{content}</EventContent>
            </EventContentWrapper>
          </ContentWrapper>
        </>
      )}
    </EventDetailPageContainer>
  );
};

export default EventDetailPage;
