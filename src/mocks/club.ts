import { END_POINTS } from '@/constants/api';
import { HttpResponse, http } from 'msw';

import { club, inviteLinkResponse } from './data/clubData';

const clubHandlers = [
  http.get(END_POINTS.INVITE_LINK, async ({ request }) => {
    const auth = request.headers.get('Authorization');
    const token = auth?.split(' ')[1];

    if (token !== '123') {
      return new HttpResponse(null, { status: 401 });
    }

    return HttpResponse.json(inviteLinkResponse, { status: 200 });
  }),

  http.get(END_POINTS.GET_CLUB({ clubId: '1' }), async ({ request }) => {
    const auth = request.headers.get('Authorization');
    const token = auth?.split(' ')[1];

    if (token !== '123') {
      return new HttpResponse(null, { status: 401 });
    }
    return HttpResponse.json(club, { status: 200 });
  }),
];

export default clubHandlers;
