import { create } from 'zustand';

import { FormOptionSlice, createFormOptionSlice } from './createFormOptionSlice';

type BoundStore = FormOptionSlice;

export const useBoundStore = create<BoundStore>((...args) => ({
  ...createFormOptionSlice(...args),
}));
