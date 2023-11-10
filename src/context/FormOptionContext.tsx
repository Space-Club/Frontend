import { createContext } from 'react';

interface FormOptionContextProps {
  selectedOptions: string[];
  setSelectedOptions: React.Dispatch<React.SetStateAction<string[]>>;
  description: string;
  managed: boolean;
}

interface FormContextOptionProviderProps {
  children: React.ReactNode;
}

const FormOptionContext = createContext<FormOptionContextProps>({
  selectedOptions: [],
  setSelectedOptions: () => {},
  description: '',
  managed: false,
});

const FormOptionContextProvider = ({ children }: FormContextOptionProviderProps) => {
  return (
    <FormOptionContext.Provider
      value={{
        selectedOptions: [],
        setSelectedOptions: () => {},
        description: '',
        managed: false,
      }}
    >
      {children}
    </FormOptionContext.Provider>
  );
};

export { FormOptionContextProvider, FormOptionContext };
