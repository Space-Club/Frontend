import BookMark from '@/components/common/BookMark/BookMark';
import { SemiPurpleButton } from '@/components/common/BookMark/BookMark.style';
import Poster from '@/components/common/Poster/Poster';
import { EVENT_DETAIL, EVENT_DETAIL_BUTTON } from '@/constants/event';
import useDeleteEventMutation from '@/hooks/query/event/useDeleteEventMutation';
import useEventDetailQuery from '@/hooks/query/event/useEventDetailQuery';
import usePostBookmarkMutation from '@/hooks/query/event/usePostBookmarkMutation';
import usePostEventApplyMutation from '@/hooks/query/event/usePostEventApplyMutation';
import { getStorage } from '@/utils/localStorage';
import ConfirmModal from '@/components/Modals/ConfirmModal';
import { MODAL_BUTTON_TEXT, MODAL_TEXT } from '@/constants/modalMessage';
import useModal from '@/hooks/useModal';

import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import {
  ButtonWrapper,
  ContentLabel,
  DetailContentWrapper,
  EventContent,
  EventDetailWrapper,
  EventTitle,
  FormButtonWrapper,
  PurpleButton,
  TwoContentWrapper,
  UpdateDeleteWrapper,
} from './EventDetailPage.style';

const EventDetailPage = () => {
  const { eventId } = useParams();
  const navigate = useNavigate();
  const [bookmarkPaint, setBookmarkPaint] = useState(false);
  const { showModal, modalOpen, modalClose } = useModal();
        
  const token = getStorage('token');

  if (!eventId) {
    throw new Error('eventId is null'); //TODO: eventId가 없을 때 처리
  }

  const { eventDetail, isEventDetailLoading } = useEventDetailQuery({ eventId });
  const { deleteEventMutate } = useDeleteEventMutation({ eventId });
  const { postBookmarkMutate } = usePostBookmarkMutation({ eventId });

  const { applyEvent } = usePostEventApplyMutation();
  // TODO: 수정하기 버튼 클릭시, 게시물 수정 페이지로 이동

  const {
    title,
    content,
    poster,
    startDate,
    startTime,
    location,
    openDate,
    openTime,
    closeDate,
    closeTime,
    name,
    isManager,
  } = eventDetail ?? {};

  const handleBookmarkClick = async () => {
    postBookmarkMutate();
    setBookmarkPaint(true);
  };

  const handleEventDelete = async () => {
    const confirmed = window.confirm('정말로 행사를 삭제하시겠습니까?'); // TODO 모달로 변경

    if (confirmed) {
      deleteEventMutate();
      navigate(-1);
    }
  };

  return (
    <div>
      {!isEventDetailLoading && (
        <>
          {showModal && (
            <ConfirmModal //#TODO: Alert 모달이 더 잘 어울림
              message={MODAL_TEXT.EVENT_APPLY}
              confirmLabel={MODAL_BUTTON_TEXT.CONFIRM}
              onClose={modalClose}
              onConfirm={() => applyEvent({ eventId })}
            />
          )}
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
            <Poster posterSrc={poster ? poster : ''} width={23} />
            <DetailContentWrapper>
              <EventTitle>{title}</EventTitle>
              <TwoContentWrapper>
                <div>
                  <ContentLabel>{EVENT_DETAIL.date}</ContentLabel>
                  <div>{startDate}</div>
                </div>
                <div>
                  <ContentLabel>{EVENT_DETAIL.time}</ContentLabel>
                  <div>{startTime}</div>
                </div>
              </TwoContentWrapper>
              <div>
                <ContentLabel>{EVENT_DETAIL.location}</ContentLabel>
                <div>{location}</div>
              </div>
              <div>
                <ContentLabel>{EVENT_DETAIL.applicationPeriod}</ContentLabel>
                <div>
                  {openDate}, {openTime} - {closeDate}, {closeTime}
                </div>
              </div>
              <div>
                <ContentLabel>{EVENT_DETAIL.organizer}</ContentLabel>
                <div>{name}</div>
              </div>
              {!!token && (
                <ButtonWrapper>
                  <SemiPurpleButton onClick={() => modalOpen()}>
                    {EVENT_DETAIL_BUTTON.apply}
                  </SemiPurpleButton>
                  <BookMark reverse fill={bookmarkPaint} onClick={handleBookmarkClick} />
                </ButtonWrapper>
              )}
            </DetailContentWrapper>
          </EventDetailWrapper>
          <EventContent>{content}</EventContent>
        </>
      )}
    </div>
  );
};

export default EventDetailPage;
