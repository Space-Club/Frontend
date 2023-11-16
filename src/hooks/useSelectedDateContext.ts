import SelectedDateContext from '@/context/SelectedDateContext';

import { useContext } from 'react';

const useSelectedDateContext = () => {
  const selectedDateContext = useContext(SelectedDateContext);

  if (!selectedDateContext) {
    throw new Error('useSelectedDateContext는 SelectedDateProvider 내에서만 사용할 수 있습니다.');
  }

  return selectedDateContext;
};

export default useSelectedDateContext;
