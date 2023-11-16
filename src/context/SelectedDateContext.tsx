import { Value } from '@/types/event';

import { PropsWithChildren, createContext, useState } from 'react';

interface SelectedDateContextProps {
  selectedDate: Value;
  setSelectedDate: React.Dispatch<React.SetStateAction<Value>>;
}

const SelectedDateContext = createContext<SelectedDateContextProps>({
  selectedDate: new Date(),
  setSelectedDate: () => {},
});

export const SelectedDateContextProvider = ({ children }: PropsWithChildren) => {
  const [selectedDate, setSelectedDate] = useState<Value>(new Date());

  return (
    <SelectedDateContext.Provider value={{ selectedDate, setSelectedDate }}>
      {children}
    </SelectedDateContext.Provider>
  );
};

export default SelectedDateContext;
