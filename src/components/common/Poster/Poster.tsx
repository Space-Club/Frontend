import useLazyImage from '@/hooks/useLazyImage';

import { BsFillFileImageFill } from 'react-icons/bs';

import { PosterAreaStyled, PosterStyled, TagStyled } from './Poster.style';

interface PosterProps {
  posterSrc?: string;
  width?: number;
  isEnded?: boolean;
  isLazy?: boolean;
  children?: React.ReactNode;
}

const Poster = ({ posterSrc, width = 12, isEnded, isLazy = false, children }: PosterProps) => {
  const { imageSrc, targetRef } = useLazyImage({
    isLazy,
    completeImgSrc: posterSrc || '',
  });

  return (
    <PosterAreaStyled width={width} isEnded={isEnded}>
      <PosterStyled ref={targetRef} src={imageSrc} alt="poster image" />
      <BsFillFileImageFill size={100} />
      <TagStyled>{children}</TagStyled>
    </PosterAreaStyled>
  );
};

export default Poster;
