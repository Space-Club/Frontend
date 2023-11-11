import { EventTags } from '@/types/event';

const APPLIED_EVENTS_TAGS: EventTags = {
  pending: {
    title: '관리자 확인중',
    borderColor: 'tGreen',
    backgroundColor: 'tSemiGreen',
    textColor: 'white',
  },
  confirmed: {
    title: '신청확정',
    borderColor: 'tPurple',
    backgroundColor: 'tSemiPurple',
    textColor: 'white',
  },
  cancelled: {
    title: '취소확정',
    borderColor: 'tBlue',
    backgroundColor: 'tSemiBlue',
    textColor: 'white',
  },
  cancelRequested: {
    title: '취소요청',
    borderColor: 'tPink',
    backgroundColor: 'tSemiPink',
    textColor: 'white',
  },
  publicEvent: {
    title: '전체공개',
    borderColor: 'tPurple',
    backgroundColor: 'tSemiPurple',
    textColor: 'white',
  },
  clubOnlyEvent: {
    title: '클럽공개',
    borderColor: 'tGreen',
    backgroundColor: 'tSemiGreen',
    textColor: 'white',
  },
};

const EVENT_DETAIL = {
  date: '날짜',
  time: '시간',
  location: '장소',
  applicationPeriod: '참여신청 가능기간',
  organizer: '주최자',
};

const EVENT_DETAIL_BUTTON = {
  showSubmitForm: '제출된 폼 보기',
  edit: '수정하기',
  delete: '삭제하기',
  apply: '참여 신청하기',
};

export { APPLIED_EVENTS_TAGS, EVENT_DETAIL, EVENT_DETAIL_BUTTON };
