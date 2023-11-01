import { setupWorker } from 'msw/browser';

import clubsHandlers from './clubs';

// import eventHandlers from './event';
// import { userHandlers } from './users';

export const worker = setupWorker(...clubsHandlers);
