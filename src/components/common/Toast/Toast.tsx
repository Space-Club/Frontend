import { TOAST_COLOR } from '@/constants/toast';
import { Toast as ToastInterface } from '@/types/toast';

import { AiFillCheckCircle, AiFillInfoCircle } from 'react-icons/ai';
import { PiWarningCircleFill } from 'react-icons/pi';

import {
  ToastContainer,
  ToastIconWrapper,
  ToastMessageStyled,
  ToastMessageWrapper,
} from './Toast.style';

interface ToastProps extends Pick<ToastInterface, 'message' | 'toastType'> {}

const Toast = ({ message, toastType }: ToastProps) => {
  const toastColor = TOAST_COLOR[toastType];

  return (
    <ToastContainer color={toastColor}>
      <ToastIconWrapper>
        {toastType === 'error' ? (
          <PiWarningCircleFill size={20} color={toastColor} />
        ) : toastType === 'info' ? (
          <AiFillInfoCircle size={20} color={toastColor} />
        ) : (
          <AiFillCheckCircle size={20} color={toastColor} />
        )}
      </ToastIconWrapper>
      <ToastMessageWrapper>
        <ToastMessageStyled>{message}</ToastMessageStyled>
      </ToastMessageWrapper>
    </ToastContainer>
  );
};

export default Toast;
