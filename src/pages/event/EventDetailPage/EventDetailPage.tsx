import { FaRegBookmark } from 'react-icons/fa';

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
        <PosterImage />
        <DetailContentWrapper>
          <EventTitle>행사 제목</EventTitle>
          <TwoContentWrapper>
            <div>
              <ContentLabel>날짜</ContentLabel>
              <div>2023/10/29</div>
            </div>
            <div>
              <ContentLabel>시간</ContentLabel>
              <div>15시 30분</div>
            </div>
          </TwoContentWrapper>
          <div>
            <ContentLabel>장소</ContentLabel>
            <div>서울시 마포구 성산동</div>
          </div>
          <div>
            <ContentLabel>참여신청가능 기간</ContentLabel>
            <div>2023/10/1, 14:00 - 2023/10/20, 23:00</div>
          </div>
          <div>
            <ContentLabel>주최자</ContentLabel>
            <div>연어를 좋아하는 사람들 모임, 이채연</div>
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
