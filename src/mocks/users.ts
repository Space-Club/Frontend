import { END_POINTS } from '@/constants/api';
import { HttpResponse, http } from 'msw';

interface member {
  name: string;
  number: string;
}

const members: member[] = [];

export const userHandlers = [
  http.post(END_POINTS.REGISTER, async ({ request }) => {
    const reader = request.body?.getReader();
    let data = '';

    // eslint-disable-next-line no-constant-condition
    while (true) {
      const { done, value } = await reader!.read();

      if (done) break;

      data += new TextDecoder().decode(value);
    }

    members.push(JSON.parse(data));

    return HttpResponse.json({ status: 201 });
  }),
];
