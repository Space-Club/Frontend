import { FormOption } from '@/types/event';

import { createContext } from 'react';
import { useState } from 'react';

interface FormOptionContextProps {
  selectedOptions: FormOption[];
  appendOption: (options: FormOption) => void;
  deleteOption: (options: FormOption) => void;
  changeOptionTitle: (options: FormOption, title: string) => void;
  description: string;
  managed: boolean;
}

interface FormContextOptionProviderProps {
  children: React.ReactNode;
}

const FormOptionContext = createContext<FormOptionContextProps>({
  selectedOptions: [],
  appendOption: () => {},
  deleteOption: () => {},
  changeOptionTitle: () => {},
  description: '',
  managed: false,
});

const FormOptionContextProvider = ({ children }: FormContextOptionProviderProps) => {
  const [selectedOptions, setSelectedOptions] = useState<FormOption[]>([]);

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
    setSelectedOptions((prev) =>
      prev.map((prevOption) => {
        if (prevOption.id === option.id) {
          return { ...prevOption, title };
        }
        return prevOption;
      }),
    );
  };

  return (
    <FormOptionContext.Provider
      value={{
        selectedOptions,
        appendOption,
        deleteOption,
        changeOptionTitle,
        description: '',
        managed: false,
      }}
    >
      {children}
    </FormOptionContext.Provider>
  );
};

export { FormOptionContextProvider, FormOptionContext };
