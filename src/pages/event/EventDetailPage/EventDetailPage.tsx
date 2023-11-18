import SearchInputForm from '@/components/SearchInputForm/SearchInputForm';
import BookMark from '@/components/common/BookMark/BookMark';
import Header from '@/components/common/Header/Header';
import Poster from '@/components/common/Poster/Poster';
import Tab from '@/components/common/Tab/Tab';
import { EVENT_DETAIL_BUTTON } from '@/constants/event';
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

  if (!eventId) {
    throw new Error('eventId is null'); //TODO: eventId가 없을 때 처리
  }

  const { eventDetail, isEventDetailLoading } = useEventDetailQuery({ eventId });

  // TODO: 수정하기 버튼 클릭시, 게시물 수정 페이지로 이동
  const { deleteEventMutate } = useDeleteEventMutation({ eventId });

  const { isManager, posterImageUrl, content, applicants, capacity, isBookmarked, eventCategory } =
    eventDetail ?? {};

  const handleEventDelete = async () => {
    const confirmed = window.confirm('정말로 행사를 삭제하시겠습니까?'); // TODO 모달로 변경

    if (confirmed) {
      deleteEventMutate();
      navigate(-1);
    }
  };

  //TODO: form이 있을 경우, 폼 작성 페이지로, 없을 경우 바로 신청시키기
  return (
    <EventDetailPageContainer>
      {!isEventDetailLoading && (
        <>
          {showApplyModal &&
            (eventCategory === 'SHOW' ? (
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
          <Header>
            <SearchInputForm />
            <Tab tabItems={MAIN_TABS} />
          </Header>
          <ContentWrapper>
            {isManager && (
              <FormButtonWrapper>
                <PurpleButton onClick={() => navigate(`/checkform/${eventId}`)}>
                  {EVENT_DETAIL_BUTTON.showSubmitForm}
                </PurpleButton>
                <UpdateDeleteWrapper>
                  <PurpleButton reverse>{EVENT_DETAIL_BUTTON.edit}</PurpleButton>
                  <PurpleButton onClick={handleEventDelete}>
                    {EVENT_DETAIL_BUTTON.delete}
                  </PurpleButton>
                </UpdateDeleteWrapper>
              </FormButtonWrapper>
            )}
            <EventDetailWrapper>
              <Poster posterSrc={posterImageUrl ? posterImageUrl : ''} width={23} />
              <DetailContentWrapper>
                <CategoryDetailForm data={eventDetail!} />
                {!!token && (
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
                )}
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
