import Theme from '@/styles/Theme';

type ToastType = 'success' | 'error' | 'info';

interface Toast {
  id: string;
  message: string;
  toastType: ToastType;
}

type ToastColor = {
  [key in ToastType]: (typeof Theme.color)[keyof typeof Theme.color];
};

export { Toast, ToastType, ToastColor };
