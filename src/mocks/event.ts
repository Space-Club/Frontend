import { HttpResponse, http } from 'msw';

import { END_POINTS } from '@constants/api';

import { eventDetailMockData } from './data/eventData';

const eventHandlers = [
  http.post(`${END_POINTS.PERFORMANCE_FORM}`, async () => {
    return HttpResponse.json({ eventId: '1' }, { status: 201 });
  }),

  http.get(`${END_POINTS.GET_EVENT_DETAIL}/:eventId`, async () => {
    return HttpResponse.json(eventDetailMockData, { status: 200 });
  }),

  http.delete(`${END_POINTS.GET_EVENT_DETAIL}/:eventId`, async ({ params }) => {
    const { eventId } = params;
    console.log('deleteId', eventId);
    return new HttpResponse(null, { status: 204 });
  }),
  http.post(`/users/events/:eventId`, async ({ request, params }) => {
    const { eventId } = params;
    const data = await request.json();
    console.log('bookmark', eventId, data);

    return HttpResponse.json({ bookmark: true }, { status: 200 });
  }),

  http.post('/events/forms/applications', async ({ request }) => {
    const data = await request.json();
    console.log(data);
    return new HttpResponse(null, { status: 201 });
  }),
];

export default eventHandlers;
