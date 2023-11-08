import { TOAST_COLOR, TOAST_TIME_DURATION } from '@/constants/toast';
import { Toast as ToastInterface } from '@/types/toast';

import { useEffect, useState } from 'react';
import { AiFillCheckCircle, AiFillInfoCircle, AiOutlineClose } from 'react-icons/ai';
import { PiWarningCircleFill } from 'react-icons/pi';

import {
  CloseButtonWrapper,
  ToastContainer,
  ToastIconWrapper,
  ToastMessageStyled,
  ToastMessageWrapper,
} from './Toast.style';

interface ToastProps extends Pick<ToastInterface, 'message' | 'toastType'> {
  onClose?: () => void;
  toastTimeDuration?: number;
}

const Toast = ({
  message,
  toastType,
  onClose,
  toastTimeDuration = TOAST_TIME_DURATION,
}: ToastProps) => {
  const [isShow, setIsShow] = useState(true);

  useEffect(() => {
    if (!isShow) {
      onClose?.();
    }

    setTimeout(() => {
      setIsShow(false);
    }, toastTimeDuration);
  }, [isShow, onClose]); // eslint-disable-line react-hooks/exhaustive-deps

  const toastColor = TOAST_COLOR[toastType];

  return (
    isShow && (
      <ToastContainer color={toastColor}>
        <CloseButtonWrapper>
          <AiOutlineClose onClick={() => setIsShow(false)} size={10} color={toastColor} />
        </CloseButtonWrapper>
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
    )
  );
};

export default Toast;
