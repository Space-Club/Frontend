import Toasts from '@/components/common/Toasts/Toasts';
import { Toast, ToastType } from '@/types/toast';
import generateUniqueId from '@/utils/generateUniqueId';

import { PropsWithChildren, createContext, useCallback, useState } from 'react';
import { createPortal } from 'react-dom';

type CreateToast = ({ message, toastType }: { message: string; toastType: ToastType }) => void;
type DeleteToast = ({ id }: { id: string }) => void;
type AppendToast = ({ toast }: { toast: Toast }) => void;

interface CreateToastContext {
  createToast: CreateToast;
  deleteToast: DeleteToast;
}

const ToastContext = createContext<CreateToastContext>({
  createToast: () => {},
  deleteToast: () => {},
});

const Portal = ({ children }: PropsWithChildren) => {
  return createPortal(children, document.getElementById('overlays') ?? document.body);
};

export const ToastContextProvider = ({ children }: PropsWithChildren) => {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const appendToast: AppendToast = useCallback(({ toast }) => {
    setToasts((prevToasts) => [...prevToasts, toast]);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const deleteToast: DeleteToast = useCallback(({ id }) => {
    setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const createToast: CreateToast = useCallback(
    ({ message, toastType }) => {
      const id = generateUniqueId();

      appendToast({ toast: { id, message, toastType } });
    },
    [appendToast],
  );

  return (
    <ToastContext.Provider value={{ createToast, deleteToast }}>
      {children}
      <Portal>
        <Toasts toasts={toasts} />
      </Portal>
    </ToastContext.Provider>
  );
};

export default ToastContext;
