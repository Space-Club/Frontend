import getEventDetail from '@/apis/event/getEventDetail';
import BookMark from '@/components/common/BookMark/BookMark';
import { SemiPurpleButton } from '@/components/common/BookMark/BookMark.style';
import Poster from '@/components/common/Poster/Poster';
import usePostEventApplyMutation from '@/hooks/query/event/usePostEventApplyMutation';

import { useNavigate, useParams } from 'react-router-dom';

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
  const navigate = useNavigate();

  if (!eventId) {
    throw new Error('eventId is null'); //TODO: eventId가 없을 때 처리
  }

  const { data: eventDetail, isLoading } = useQuery(['event_detail', `${eventId}`], () =>
    getEventDetail({ id: eventId! }),
  );

  const { applyEvent } = usePostEventApplyMutation();
  // TODO: 행사 관리자인지 여부 확인 -> 제출된 폼 보기, 수정 및 삭제 권한 부여 -> 참여 신청 및 북마크 권한 부여 X
  // TODO: 수정하기 버튼 클릭시, 게시물 수정 페이지로 이동
  // TODO: 삭제하기 버튼 클릭시, 모달로 한 번더 물어본 후 삭제 API 연동 후, 이전 페이지로 이동
  // TODO: 참여 신청하기 버튼 클릭하는 API 연결
  // TODO: 북마크 버튼 클릭하는 API 연결

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
      {!isLoading && (
        <>
          <FormButtonWrapper>
            <PurpleButton onClick={() => navigate(`/checkform/${eventId}`)}>
              제출된 폼 보기
            </PurpleButton>
            <UpdateDeleteWrapper>
              <PurpleButton reverse>수정하기</PurpleButton>
              <PurpleButton>삭제하기</PurpleButton>
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
              <ButtonWrapper>
                <SemiPurpleButton onClick={() => applyEvent({ eventId })}>
                  참여 신청하기
                </SemiPurpleButton>
                <BookMark reverse />
              </ButtonWrapper>
            </DetailContentWrapper>
          </EventDetailWrapper>
          <EventContent>{content}</EventContent>
        </>
      )}
    </div>
  );
};

export default EventDetailPage;
