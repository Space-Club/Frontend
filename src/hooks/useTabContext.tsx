import TabContext from '@/context/TabContext';

import { useContext } from 'react';

export const useTabContext = () => {
  const context = useContext(TabContext);

  if (!context) {
    throw new Error('useTabContext must be used within a TabProvider');
  }

  return context;
};
