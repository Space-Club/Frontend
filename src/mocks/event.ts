import { GetMyEventResponse } from '@/types/event';
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

const eventHandlers = [
  http.get(`${END_POINTS.GET_MY_EVENT}?page=$1size=10&sort=id,startDate`, async () => {
    return HttpResponse.json(myEvent, { status: 201 });
  }),
];

export default eventHandlers;
