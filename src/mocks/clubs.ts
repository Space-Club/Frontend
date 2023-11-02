import { END_POINTS } from '@/constants/api';
import { HttpResponse, http } from 'msw';

import { myClubs } from './data/myClubsData';

const clubsHandlers = [
  http.get(`${END_POINTS.MY_CLUB}`, () => {
    return HttpResponse.json(myClubs, { status: 201 });
  }),
];

export default clubsHandlers;
