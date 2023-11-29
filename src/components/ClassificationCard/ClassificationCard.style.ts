import Theme from '@/styles/Theme';
import styled from '@emotion/styled';

const CardContainer = styled.div<{ backColor: string }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 95%;
  height: 19rem;
  background-color: ${({ backColor }) => backColor};
  border-radius: 1rem;
  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.05);
  }
`;
const Wrapper = styled.div<{ img: string }>`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2rem;
  background-image: url(${({ img }) => img});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: 90% 90%;
  background-size: 8rem;
`;
const Title = styled.div`
  font-size: 3.5rem;
  color: white;
  font-family: 'MainBold';
`;
const Content = styled.div`
  font-size: 1rem;
  color: white;
`;
const Example = styled.div`
  color: ${Theme.color.gray};
`;

export { CardContainer, Wrapper, Title, Content, Example };
