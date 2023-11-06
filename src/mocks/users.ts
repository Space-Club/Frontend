import { HttpResponse, http } from 'msw';

import { END_POINTS } from '@constants/api';

import { userInfo } from './data/userData';

interface member {
  name: string;
  number: string;
}

const members: member[] = [];

const club = [
  {
    id: 1,
    src: 'https://picsum.photos/200/301',
  },
  {
    id: 2,
    src: 'https://picsum.photos/200/302',
  },
  {
    id: 3,
    src: 'https://picsum.photos/200/303',
  },
];

const userHandlers = [
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

  http.post(END_POINTS.KAKAO_LOGIN, async () => {
    return HttpResponse.json({
      userId: 'test id',
      accessToken: '',
    });
  }),

  http.get(END_POINTS.MY_CLUB, async ({ request }) => {
    const url = new URL(request.url);

    const userId = url.searchParams.get('id');
    console.log(userId);

    return HttpResponse.json(club, { status: 201 });
  }),

  http.get(END_POINTS.GET_USER_INFO, async ({ request }) => {
    const token = request.headers.get('Authorization');

    if (token === '123') {
      return HttpResponse.json(userInfo, { status: 200 });
    } else {
      return new HttpResponse(null, { status: 404 });
    }
  }),
];

export default userHandlers;
