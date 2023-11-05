import { EventTags } from '@/types/event';

const MY_EVENTS_TAGS: EventTags = {
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

const MY_EVENTS_TABS = [{ title: '참여 신청한 행사' }, { title: '북마크한 행사' }];

export { MY_EVENTS_TAGS, MY_EVENTS_TABS };
