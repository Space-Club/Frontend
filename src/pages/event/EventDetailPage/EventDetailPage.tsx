import ConfirmModal from '@/components/Modals/ConfirmModal';
import SearchInputForm from '@/components/SearchInputForm/SearchInputForm';
import BookMark from '@/components/common/BookMark/BookMark';
import Header from '@/components/common/Header/Header';
import Poster from '@/components/common/Poster/Poster';
import Tab from '@/components/common/Tab/Tab';
import { EVENT_DETAIL_BUTTON } from '@/constants/event';
import { MODAL_TEXT } from '@/constants/modalMessage';
import { PATH } from '@/constants/path';
import { MAIN_TABS } from '@/constants/tab';
import useDeleteEventMutation from '@/hooks/query/event/useDeleteEventMutation';
import useEventDetailQuery from '@/hooks/query/event/useEventDetailQuery';
import useModal from '@/hooks/useModal';
import { ShowDetailResponse } from '@/types/api/getEventDetail';
import { getStorage } from '@/utils/localStorage';

import { useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import ApplyEventModal from './ApplyModal/ApplyEventModal';
import ApplyShowModal from './ApplyModal/ApplyShowModal';
import CategoryDetailForm from './CategoryDetail/CategoryDetailForm';
import {
  ApplicantButton,
  ApplyButton,
  BookmarkButton,
  ButtonWrapper,
  ContentWrapper,
  DetailContentWrapper,
  EventContentTitle,
  EventContentWrapper,
  EventDetailPageContainer,
  EventDetailWrapper,
  FormButtonWrapper,
  PurpleButton,
  UpdateDeleteWrapper,
} from './EventDetailPage.style';

const EventDetailPage = () => {
  const bookmarkRef = useRef<HTMLDivElement>(null);
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

  const { eventDetail, isEventDetailLoading } = useEventDetailQuery({ eventId });

  const { deleteEventMutate } = useDeleteEventMutation({ eventId });
  // TODO: clubName query 만들기
  // TODO: isBookmarked query 만들기
  // TODO: isManager query 만들기
  // TODO: hasForm query 만들기
  const { category, isManager = true, eventInfo, isBookmarked = false, clubId } = eventDetail ?? {}; // TODO: 기본값 삭제
  const { content, applicants, capacity, posterImageUrl } = eventInfo ?? {};

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
                applyModalClose={applyModalClose}
              />
            ) : (
              <ApplyEventModal
                eventId={eventId}
                eventDetail={eventDetail!}
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
            {isManager && (
              <FormButtonWrapper>
                <PurpleButton
                  onClick={() => navigate(PATH.EVENT.SUBMITTED_FORMS(clubId!, eventId))}
                >
                  {EVENT_DETAIL_BUTTON.showSubmitForm}
                </PurpleButton>
                <UpdateDeleteWrapper>
                  <PurpleButton
                    reverse
                    onClick={() =>
                      navigate(PATH.EVENT.EDIT_WRITE_INFO(clubId!, category!), {
                        state: {
                          eventDetail,
                          eventId,
                        },
                      })
                    }
                  >
                    {EVENT_DETAIL_BUTTON.edit}
                  </PurpleButton>
                  <PurpleButton onClick={deleteModalOpen}>
                    {EVENT_DETAIL_BUTTON.delete}
                  </PurpleButton>
                </UpdateDeleteWrapper>
              </FormButtonWrapper>
            )}
            <EventDetailWrapper>
              <Poster posterSrc={posterImageUrl ? posterImageUrl : ''} width={23} />
              <DetailContentWrapper>
                <CategoryDetailForm data={eventDetail!} />
                <ButtonWrapper>
                  {capacity && (
                    <ApplicantButton reverse capacity={!!capacity} disabled>
                      {applicants}/{capacity}
                    </ApplicantButton>
                  )}
                  <ApplyButton capacity={!!capacity} onClick={() => applyModalOpen()}>
                    {EVENT_DETAIL_BUTTON.apply}
                  </ApplyButton>
                  <BookmarkButton reverse bold onClick={() => bookmarkRef.current?.click()}>
                    <BookMark bookmarked={isBookmarked!} eventId={eventId} ref={bookmarkRef} />
                  </BookmarkButton>
                </ButtonWrapper>
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
