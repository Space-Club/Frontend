import { GetMyEventResponse } from '@/types/event';
import { getEventDetailResponse } from '@/types/event';
import { HttpResponse, http } from 'msw';

import { END_POINTS } from '@constants/api';

const myEvent: GetMyEventResponse = {
  data: [
    {
      id: '1',
      title: 'test1',
      clubName: 'test',
      startDate: '2021-10-10',
      location: 'test',
      status: 'test',
    },
    {
      id: '2',
      title: 'test2',
      clubName: 'test',
      startDate: '2021-10-10',
      location: 'test',
      status: 'test',
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

const eventDetail: getEventDetailResponse = {
  title: '스클 행사',
  startDate: '2023-10-11',
  startTime: '15:30',
  location: '대학교 정문',
  openDate: '2023-10-10',
  openTime: '10:00',
  closeDate: '2023-10-10',
  closeTime: '13:00',
  name: '연어',
  poster: '/src/assets/image/headhunting.svg',
};

const eventHandlers = [
  http.get(`${END_POINTS.GET_MY_EVENT}?page=$1size=10&sort=id,startDate`, async () => {
    return HttpResponse.json(myEvent, { status: 201 });
  }),

  http.get(`${END_POINTS.GET_EVENT_DETAIL}/:eventId`, async ({ params }) => {
    const { eventId } = params;
    console.log('id', eventId);
    return HttpResponse.json(eventDetail, { status: 201 });
  }),
];

export default eventHandlers;
