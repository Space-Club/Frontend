import { END_POINTS } from '@/constants/api';
import { HttpResponse, http } from 'msw';

interface club {
  name: string;
  info: string;
  image: File | null;
}

const clubs: club[] = [];

export const clubHandlers = [
  http.post(END_POINTS.CREATE_CLUB, async ({ request }) => {
    const reader = request.body?.getReader();
    let data = '';

    // eslint-disable-next-line no-constant-condition
    while (true) {
      const { done, value } = await reader!.read();

      if (done) break;

      data += new TextDecoder().decode(value);
    }

    clubs.push(JSON.parse(data));

    return HttpResponse.json({ status: 201 });
  }),
];
