import Theme from '@/styles/Theme';
import styled from '@emotion/styled';

const BackgroundOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 50;
  background-color: rgba(0, 0, 0, 0.4);
`;

const ModalBaseContainer = styled.div`
  display: flex;
  justify-content: center;
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 50;
  min-width: 10rem;
  padding: 3rem 6rem;
  border-radius: 2rem;
  background-color: ${Theme.color.tWhiteGrey};
  transform: translate(-38%, -50%);
  overflow: hidden;
`;

const ModalContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;
`;

const MessageStyled = styled.p`
  font-size: ${Theme.fontSize.smallTitle};
  text-align: center;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-around;
`;

export { BackgroundOverlay, ModalBaseContainer, ModalContentWrapper, MessageStyled, ButtonWrapper };
