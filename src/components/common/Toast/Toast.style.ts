import Theme from '@/styles/Theme';
import styled from '@emotion/styled';

const ToastContainer = styled.div<{ color: string }>`
  right: 1.5rem;
  top: 1.5rem;
  width: 16rem;
  display: flex;
  align-items: center;
  padding: 1rem 1rem;
  border-radius: 1.1875rem;
  border: 1px solid ${({ color }) => color};
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

export { ToastContainer, ToastIconWrapper, ToastMessageWrapper, ToastMessageStyled };
