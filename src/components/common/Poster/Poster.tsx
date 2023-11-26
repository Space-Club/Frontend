import { BsFillFileImageFill } from 'react-icons/bs';

import { PosterAreaStyled, PosterStyled, TagStyled } from './Poster.style';

interface PosterProps {
  posterSrc?: string;
  width?: number;
  isEnded?: boolean;
  children?: React.ReactNode;
}

const Poster = ({ posterSrc, width = 12, isEnded, children }: PosterProps) => {
  return (
    <PosterAreaStyled width={width} isEnded={isEnded}>
      <PosterStyled src={posterSrc} alt="poster image" />
      {!posterSrc && <BsFillFileImageFill size={3.5} />}
      <TagStyled>{children}</TagStyled>
    </PosterAreaStyled>
  );
};

export default Poster;
