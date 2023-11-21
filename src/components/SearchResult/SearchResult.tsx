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
  eventStartDate?: string;
  formEndDate?: string;
  clubName: string;
}

const SearchResult = ({
  eventId,
  eventTitle,
  posterImageUrl,
  location,
  eventStartDate,
  formEndDate,
  clubName,
}: SearchResultProps) => {
  const navigate = useNavigate();

  return (
    <SearchResultContainer onClick={() => navigate(PATH.EVENT.DETAIL(eventId))}>
      <IconWrapper>
        <RiFileSearchFill size={20} />
      </IconWrapper>
      <Poster width={3} posterSrc={posterImageUrl} />
      <InfoWrapper>
        <TitleStyled>{eventTitle}</TitleStyled>
        <InfoStyled>{eventStartDate ?? (formEndDate ? `~${formEndDate}` : '')}</InfoStyled>
        <InfoStyled>{location}</InfoStyled>
        <InfoStyled>{clubName}</InfoStyled>
      </InfoWrapper>
    </SearchResultContainer>
  );
};

export default SearchResult;
