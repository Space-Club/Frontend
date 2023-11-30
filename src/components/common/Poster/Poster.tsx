import { BsFillFileImageFill } from 'react-icons/bs';

import { PosterAreaStyled, PosterStyled, TagStyled } from './Poster.style';

interface PosterProps {
  posterSrc?: string | null;
  width?: number;
  isEnded?: boolean;
  children?: React.ReactNode;
}

const Poster = ({ posterSrc, width = 12, isEnded, children }: PosterProps) => {
  return (
    <PosterAreaStyled width={width} isEnded={isEnded}>
      {posterSrc ? (
        <PosterStyled src={posterSrc} alt="poster image" />
      ) : (
        <BsFillFileImageFill size={100} />
      )}
      <TagStyled>{children}</TagStyled>
    </PosterAreaStyled>
  );
};

export default Poster;
