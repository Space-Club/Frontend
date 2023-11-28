import styled from '@emotion/styled';

import Theme from './Theme';

const EventTitleStyled = styled.div`
  margin-bottom: 3%;
  font-family: 'MainBold';
  font-size: 1.5rem;
  text-overflow: ellipsis;
  overflow: hidden;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  display: -webkit-box;
`;

const EventDateStyled = styled.div`
  font-size: 1rem;
`;

const ClubNameStyled = styled.div`
  font-family: 'MainRegular';
  font-size: 0.8rem;
`;

const PlaceStyled = styled.div`
  width: 100%;
  color: grey;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  font-size: 1rem;
`;

const ellipsisText = styled.p`
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

const ellipsisMultiLineText = styled.p`
  text-overflow: ellipsis;
  overflow: hidden;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  display: -webkit-box;
`;

const ellipsisTitle = styled.h1`
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

const twoLineTitle = styled.h1`
  text-overflow: ellipsis;
  overflow: hidden;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  display: -webkit-box;
`;

const whiteGreyBox = styled.div`
  background-color: ${Theme.color.tWhiteGrey};
  border-radius: 1.3125rem;
`;

const InvisibleInput = styled.input`
  display: none;
`;

const MediumTitleStyled = styled.h2`
  font-size: ${Theme.fontSize.mediumTitle};
  font-weight: 700;
`;

const SmallTitleStyled = styled.h3`
  font-size: ${Theme.fontSize.smallTitle};
  font-weight: 700;
`;

const TabWrapper = styled.div`
  display: flex;
  justify-content: end;
  width: 100%;
`;

const EventsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 1rem;
  justify-items: center;
  align-items: center;
  max-width: 75rem;

  @media (max-width: 71rem) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 50rem) {
    grid-template-columns: 1fr;
  }
`;

const CommonEmptyEventsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  color: ${Theme.color.gray};
`;

const sideBarScrollAreaStyled = styled.div`
  &::-webkit-scrollbar {
    width: 0.3rem;
  }
  &::-webkit-scrollbar-thumb {
    background: ${Theme.color.sideScrollBarThumb};
    border-radius: 0.75rem;
    box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.25);
  }
  &::-webkit-scrollbar-track {
    border-radius: 0.75rem;
    background: ${Theme.color.sideScrollBarTrack};
    box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.25);
  }
`;
const memberManagerScrollAreaStyled = styled.div`
  &::-webkit-scrollbar {
    width: 0.5rem;
  }
  &::-webkit-scrollbar-thumb {
    background: ${Theme.color.tSemiPurple};
    border: 1px solid ${Theme.color.tPurple};
    border-radius: 0.75rem;
  }
  &::-webkit-scrollbar-track {
    display: none;
  }
`;

const textAreaScrollBar = styled.textarea`
  &::-webkit-scrollbar {
    width: 0.5rem;
  }
  &::-webkit-scrollbar-thumb {
    background: ${Theme.color.tSemiPurple};
    border: 1px solid ${Theme.color.tPurple};
    border-radius: 0.75rem;
  }
  &::-webkit-scrollbar-track {
    display: none;
  }
`;

const hoverBox = styled.div`
  &:hover::after {
    content: attr(data-name);
    white-space: nowrap;
    position: absolute;
    top: 100%;
    left: 50%;
    padding: 0.1rem;
    transform: translateX(-50%) translateY(-50%);
    background: ${Theme.color.shadow};
    color: ${Theme.color.tWhiteGrey};
    border-radius: 0.25rem;
    font-size: ${Theme.fontSize.tagText};
    opacity: 1;
    transition: opacity 0.2s ease-in-out;
  }
`;

export {
  EventTitleStyled,
  EventDateStyled,
  ClubNameStyled,
  PlaceStyled,
  ellipsisText,
  ellipsisTitle,
  sideBarScrollAreaStyled,
  twoLineTitle,
  memberManagerScrollAreaStyled,
  whiteGreyBox,
  ellipsisMultiLineText,
  textAreaScrollBar,
  InvisibleInput,
  MediumTitleStyled,
  TabWrapper,
  SmallTitleStyled,
  hoverBox,
  EventsWrapper,
  CommonEmptyEventsWrapper,
};
