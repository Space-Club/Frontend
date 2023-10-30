import { HttpResponse, http } from 'msw';

import { END_POINTS } from '@constants/api';

import { allEvents, myEvent } from './data/eventData';

const eventHandlers = [
  http.get(`${END_POINTS.GET_MY_EVENT}?page=$1size=10&sort=id,startDate`, async () => {
    return HttpResponse.json(myEvent, { status: 201 });
  }),

  http.get(`${END_POINTS.ALL_EVENTS}?page=1&size=10&sort=id,startDate`, async () => {
    return HttpResponse.json(allEvents, { status: 201 });
  }),
];

export default eventHandlers;
