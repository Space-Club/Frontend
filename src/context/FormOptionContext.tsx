import { FORM_OPTION } from '@/constants/form';
import useToast from '@/hooks/useToast';
import { FormOption } from '@/types/form';

import { createContext, useCallback, useEffect } from 'react';
import { useMemo, useState } from 'react';

interface FormOptionContextProps {
  selectedOptions: FormOption[];
  description: string;
  isManaged: boolean;
  appendOption: (options: FormOption) => void;
  deleteOption: (options: FormOption) => void;
  validateOptionTitle: () => boolean;
  changeOptionTitle: (option: FormOption, title: string) => void;
  changeOptionOptions: (option: FormOption, options: string[]) => void;
  setDescription: (description: string) => void;
  setIsManaged: (managed: boolean) => void;
}

interface FormContextOptionProviderProps {
  children: React.ReactNode;
}

const MAX_OPTION_COUNT = 20;

const FormOptionContext = createContext<FormOptionContextProps>({
  selectedOptions: [],
  description: '',
  isManaged: false,
  appendOption: () => {},
  deleteOption: () => {},
  changeOptionTitle: () => {},
  changeOptionOptions: () => {},
  validateOptionTitle: () => false,
  setIsManaged: () => {},
  setDescription: () => {},
});

const FormOptionContextProvider = ({ children }: FormContextOptionProviderProps) => {
  const [selectedOptions, setSelectedOptions] = useState<FormOption[]>(
    Object.values(FORM_OPTION.defaultOption),
  );
  const [isManaged, setIsManaged] = useState<boolean>(false);
  const [description, setDescription] = useState<string>('');

  const { createToast } = useToast();

  const appendOption = useCallback((option: FormOption) => {
    setSelectedOptions((prev) => [...prev, option]);
  }, []);

  const deleteOption = useCallback((option: FormOption) => {
    setSelectedOptions((prev) =>
      prev.filter((prevOption) => {
        return prevOption.id !== option.id;
      }),
    );
  }, []);

  useEffect(() => {
    if (MAX_OPTION_COUNT < selectedOptions.length) {
      createToast({
        message: `항목은 최대 ${MAX_OPTION_COUNT}개까지만 추가할 수 있습니다.`,
        toastType: 'error',
      });
      setSelectedOptions((prev) => prev.slice(0, MAX_OPTION_COUNT));
    }
  }, [selectedOptions]); // eslint-disable-line react-hooks/exhaustive-deps

  const changeOptionTitle = useCallback((option: FormOption, title: string) => {
    setSelectedOptions((prev) =>
      prev.map((prevOption) => {
        if (prevOption.id === option.id) {
          return { ...prevOption, title };
        }
        return prevOption;
      }),
    );
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  const changeOptionOptions = useCallback((option: FormOption, options: string[]) => {
    setSelectedOptions((prev) =>
      prev.map((prevOption) => {
        if (prevOption.id === option.id) {
          return { ...prevOption, options };
        }
        return prevOption;
      }),
    );
  }, []);
  const validateOptionTitle = () => {
    const isTitleValid = selectedOptions.every(({ title, id }) => {
      if (title.trim().length === 0) {
        createToast({
          message: '제목이 입력되지 않은 항목이 있습니다.',
          toastType: 'error',
        });
        return false;
      }

      if (selectedOptions.some((option) => option.id !== id && option.title === title)) {
        createToast({
          message: '중복된 제목은 사용할 수 없습니다.',
          toastType: 'error',
        });
        return false;
      }

      return true;
    });

    return isTitleValid;
  };

  const contextValue = useMemo(
    () => ({
      selectedOptions,
      description,
      isManaged,
      appendOption,
      deleteOption,
      changeOptionTitle,
      changeOptionOptions,
      setIsManaged,
      validateOptionTitle,
      setDescription,
    }),
    [selectedOptions, description, isManaged], // eslint-disable-line react-hooks/exhaustive-deps
  );

  return <FormOptionContext.Provider value={contextValue}>{children}</FormOptionContext.Provider>;
};

export { FormOptionContextProvider, FormOptionContext };
