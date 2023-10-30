import { GetAllEventsResponse, GetMyEventResponse } from '@/types/event';

const myEvent: GetMyEventResponse = {
  data: [
    {
      id: '1',
      title: 'test1',
      clubName: 'test',
      startDate: '2021-10-10',
      location: 'test',
      status: 'cancelRequested',
      poster:
        'https://english.seoul.go.kr/wp-content/uploads/2022/09/working-seoul-poster-214x300.jpg',
    },
    {
      id: '2',
      title: 'test2',
      clubName: 'test',
      startDate: '2021-10-10',
      location: 'test',
      status: 'cancelled',
      poster: 'https://www.europosters.ie/image/framed/750/115398_modenacerna.jpg',
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
      poster: 'test',
      startDate: '2021-10-10',
      startTime: 'test',
      location: 'test',
      clubName: 'test',
      clubImage: 'test',
    },
    {
      id: '2',
      title: 'test2',
      poster: 'test',
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

export { myEvent, allEvents };
