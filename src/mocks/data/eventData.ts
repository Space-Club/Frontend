import { GetAppliedEventResponse } from '@/types/api/getAppliedEvent';
import { ShowDetailResponse } from '@/types/api/getEventDetail';
import { GetAllEventsResponse } from '@/types/event';

const appliedEvent: GetAppliedEventResponse = {
  data: [
    {
      id: '1',
      title: 'test1',
      clubName: 'test',
      startDate: '2021-10-10',
      location: 'test',
      status: 'CANCELED',
      posterImageUrl:
        'https://english.seoul.go.kr/wp-content/uploads/2022/09/working-seoul-poster-214x300.jpg',
    },
    {
      id: '2',
      title: 'test2',
      clubName: 'test',
      startDate: '2021-10-10',
      location: 'test',
      status: 'CANCELED',
      posterImageUrl: 'https://www.europosters.ie/image/framed/750/115398_modenacerna.jpg',
    },
  ],
  pageData: {
    first: true,
    last: true,
    pageNumber: 1,
    size: 10,
    totalPages: 30,
    totalElements: 2,
  },
};

const allEvents: GetAllEventsResponse = {
  data: [
    {
      id: '1',
      title: 'test1',
      posterImageUrl:
        'https://english.seoul.go.kr/wp-content/uploads/2022/09/working-seoul-poster-214x300.jpg',
      startDate: '2021-10-10',
      startTime: 'test',
      formEndDate: 'test',
      formEndTime: 'test',
      location: 'test',
      clubName: 'test',
      clubLogoImageUrl: 'test',
    },
    {
      id: '2',
      title: 'test2',
      posterImageUrl: 'https://www.europosters.ie/image/framed/750/115398_modenacerna.jpg',
      startDate: '2021-10-10',
      startTime: 'test',
      formEndDate: 'test',
      formEndTime: 'test',
      location: 'test',
      clubName: 'test',
      clubLogoImageUrl: 'test',
    },
    {
      id: '1',
      title: 'test1',
      posterImageUrl:
        'https://english.seoul.go.kr/wp-content/uploads/2022/09/working-seoul-poster-214x300.jpg',
      startDate: '2021-10-10',
      startTime: 'test',
      formEndDate: 'test',
      formEndTime: 'test',
      location: 'test',
      clubName: 'test',
      clubLogoImageUrl: 'test',
    },
  ],
  pageData: {
    first: true,
    last: true,
    pageNumber: 1,
    size: 10,
    totalPages: 30,
    totalElements: 2,
  },
};

const eventDetail: ShowDetailResponse = {
  id: 1,
  title: '귀멸의 칼날',
  content: '귀칼 보고싶다....',
  posterImageUrl:
    'data:image/jpeg;base64,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',
  startDate: '2023-09-21',
  startTime: '12:30:30',
  location: '건대 롯데시네마',
  cost: 5000,
  clubName: '영화 동아리',
  clubLogoImageUrl:
    'data:image/jpeg;base64,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',
  formOpenDate: '2023-10-24',
  formOpenTime: '23:41:30',
  formCloseDate: '2023-10-24',
  formCloseTime: '23:41:30',
  isBookmarked: true,
  applicants: 999,
  capacity: 1000,
  isManager: true,
  eventCategory: 'SHOW',
  maxTicketCount: 5, // TODO: 명세서 나올 시, 변수 명 변경 필요
};

const eventForm = {
  event: {
    title: '행사 제목',
  },
  form: {
    description: '폼 정보',
    options: [
      {
        id: 1,
        title: '이름',
        type: 'TEXT',
      },
      {
        id: 2,
        title: '연락처',
        type: 'TEXT',
      },
      {
        id: 3,
        title: '나이',
        type: 'NUMBER',
      },
      {
        id: 4,
        title: '성별',
        type: 'RADIO',
      },
      {
        id: 5,
        title: '학교/학과/재학여부',
        type: 'TEXT',
      },
      {
        id: 6,
        title: 'MBTI',
        type: 'SELECT',
      },
      {
        id: 7,
        title: '자기소개',
        type: 'TEXT',
      },
      {
        id: 8,
        title: '입금자명',
        type: 'TEXT',
      },
    ],
  },
};

export { appliedEvent, allEvents, eventDetail, eventForm };
