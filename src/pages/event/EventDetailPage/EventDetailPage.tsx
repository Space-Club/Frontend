import ConfirmModal from '@/components/Modals/ConfirmModal';
import SearchInputForm from '@/components/SearchInputForm/SearchInputForm';
import { SemiPurpleButton } from '@/components/SemiPurpleButton/SemiPurpleButton.style';
import BookMark from '@/components/common/BookMark/BookMark';
import Header from '@/components/common/Header/Header';
import Poster from '@/components/common/Poster/Poster';
import Tab from '@/components/common/Tab/Tab';
import { EVENT_DETAIL, EVENT_DETAIL_BUTTON } from '@/constants/event';
import { MODAL_BUTTON_TEXT, MODAL_TEXT } from '@/constants/modalMessage';
import { MAIN_TABS } from '@/constants/tab';
import useDeleteEventMutation from '@/hooks/query/event/useDeleteEventMutation';
import useEventDetailQuery from '@/hooks/query/event/useEventDetailQuery';
import usePostEventApplyMutation from '@/hooks/query/event/usePostEventApplyMutation';
import useModal from '@/hooks/useModal';
import { ShowDetailResponse } from '@/types/api/getEventDetail';
import { getStorage } from '@/utils/localStorage';

import { useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import ClubDetail from './CategoryDetail/ClubDetail';
import PromotionDetail from './CategoryDetail/PromotionDetail';
import RecruitmentDetail from './CategoryDetail/RecruitmentDetail';
import ShowDetail from './CategoryDetail/ShowDetail';
import {
  ButtonWrapper,
  ContentLabel,
  DetailContentWrapper,
  EventContent,
  EventDetailPageContainer,
  EventDetailWrapper,
  EventTitle,
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

  const { applyEvent } = usePostEventApplyMutation();
  // TODO: 수정하기 버튼 클릭시, 게시물 수정 페이지로 이동
  const { deleteEventMutate } = useDeleteEventMutation({ eventId });

  const {
    eventCategory,
    isManager,
    posterImageUrl,
    title,
    content,
    formOpenDate,
    formOpenTime,
    formCloseDate,
    formCloseTime,
    clubName,
    clubLogoImageUrl,
  } = eventDetail ?? {};

  const handleEventDelete = async () => {
    const confirmed = window.confirm('정말로 행사를 삭제하시겠습니까?'); // TODO 모달로 변경

    if (confirmed) {
      deleteEventMutate();
      navigate(-1);
    }
  };

  const renderCategory = () => {
    switch (eventCategory) {
      case 'SHOW':
        return <ShowDetail data={eventDetail as ShowDetailResponse} />;
      case 'PROMOTION':
        return <PromotionDetail />;
      case 'RECRUITMENT':
        return <RecruitmentDetail />;
      case 'CLUB':
        return <ClubDetail />;
    }
  };

  return (
    <EventDetailPageContainer>
      {!isEventDetailLoading && (
        <>
          {showApplyModal && (
            <ConfirmModal //#TODO: Alert 모달이 더 잘 어울림
              message={MODAL_TEXT.EVENT_APPLY}
              confirmLabel={MODAL_BUTTON_TEXT.CONFIRM}
              onClose={applyModalClose}
              onConfirm={() => applyEvent({ eventId })}
            />
          )}
          <Header>
            <SearchInputForm />
            <Tab tabItems={MAIN_TABS} />
          </Header>
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
              <EventTitle>{title}</EventTitle>
              {renderCategory()}
              <div>
                <ContentLabel>{EVENT_DETAIL.applicationPeriod}</ContentLabel>
                <div>
                  {formOpenDate}, {formOpenTime} - {formCloseDate}, {formCloseTime}
                </div>
              </div>
              <div>
                <ContentLabel>{EVENT_DETAIL.organizer}</ContentLabel>
                <div>
                  {clubLogoImageUrl}
                  {clubName}
                </div>
              </div>
              {!!token && (
                <ButtonWrapper>
                  <SemiPurpleButton onClick={() => applyModalOpen()}>
                    {EVENT_DETAIL_BUTTON.apply}
                  </SemiPurpleButton>
                  <SemiPurpleButton reverse bold onClick={() => bookmarkRef.current?.click()}>
                    <BookMark bookmarked={false} eventId={eventId} ref={bookmarkRef} />
                  </SemiPurpleButton>
                </ButtonWrapper>
              )}
            </DetailContentWrapper>
          </EventDetailWrapper>
          <EventContent>{content}</EventContent>
        </>
      )}
    </EventDetailPageContainer>
  );
};

export default EventDetailPage;
