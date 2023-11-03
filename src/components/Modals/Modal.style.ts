import Theme from '@/styles/Theme';
import styled from '@emotion/styled';

const ModalBaseContainer = styled.div`
  display: flex;
  justify-content: center;
  min-width: 10rem;
  padding: 3rem 6rem;
  border-radius: 2rem;
  background-color: ${Theme.color.tWhiteGrey};
  overflow: hidden;
`;

const ModalContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
`;

const MessageStyled = styled.p`
  font-size: ${Theme.fontSize.smallTitle};
  text-align: center;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-around;
`;

export { ModalBaseContainer, ModalContentWrapper, MessageStyled, ButtonWrapper };
