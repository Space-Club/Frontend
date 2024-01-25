import { useEffect, useState } from 'react';

import useIsIntersection from './useIsIntersecting';

interface UseLazyImageProps {
  isLazy?: boolean;
  loadingImgSrc?: string;
  completeImgSrc: string;
}

// useLazyImage는 이미지의 가시성을 검사하여 상황에 따라 적절한 이미지 src를 반환합니다.
// @params {boolean} isLazy: true면 lazyLoad합니다. false면 일반 이미지 로딩
// @params {string} loadingImgSrc: lazyLoad시 보여줄 로딩 이미지.
// @params {string} completeImgSrc: lazyLoad시 로딩이 완료되면 보여줄 이미지.
// @returns {string} imageSrc: 로딩 상태에 completeImgSrc, loadingImgSrc 중 하나를 할당합니다.
// @returns {RefObject} targetRef: lazyLoad시 보여줄 이미지의 ref

const useLazyImage = ({ loadingImgSrc, completeImgSrc, isLazy }: UseLazyImageProps) => {
  const [imageSrc, setImageSrc] = useState<string>(loadingImgSrc ?? '');
  const { isIntersection, targetRef } = useIsIntersection({});

  useEffect(() => {
    if (isIntersection) {
      setImageSrc(completeImgSrc);
    }
  }, [isIntersection]); //eslint-disable-line

  if (!isLazy) return { imageSrc: completeImgSrc, targetRef };

  return { imageSrc, targetRef };
};

export default useLazyImage;
