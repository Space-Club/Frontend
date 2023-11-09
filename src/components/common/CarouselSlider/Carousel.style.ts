import Theme from '@/styles/Theme';
import styled from '@emotion/styled';

const CarouselContainer = styled.section<{ itemWidth: number }>`
  display: flex;
  width: ${({ itemWidth }) => itemWidth}rem;
  height: 100%;
  position: relative;
  overflow: hidden;

  & button {
    opacity: 0;
    transition: opacity 0.15s ease-in-out;
  }

  &:hover {
    & button {
      opacity: 1;
    }
  }
`;

const CarouselRefWrapper = styled.div`
  display: flex;
  height: 100%;
`;

const CarouselNextButton = styled.button`
  position: absolute;
  z-index: 50;
  top: 50%;
  right: 1%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0.15);
  & polyline {
    stroke: ${Theme.color.white};
  }
`;

const CarouselPrevButton = styled.button`
  position: absolute;
  z-index: 50;
  top: 50%;
  left: 1%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0.15);

  & polyline {
    stroke: ${Theme.color.white};
  }
`;

const CarouselCounterWrapper = styled.div`
  position: absolute;
  bottom: 0.5rem;
  right: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${Theme.color.white};
  font-size: ${Theme.fontSize.tagText};
  font-weight: 400;
  border-radius: 1rem;
  cursor: pointer;
  user-select: none;
  background-color: rgba(0, 0, 0, 0.15);
  padding: 0.5rem 1rem;
`;

export {
  CarouselContainer,
  CarouselRefWrapper,
  CarouselNextButton,
  CarouselPrevButton,
  CarouselCounterWrapper,
};
