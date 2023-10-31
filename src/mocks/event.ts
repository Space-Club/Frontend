import { HttpResponse, http } from 'msw';

import { END_POINTS } from '@constants/api';

import { allEvents, myEvent, eventDetail } from './data/eventData';

interface event {
  eventName: string;
  startTime: Date;
  personnel: number;
  const: number;
  bankName: string;
  account: string;
  maxTicket: number;
  formStartTime: Date;
  formLastTime: Date;
  poster: File;
  eventContent: string;
}

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

const eventList: event[] = [];

const eventHandlers = [
  http.post(END_POINTS.PERFORMANCE_FORM, async ({ request }) => {
    const reader = request.body?.getReader();
    let data = '';

    // eslint-disable-next-line no-constant-condition
    while (true) {
      const { done, value } = await reader!.read();

      if (done) break;

      data += new TextDecoder().decode(value);
    }

    eventList.push(JSON.parse(data));
    return HttpResponse.json({ status: 201 });
  }),

  http.get(`${END_POINTS.GET_MY_EVENT}?page=$1size=10&sort=id,startDate`, async () => {
    return HttpResponse.json(myEvent, { status: 201 });
  }),

  http.get(`${END_POINTS.ALL_EVENTS}?page=1&size=10&sort=id,startDate`, async () => {
    return HttpResponse.json(allEvents, { status: 201 });
  }),
  
   http.get(`${END_POINTS.GET_EVENT_DETAIL}/:eventId`, async ({ params }) => {
    const { eventId } = params;
    console.log('id', eventId);
    return HttpResponse.json(eventDetail, { status: 201 });
  }),
];

export default eventHandlers;
