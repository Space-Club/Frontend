import { setupWorker } from 'msw/browser';

import { userHandlers } from './users';

export const worker = setupWorker(...userHandlers);
