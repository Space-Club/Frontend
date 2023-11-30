import { EventTags } from '@/types/event';

const APPLIED_EVENTS_TAGS: EventTags = {
  PENDING: {
    title: '관리자 확인중',
    borderColor: 'tGreen',
    backgroundColor: 'tSemiGreen',
    textColor: 'white',
  },
  CONFIRMED: {
    title: '신청확정',
    borderColor: 'tPurple',
    backgroundColor: 'tSemiPurple',
    textColor: 'white',
  },
  CANCELED: {
    title: '취소완료',
    borderColor: 'tBlue',
    backgroundColor: 'tSemiBlue',
    textColor: 'white',
  },
  CANCEL_REQUESTED: {
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
  DATE: '날짜',
  TIME: '시간',
  LOCATION: '장소',
  COST: '비용',
  APPLICATION_PERIOD: '참여 신청 가능기간',
  ORGANIZER: '주최자',
  RECRUIT_TARGET: '모집 대상',
  RECRUIT_CAPACITY: '모집 인원',
  ACTIVITY_LOCATION: '활동 위치',
  SCHEDULE: '일정',
};

const EVENT_DETAIL_BUTTON = {
  SHOW_SUBMIT_FORM: '제출된 폼 보기',
  EDIT: '수정하기',
  DELETE: '삭제하기',
  APPLY: {
    COMPLETED: '신청 완료',
    SOLD_OUT: 'SOLD OUT',
    DEADLINE: '신청 마감',
    POSSIBLE: '참여 신청하기',
  },
};

const SUBMIT_FORM_OPTIONS = {
  MBTI: [
    'ENFJ',
    'ENFP',
    'ENTJ',
    'ENTP',
    'ESFJ',
    'ESFP',
    'ESTJ',
    'ESTP',
    'INFJ',
    'INFP',
    'INTJ',
    'INTP',
    'ISFJ',
    'ISFP',
    'ISTJ',
    'ISTP',
  ],
  GENDER: ['남', '여'],
};

export { APPLIED_EVENTS_TAGS, EVENT_DETAIL, EVENT_DETAIL_BUTTON, SUBMIT_FORM_OPTIONS };
