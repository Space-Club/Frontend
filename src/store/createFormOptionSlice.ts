import { FormOption } from '@/types/form';
import { StateCreator } from 'zustand';

export interface FormOptionSlice {
  selectedOptions: FormOption[];
  description: string;
  isManaged: boolean;
  appendOption: (option: FormOption) => void;
  deleteOption: (option: FormOption) => void;
  changeOptionTitle: (id: string, title: string) => void;
  setDescription: (description: string) => void;
  setIsManaged: (managed: boolean) => void;
}

export const createFormOptionSlice: StateCreator<FormOptionSlice, [], [], FormOptionSlice> = (
  set,
) => ({
  selectedOptions: [],
  description: '',
  isManaged: false,
  isValid: false,
  appendOption: (option) => {
    set((state) => ({
      selectedOptions: [...state.selectedOptions, option],
    }));
  },
  deleteOption: (option) => {
    set((state) => ({
      selectedOptions: state.selectedOptions.filter(
        (comparisonOption) => comparisonOption.id !== option.id,
      ),
    }));
  },
  changeOptionTitle: (id, title) => {
    set((state) => ({
      selectedOptions: state.selectedOptions.map((comparisonOption) =>
        comparisonOption.id === id
          ? {
              ...comparisonOption,
              title,
            }
          : comparisonOption,
      ),
    }));
  },
  setIsManaged: (isManaged: boolean) => {
    set(() => ({
      isManaged,
    }));
  },
  setDescription: (description: string) => {
    set(() => ({
      description,
    }));
  },
});
