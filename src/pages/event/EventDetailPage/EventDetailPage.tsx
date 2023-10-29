import getEventDetail from '@/apis/event/getEventDetail';

import { FaRegBookmark } from 'react-icons/fa';
import { useParams } from 'react-router-dom';

import { useQuery } from '@tanstack/react-query';

import {
  ButtonWrapper,
  ContentLabel,
  DetailContentWrapper,
  EventDetailWrapper,
  EventTitle,
  FormButtonWrapper,
  PosterImage,
  PurpleButton,
  SemiPurpleButton,
  TwoContentWrapper,
  UpdateDeleteWrapper,
} from './EventDetailPage.style';

const EventDetailPage = () => {
  const { eventId } = useParams();
  const { data: eventDetail } = useQuery(['event_detail', 'eventId'], () =>
    getEventDetail({ id: eventId }),
  );

  if (!eventDetail) {
    return <div>Loading...</div>;
  }

  const {
    title,
    poster,
    startDate,
    startTime,
    location,
    openDate,
    openTime,
    closeDate,
    closeTime,
    name,
  } = eventDetail;
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
        <PosterImage src={poster} noneBackGround={!!poster} />
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
            <SemiPurpleButton>참여 신청하기</SemiPurpleButton>
            <SemiPurpleButton reverse>
              <FaRegBookmark size={30} strokeWidth={10} />
            </SemiPurpleButton>
          </ButtonWrapper>
        </DetailContentWrapper>
      </EventDetailWrapper>
    </div>
  );
};

export default EventDetailPage;
