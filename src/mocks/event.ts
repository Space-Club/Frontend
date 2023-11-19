import { HttpResponse, http } from 'msw';

import { END_POINTS } from '@constants/api';

import { allEvents, appliedEvent, eventDetail, eventForm } from './data/eventData';

const eventHandlers = [
  http.post(`${END_POINTS.PERFORMANCE_FORM}`, async () => {
    return HttpResponse.json({ eventId: '1' }, { status: 201 });
  }),

  http.get(`${END_POINTS.GET_APPLIED_EVENT}?page=$1size=10&sort=id,startDate`, async () => {
    return HttpResponse.json(appliedEvent, { status: 201 });
  }),

  http.get(`${END_POINTS.ALL_EVENTS}?page=1&size=10&sort=id,startDate`, async () => {
    return HttpResponse.json(allEvents, { status: 201 });
  }),

  http.get(`${END_POINTS.GET_EVENT_DETAIL}/:eventId`, async ({ params }) => {
    const { eventId } = params;
    console.log(eventId);

    return HttpResponse.json(eventDetail, { status: 201 });
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
  http.get('/events/:eventId/forms', async ({ params }) => {
    const { eventId } = params;
    console.log(eventId);
    return HttpResponse.json(eventForm, { status: 200 });
  }),
  http.post('/events/forms/applications', async ({ request }) => {
    const data = await request.json();
    console.log(data);
    return new HttpResponse(null, { status: 201 });
  }),
];

export default eventHandlers;
