import { PosterAreaStyled, PosterStyled, TagStyled } from './Poster.style';

interface PosterProps {
  posterSrc: string;
  width?: number;
  children?: React.ReactNode;
}

const Poster = ({ posterSrc, width = 12, children }: PosterProps) => {
  return (
    <PosterAreaStyled width={width}>
      <PosterStyled src={posterSrc} alt="poster image" />
      <TagStyled>{children}</TagStyled>
    </PosterAreaStyled>
  );
};

export default Poster;
