import { useEffect, useRef, useState } from 'react';

interface UseIsIntersectionProps {
  root?: HTMLElement;
  rootMargin?: string;
  threshold?: number | number[];
}

const useIsIntersection = ({ root, rootMargin, threshold }: UseIsIntersectionProps) => {
  const [isIntersection, setIsIntersection] = useState(false);
  const targetRef = useRef(null);

  const callback = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setIsIntersection(true);
      } else {
        setIsIntersection(false);
      }
    });
  };

  const observer = new IntersectionObserver(callback, {
    root,
    rootMargin,
    threshold,
  });

  useEffect(() => {
    const targetElement = targetRef.current;
    targetElement && observer.observe(targetElement);
    return () => {
      targetElement && observer.unobserve(targetElement);
    };
  }, [targetRef]); //eslint-disable-line

  return { isIntersection, targetRef };
};

export default useIsIntersection;
