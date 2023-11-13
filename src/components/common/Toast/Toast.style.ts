import Theme from '@/styles/Theme';
import styled from '@emotion/styled';

const ToastContainer = styled.div<{ color: string; isShow: boolean; animationTime: number }>`
  width: fit-content;
  position: relative;
  max-width: 20rem;
  display: flex;
  align-items: center;
  padding: 1rem 0.3rem 1rem 1rem;
  border: 1px solid ${({ color }) => color};
  border-radius: 1.1875rem;
  background-color: ${Theme.color.white};
  animation: ${({ isShow }) => (isShow ? Theme.keyframe.fadeIn : Theme.keyframe.fadeOut)} 0.2s
    ease-in-out;
  opacity: ${({ isShow }) => (isShow ? 1 : 0)};
  user-select: none;
  filter: ${Theme.shadow.all};
`;

const ToastIconWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const ToastMessageWrapper = styled.div`
  margin-left: 0.81rem;
`;

const ToastMessageStyled = styled.h1`
  font-style: normal;
  font-weight: 400;
  font-size: ${Theme.fontSize.mediumContent};
`;

const CloseButtonWrapper = styled.div`
  cursor: pointer;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.2s ease-in-out;
`;

export {
  ToastContainer,
  ToastIconWrapper,
  ToastMessageWrapper,
  ToastMessageStyled,
  CloseButtonWrapper,
};
