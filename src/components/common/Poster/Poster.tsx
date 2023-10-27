import { PosterAreaStyled, PosterStyled } from './Poster.style';

interface PosterProps {
  posterSrc: string;
  width?: number;
}

const Poster = ({ posterSrc, width = 12 }: PosterProps) => {
  return (
    <PosterAreaStyled width={width}>
      <PosterStyled src={posterSrc} alt="poster image" />
    </PosterAreaStyled>
  );
};

export default Poster;
