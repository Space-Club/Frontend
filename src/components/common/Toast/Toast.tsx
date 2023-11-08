import { TOAST_ANIMATION_TIME, TOAST_COLOR, TOAST_TIME_DURATION } from '@/constants/toast';
import { Toast as ToastInterface } from '@/types/toast';

import { useEffect, useLayoutEffect, useState } from 'react';
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
  const [isUnmount, setIsUnmount] = useState(false);

  useLayoutEffect(() => {
    if (isUnmount) {
      onClose?.();
    }

    setTimeout(() => {
      setIsShow(false);
    }, toastTimeDuration);
  }, [isShow, onClose, isUnmount]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (!isShow) {
      setTimeout(() => {
        setIsUnmount(true);
      }, TOAST_ANIMATION_TIME);
    }
  }, [isShow]);

  const toastColor = TOAST_COLOR[toastType];

  return (
    !isUnmount && (
      <ToastContainer color={toastColor} animationTime={TOAST_ANIMATION_TIME} isShow={isShow}>
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
        <CloseButtonWrapper onClick={() => setIsShow(false)}>
          <AiOutlineClose size={10} color={toastColor} />
        </CloseButtonWrapper>
      </ToastContainer>
    )
  );
};

export default Toast;
