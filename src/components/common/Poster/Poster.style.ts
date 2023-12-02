import Theme from '@/styles/Theme';
import styled from '@emotion/styled';

const PosterAreaStyled = styled.div<{ width: number; isEnded?: boolean }>`
  position: relative;
  width: ${({ width }) => width + 'rem'};
  min-width: ${({ width }) => width + 'rem'};
  height: ${({ width }) => width * 1.4 + 'rem'};
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${Theme.color.tSemiPurple};
  background-color: ${Theme.color.tWhiteGrey};
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(46, 46, 46, 0.7);
    display: ${({ isEnded }) => (isEnded ? 'block' : 'none')};
  }

  &::after {
    content: '${({ isEnded }) => (isEnded ? '지난 행사' : '')}';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    font-size: ${Theme.fontSize.tagText};
    text-align: center;
    display: ${({ isEnded }) => (isEnded ? 'block' : 'none')};
    white-space: nowrap;
  }
`;

const PosterStyled = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.1s ease-in-out;
  &:hover {
    transform: scale(1.05);
  }
`;

const TagStyled = styled.div`
  position: absolute;
  top: 0.5rem;
  left: 0.5rem;
`;

export { PosterAreaStyled, PosterStyled, TagStyled };
