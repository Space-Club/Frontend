import { HttpResponse, http } from 'msw';

import { END_POINTS } from '@constants/api';

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

const eventList: event[] = [];

export const eventHandlers = [
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
    console.log('eventList', eventList);
    return HttpResponse.json({ status: 201 });
  }),
];
