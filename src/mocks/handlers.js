import { rest } from 'msw';

const members = [];

export const handlers = [
  rest.post('/register', (req, res, ctx) => {
    members.push(req.body);
    console.log(req.body);
    return res(ctx.status(201));
  }),
];
