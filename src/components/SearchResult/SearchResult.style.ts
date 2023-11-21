import Theme from '@/styles/Theme';
import styled from '@emotion/styled';

const SearchResultContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 0.5rem;
  padding: 1rem;

  :hover {
    background-color: ${Theme.color.tWhiteGrey};
    cursor: pointer;
  }
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  color: ${Theme.color.idkGrey};
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const TitleStyled = styled.span`
  color: black;
  font-size: ${Theme.fontSize.smallContent};
`;

const InfoStyled = styled.span`
  color: ${Theme.color.semiBlack};
  font-size: ${Theme.fontSize.tagText};
`;

export { SearchResultContainer, IconWrapper, InfoWrapper, TitleStyled, InfoStyled };
