import { END_POINTS } from '@/constants/api';
import { HttpResponse, http } from 'msw';

import { inviteLinkResponse } from './data/clubData';

const clubHandlers = [
  http.get(END_POINTS.INVITE_LINK, async () => {
    return HttpResponse.json(inviteLinkResponse, { status: 201 });
  }),
];

export default clubHandlers;
