import { FormOption } from '@/types/event';

import { createContext } from 'react';
import { useState } from 'react';

interface FormOptionContextProps {
  selectedOptions: FormOption[];
  appendOption: (options: FormOption) => void;
  description: string;
  managed: boolean;
}

interface FormContextOptionProviderProps {
  children: React.ReactNode;
}

const FormOptionContext = createContext<FormOptionContextProps>({
  selectedOptions: [],
  appendOption: () => {},
  description: '',
  managed: false,
});

const FormOptionContextProvider = ({ children }: FormContextOptionProviderProps) => {
  const [selectedOptions, setSelectedOptions] = useState<FormOption[]>([]);

  const appendOption = (option: FormOption) => {
    setSelectedOptions((prev) => [...prev, option]);
  };

  return (
    <FormOptionContext.Provider
      value={{
        selectedOptions,
        appendOption,
        description: '',
        managed: false,
      }}
    >
      {children}
    </FormOptionContext.Provider>
  );
};

export { FormOptionContextProvider, FormOptionContext };
