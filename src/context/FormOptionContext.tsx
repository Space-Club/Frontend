import { FORM_OPTION } from '@/constants/form';
import useToast from '@/hooks/useToast';
import { FormOption } from '@/types/form';

import { createContext } from 'react';
import { useState } from 'react';

interface FormOptionContextProps {
  selectedOptions: FormOption[];
  description: string;
  managed: boolean;
  appendOption: (options: FormOption) => void;
  deleteOption: (options: FormOption) => void;
  changeOptionTitle: (options: FormOption, title: string) => void;
  setManaged: (managed: boolean) => void;
  setDescription: (description: string) => void;
}

interface FormContextOptionProviderProps {
  children: React.ReactNode;
}

const FormOptionContext = createContext<FormOptionContextProps>({
  selectedOptions: [],
  description: '',
  managed: false,
  appendOption: () => {},
  deleteOption: () => {},
  changeOptionTitle: () => {},
  setManaged: () => {},
  setDescription: () => {},
});

const FormOptionContextProvider = ({ children }: FormContextOptionProviderProps) => {
  const [selectedOptions, setSelectedOptions] = useState<FormOption[]>(
    Object.values(FORM_OPTION.defaultOption),
  );
  const [managed, setManaged] = useState<boolean>(false);
  const [description, setDescription] = useState<string>('');

  const { createToast } = useToast();

  const appendOption = (option: FormOption) => {
    setSelectedOptions((prev) => [...prev, option]);
  };

  const deleteOption = (option: FormOption) => {
    setSelectedOptions((prev) =>
      prev.filter((prevOption) => {
        return prevOption.id !== option.id;
      }),
    );
  };

  const changeOptionTitle = (option: FormOption, title: string) => {
    if (!validateOptionTitle(title)) return;
    setSelectedOptions((prev) =>
      prev.map((prevOption) => {
        if (prevOption.id === option.id) {
          return { ...prevOption, title };
        }
        return prevOption;
      }),
    );
  };

  const validateOptionTitle = (title: string) => {
    if (title === '') {
      createToast({
        message: '제목을 입력해주세요.',
        toastType: 'error',
      });
      return false;
    }

    if (selectedOptions.some((option) => option.title === title)) {
      createToast({
        message: '중복된 제목은 사용할 수 없습니다.',
        toastType: 'error',
      });
      return false;
    }

    return true;
  };

  return (
    <FormOptionContext.Provider
      value={{
        selectedOptions,
        description,
        managed,
        appendOption,
        deleteOption,
        changeOptionTitle,
        setManaged,
        setDescription,
      }}
    >
      {children}
    </FormOptionContext.Provider>
  );
};

export { FormOptionContextProvider, FormOptionContext };
