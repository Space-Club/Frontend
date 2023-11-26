import { useCallback, useEffect, useRef, useState } from 'react';

interface UseCarouselProps {
  totalItem: number;
  autoSlide?: boolean;
}

const SLIDE_DURATION = 300;

const useCarousel = ({ totalItem, autoSlide = false }: UseCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const carouselRef = useRef<HTMLDivElement>(null);

  const itemWidth = carouselRef.current?.clientWidth ?? 0;

  const slide = useCallback(
    (index: number) => {
      if (carouselRef.current) {
        carouselRef.current.style.transform = `translateX(-${index * itemWidth}px)`;
        carouselRef.current.style.transition = `all ${SLIDE_DURATION}ms ease-in-out`;
      }
    },
    [itemWidth],
  );
  const goNext = useCallback(() => {
    if (currentIndex < totalItem - 1) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  }, [currentIndex, totalItem]);

  const goPrev = useCallback(() => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  }, [currentIndex]);

  useEffect(() => {
    if (autoSlide) {
      const interval = setInterval(() => {
        if (currentIndex < totalItem - 1) {
          setCurrentIndex((prevIndex) => prevIndex + 1);
        } else {
          setCurrentIndex(0);
        }
      }, 5000);
      return () => clearInterval(interval);
    }
    return () => {};
  }, [autoSlide, currentIndex, totalItem]);

  useEffect(() => {
    slide(currentIndex);
  }, [currentIndex, slide]);

  return {
    goNext,
    goPrev,
    carouselRef,
    currentIndex,
  };
};

export default useCarousel;
