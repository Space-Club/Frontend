import { useEffect, useState } from 'react';

import useIsIntersection from './useIsIntersecting';

interface UseLazyImageProps {
  isLazy?: boolean;
  loadingImgSrc?: string;
  completeImgSrc: string;
}

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
