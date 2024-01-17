import { useEffect, useRef, useState } from 'react';

// useIsIntersection은 타겟 엘리먼트의 가시성을 검사합니다.
// @params {HTMLElement} root: 옵션, 타겟의 가시성을 검사하기 위해 뷰포트 대신 사용할 요소 객체, 기본값은 뷰포트입니다.
// @params {string} rootMargin: Root 범위를 확장하거나 축소하기 위한 마진 값, 기본값은 '0px 0px 0px 0px'입니다.
// @params {number} threshold: 옵저버 콜백이 실행되는 타겟 엘리먼트의 가시성 비율, 기본값은 0입니다.
// @returns {boolean} isIntersection: 타겟 엘리먼트가 뷰포트에 들어오면 true를 반환합니다.
// @returns {RefObject} targetRef: 타겟 엘리먼트의 ref

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
