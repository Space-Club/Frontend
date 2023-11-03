import deleteEvent from '@/apis/event/deleteEvent';
import getEventDetail from '@/apis/event/getEventDetail';
import postEventBookmark from '@/apis/event/postEventBookmark';
import BookMark from '@/components/common/BookMark/BookMark';
import { SemiPurpleButton } from '@/components/common/BookMark/BookMark.style';
import Poster from '@/components/common/Poster/Poster';
import usePostEventApplyMutation from '@/hooks/query/event/usePostEventApplyMutation';
import { getStorage } from '@/utils/localStorage';

import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { useMutation, useQuery } from '@tanstack/react-query';

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

  const token = getStorage('token');

  if (!eventId) {
    throw new Error('eventId is null'); //TODO: eventId가 없을 때 처리
  }

  const { data: eventDetail, isLoading } = useQuery(['event_detail', `${eventId}`], () =>
    getEventDetail({ id: eventId! }),
  );
  const { mutate: deleteEventMutate } = useMutation(['delete_event', `${eventId}`], () =>
    deleteEvent({ eventId }),
  );
  const { mutate: postBookmarkMutate } = useMutation(['bookmark', `${eventId}`], () =>
    postEventBookmark({ eventId }),
  );

  const { applyEvent } = usePostEventApplyMutation();
  // TODO: 행사 관리자인지 여부 확인 -> 제출된 폼 보기, 수정 및 삭제 권한 부여
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
      {!isLoading && (
        <>
          <FormButtonWrapper>
            <PurpleButton onClick={() => navigate(`/checkform/${eventId}`)}>
              제출된 폼 보기
            </PurpleButton>
            <UpdateDeleteWrapper>
              <PurpleButton reverse>수정하기</PurpleButton>
              <PurpleButton onClick={handleEventDelete}>삭제하기</PurpleButton>
            </UpdateDeleteWrapper>
          </FormButtonWrapper>
          <EventDetailWrapper>
            <Poster posterSrc={poster ? poster : ''} width={23} />
            <DetailContentWrapper>
              <EventTitle>{title}</EventTitle>
              <TwoContentWrapper>
                <div>
                  <ContentLabel>날짜</ContentLabel>
                  <div>{startDate}</div>
                </div>
                <div>
                  <ContentLabel>시간</ContentLabel>
                  <div>{startTime}</div>
                </div>
              </TwoContentWrapper>
              <div>
                <ContentLabel>장소</ContentLabel>
                <div>{location}</div>
              </div>
              <div>
                <ContentLabel>참여신청가능 기간</ContentLabel>
                <div>
                  {openDate}, {openTime} - {closeDate}, {closeTime}
                </div>
              </div>
              <div>
                <ContentLabel>주최자</ContentLabel>
                <div>{name}</div>
              </div>
              {!!token && (
                <ButtonWrapper>
                  <SemiPurpleButton onClick={() => applyEvent({ eventId })}>
                    참여 신청하기
                  </SemiPurpleButton>
                  <BookMark reverse paint={bookmarkPaint} onClick={handleBookmarkClick} />
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
