import { PosterAreaStyled, PosterStyled } from './Poster.style';

interface PosterProps {
  posterSrc: string;
}

const Poster = ({ posterSrc }: PosterProps) => {
  return (
    <PosterAreaStyled>
      <PosterStyled src={posterSrc} alt="poster image" />
    </PosterAreaStyled>
  );
};

export default Poster;
