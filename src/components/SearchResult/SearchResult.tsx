import { PATH } from '@/constants/path';

import { RiFileSearchFill } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';

import Poster from '../common/Poster/Poster';
import {
  IconWrapper,
  InfoStyled,
  InfoWrapper,
  SearchResultContainer,
  TitleStyled,
} from './SearchResult.style';

interface SearchResultProps {
  eventId: string;
  eventTitle: string;
  posterImageUrl: string;
  location?: string;
  startDate?: string;
  endDate?: string;
  clubName: string;
  isEnded: boolean;
}

const SearchResult = ({
  eventId,
  eventTitle,
  posterImageUrl,
  location,
  startDate,
  endDate,
  clubName,
  isEnded,
}: SearchResultProps) => {
  const navigate = useNavigate();

  return (
    <SearchResultContainer onClick={() => navigate(PATH.EVENT.DETAIL(eventId))}>
      <IconWrapper>
        <RiFileSearchFill size={20} />
      </IconWrapper>
      <Poster width={3} posterSrc={posterImageUrl} isEnded={isEnded} />
      <InfoWrapper>
        <TitleStyled>{eventTitle}</TitleStyled>
        <InfoStyled>{startDate ?? (endDate ? `~${endDate}` : '')}</InfoStyled>
        <InfoStyled>{location}</InfoStyled>
        <InfoStyled>{clubName}</InfoStyled>
      </InfoWrapper>
    </SearchResultContainer>
  );
};

export default SearchResult;
