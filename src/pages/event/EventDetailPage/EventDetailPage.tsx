import getEventDetail from '@/apis/event/getEventDetail';
import BookMark from '@/components/common/BookMark/BookMark';
import { SemiPurpleButton } from '@/components/common/BookMark/BookMark.style';
import Poster from '@/components/common/Poster/Poster';
import usePostEventApplyMutation from '@/hooks/query/event/usePostEventApplyMutation';

import { useParams } from 'react-router-dom';

import { useQuery } from '@tanstack/react-query';

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

  if (!eventId) {
    throw new Error('eventId is null'); //TODO: eventId가 없을 때 처리
  }

  const { data: eventDetail } = useQuery(['event_detail', 'eventId'], () =>
    getEventDetail({ id: eventId! }),
  );

  const { applyEvent } = usePostEventApplyMutation();

  if (!eventDetail) {
    return <div>Loading...</div>; // TODO: 로딩 컴포넌트 구현 시 교체
  }

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
  return (
    <div>
      <FormButtonWrapper>
        <PurpleButton>제출된 폼 보기</PurpleButton>
        <UpdateDeleteWrapper>
          <PurpleButton reverse>수정하기</PurpleButton>
          <PurpleButton>삭제하기</PurpleButton>
        </UpdateDeleteWrapper>
      </FormButtonWrapper>
      <EventDetailWrapper>
        <Poster posterSrc={poster} width={23} />
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
          <ButtonWrapper>
            <SemiPurpleButton onClick={() => applyEvent({ eventId })}>
              참여 신청하기
            </SemiPurpleButton>
            <BookMark reverse />
          </ButtonWrapper>
        </DetailContentWrapper>
      </EventDetailWrapper>
      <EventContent>{content}</EventContent>
    </div>
  );
};

export default EventDetailPage;
