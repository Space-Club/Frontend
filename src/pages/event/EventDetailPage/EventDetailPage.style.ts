import { SemiPurpleButton } from '@/components/SemiPurpleButton/SemiPurpleButton.style';
import Theme from '@/styles/Theme';
import styled from '@emotion/styled';

const EventDetailPageContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const ContentWrapper = styled.div`
  width: 100%;
  max-width: 65rem;
  margin: 1rem auto;
`;
const FormButtonWrapper = styled.div<{ hasForm: boolean }>`
  display: flex;
  justify-content: ${({ hasForm }) => (hasForm ? 'space-between' : 'flex-end')};
  margin-bottom: 1rem;
`;
const PurpleButton = styled.button<{ reverse?: boolean }>`
  outline: none;
  min-width: max-content;
  background-color: ${({ reverse }) => (reverse ? 'white' : `${Theme.color.tButton}`)};
  color: ${({ reverse }) => (reverse ? `${Theme.color.tButton}` : 'white')};
  border: 1px solid ${Theme.color.tButton};
  border-radius: 0.25rem;
  padding: 0.5rem 1rem;
  box-sizing: border-box;
  cursor: pointer;
`;
const UpdateDeleteWrapper = styled.div`
  align-self: flex-end;
  display: flex;
  gap: 0.25rem;
`;
const EventDetailWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;

  @media (max-width: 1023px) {
    justify-content: center;
  }
`;
const DetailContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 38rem;
  flex-grow: 1;
  margin-left: 3rem;
`;
const EventTitle = styled.div`
  font-size: ${Theme.fontSize.largeTitle};
`;
const TwoContentWrapper = styled.div<{ itemLength: number }>`
  display: ${({ itemLength }) => (itemLength === 0 ? 'none' : 'grid')};
  grid-template-rows: ${({ itemLength }) => (itemLength > 2 ? 'repeat(2, 1fr)' : 'repeat(1, 1fr)')};
  grid-template-columns: repeat(2, 1fr);
  gap: 3rem;

  @media (max-width: 1023px) {
    gap: 0;
  }
`;
const ContentLabel = styled.div`
  font-size: ${Theme.fontSize.mediumTitle};
  margin-right: 0.5rem;
`;
const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  height: 4rem;
`;

const ApplicantButton = styled(SemiPurpleButton)<{ capacity: boolean; isDisabled: boolean }>`
  display: ${({ capacity }) => (capacity ? 'block' : 'none')};
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  padding: 0 1rem;
  cursor: revert;

  color: ${({ isDisabled }) => isDisabled && Theme.color.idkGrey};
  border-color: ${({ isDisabled }) => isDisabled && Theme.color.idkGrey};
`;
const ApplyButton = styled(SemiPurpleButton)<{ capacity: boolean }>`
  width: 30%;
  min-width: 10rem;
  padding: 0;
  border-top-left-radius: ${({ capacity }) => capacity && '0'};
  border-bottom-left-radius: ${({ capacity }) => capacity && '0'};
  font-size: ${Theme.fontSize.mediumContent};

  &:disabled {
    background-color: ${Theme.color.idkGrey};
    border-color: transparent;
    cursor: not-allowed;
  }
`;
const BookmarkButton = styled(SemiPurpleButton)`
  margin-left: 0.5rem;
  padding: 0 1.5rem;

  &:disabled {
    cursor: not-allowed;
  }
`;

const EventContentWrapper = styled.div`
  width: 100%;
  margin-top: 2rem;
`;
const EventContentTitle = styled.div`
  border-top: 1px solid ${Theme.color.tSeparator};
  font-size: ${Theme.fontSize.largeTitle};
  padding: 1rem 0;
`;
const EventContent = styled.textarea`
  width: 100%;
  border: none;
  outline: none;
`;

export {
  ContentWrapper,
  EventDetailPageContainer,
  FormButtonWrapper,
  PurpleButton,
  UpdateDeleteWrapper,
  EventDetailWrapper,
  DetailContentWrapper,
  EventTitle,
  TwoContentWrapper,
  ContentLabel,
  ButtonWrapper,
  ApplicantButton,
  ApplyButton,
  BookmarkButton,
  EventContentWrapper,
  EventContentTitle,
  EventContent,
};
