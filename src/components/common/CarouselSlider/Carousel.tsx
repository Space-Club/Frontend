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
  autoSlide?: boolean;
}

const Carousel = ({ totalItem, autoSlide, children }: CarouselProps) => {
  const { goNext, goPrev, carouselRef, currentIndex } = useCarousel({ totalItem, autoSlide });

  return (
    <CarouselContainer>
      {totalItem !== 0 && (
        <>
          <CarouselNextButton onClick={goNext}>
            <GrFormNext size={30} />
          </CarouselNextButton>
          <CarouselPrevButton onClick={goPrev}>
            <GrFormPrevious size={30} />
          </CarouselPrevButton>
          <CarouselCounterWrapper>
            {currentIndex + 1} / {totalItem}
          </CarouselCounterWrapper>
        </>
      )}
      <CarouselRefWrapper ref={carouselRef}>{children}</CarouselRefWrapper>
    </CarouselContainer>
  );
};

export default Carousel;
