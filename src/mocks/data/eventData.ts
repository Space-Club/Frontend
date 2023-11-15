import { GetAppliedEventResponse } from '@/types/api/getAppliedEvent';
import { GetAllEventsResponse, getEventDetailResponse } from '@/types/event';

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
      poster:
        'https://english.seoul.go.kr/wp-content/uploads/2022/09/working-seoul-poster-214x300.jpg',
      startDate: '2021-10-10',
      startTime: 'test',
      location: 'test',
      clubName: 'test',
      clubImage: 'test',
    },
    {
      id: '2',
      title: 'test2',
      poster: 'https://www.europosters.ie/image/framed/750/115398_modenacerna.jpg',
      startDate: '2021-10-10',
      startTime: 'test',
      location: 'test',
      clubName: 'test',
      clubImage: 'test',
    },
    {
      id: '1',
      title: 'test1',
      poster:
        'https://english.seoul.go.kr/wp-content/uploads/2022/09/working-seoul-poster-214x300.jpg',
      startDate: '2021-10-10',
      startTime: 'test',
      location: 'test',
      clubName: 'test',
      clubImage: 'test',
    },
    {
      id: '2',
      title: 'test2',
      poster: 'https://www.europosters.ie/image/framed/750/115398_modenacerna.jpg',
      startDate: '2021-10-10',
      startTime: 'test',
      location: 'test',
      clubName: 'test',
      clubImage: 'test',
    },
    {
      id: '1',
      title: 'test1',
      poster:
        'https://english.seoul.go.kr/wp-content/uploads/2022/09/working-seoul-poster-214x300.jpg',
      startDate: '2021-10-10',
      startTime: 'test',
      location: 'test',
      clubName: 'test',
      clubImage: 'test',
    },
    {
      id: '2',
      title: 'test2',
      poster: 'https://www.europosters.ie/image/framed/750/115398_modenacerna.jpg',
      startDate: '2021-10-10',
      startTime: 'test',
      location: 'test',
      clubName: 'test',
      clubImage: 'test',
    },
  ],
  pageData: {
    first: true,
    last: true,
    pageNumber: 1,
    size: 10,
    totalPage: 30,
    totalElement: 2,
  },
};

const eventDetail: getEventDetailResponse = {
  title: '스클 행사',
  content: '안녕하세요. 스클 행사입니다. 많은 참여 부탁드립니다.',
  startDate: '2023-10-11',
  startTime: '15:30',
  location: '대학교 정문',
  openDate: '2023-10-10',
  openTime: '10:00',
  closeDate: '2023-10-10',
  closeTime: '13:00',
  clubName: '연어',
  posterImageUrl: '/src/assets/image/headhunting.svg',
  isManager: true,
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
