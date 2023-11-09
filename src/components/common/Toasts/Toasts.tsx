import useToast from '@/hooks/useToast';
import { Toast as ToastInterface } from '@/types/toast';

import Toast from '../Toast/Toast';
import { ToastsContainer } from './Toasts.style';

interface ToastsProps {
  toasts: ToastInterface[];
}

const Toasts = ({ toasts }: ToastsProps) => {
  const { deleteToast } = useToast();

  return (
    <ToastsContainer>
      {toasts.map((toast) => (
        <Toast
          key={toast.id}
          message={toast.message}
          toastType={toast.toastType}
          onClose={() => deleteToast({ id: toast.id })}
        />
      ))}
    </ToastsContainer>
  );
};

export default Toasts;
