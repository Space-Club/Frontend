import useCarousel from '@/hooks/useCarousel';

import { GrFormNext, GrFormPrevious } from 'react-icons/gr';

import {
  CarouselContainer,
  CarouselCounterWrapper,
  CarouselNextButton,
  CarouselPrevButton,
  CarouselRefWrapper,
} from './Carousel.style';

interface CarouselProps {
  totalItem: number;
  children: React.ReactNode;
}

const Carousel = ({ totalItem, children }: CarouselProps) => {
  const { goNext, goPrev, carouselRef, currentIndex } = useCarousel({ totalItem });

  return (
    <CarouselContainer>
      <CarouselNextButton onClick={goNext}>
        <GrFormNext size={30} />
      </CarouselNextButton>
      <CarouselPrevButton onClick={goPrev}>
        <GrFormPrevious size={30} />
      </CarouselPrevButton>
      <CarouselCounterWrapper>
        {currentIndex + 1} / {totalItem}
      </CarouselCounterWrapper>
      <CarouselRefWrapper ref={carouselRef}>{children}</CarouselRefWrapper>
    </CarouselContainer>
  );
};

export default Carousel;
