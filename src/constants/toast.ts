import Theme from '@/styles/Theme';
import { ToastColor } from '@/types/toast';

const TOAST_COLOR: ToastColor = {
  error: Theme.color.tRed,
  info: Theme.color.tPurple,
  success: Theme.color.tGreen,
};

const TOAST_TIME_DURATION = 4000;

export { TOAST_COLOR, TOAST_TIME_DURATION };
