import { setupWorker } from 'msw/browser';

import clubHandlers from './club';
import eventHandlers from './event';
import userHandlers from './users';

export const worker = setupWorker(...userHandlers, ...eventHandlers, ...clubHandlers);
