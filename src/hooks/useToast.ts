import ToastContext from '@/context/ToastContext';

import { useContext } from 'react';

const useToast = () => {
  const toastContext = useContext(ToastContext);
  if (!toastContext) {
    throw new Error('useToast는 ToastProvider 내에서만 사용할 수 있습니다.');
  }
  const { createToast, deleteToast } = toastContext;

  return { createToast, deleteToast };
};

export default useToast;
