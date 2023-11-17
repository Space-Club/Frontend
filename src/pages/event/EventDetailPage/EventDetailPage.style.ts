import { SemiPurpleButton } from '@/components/SemiPurpleButton/SemiPurpleButton.style';
import Theme from '@/styles/Theme';
import styled from '@emotion/styled';

const EventDetailPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
const ContentWrapper = styled.div`
  width: 100%;
  max-width: 65rem;
  margin: 1rem auto;
`;
const FormButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
`;
const PurpleButton = styled.button<{ reverse?: boolean }>`
  outline: none;
  background-color: ${({ reverse }) => (reverse ? 'white' : `${Theme.color.tButton}`)};
  color: ${({ reverse }) => (reverse ? `${Theme.color.tButton}` : 'white')};
  border: 1px solid ${Theme.color.tButton};
  border-radius: 0.25rem;
  padding: 0.5rem 1rem;
  box-sizing: border-box;
  cursor: pointer;
`;
const UpdateDeleteWrapper = styled.div`
  display: flex;
  gap: 0.25rem;
`;
const EventDetailWrapper = styled.div`
  display: flex;
  width: 100%;
`;
const DetailContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-grow: 1;
  margin-left: 3rem;
`;
const EventTitle = styled.div`
  font-size: ${Theme.fontSize.largeTitle};
`;
const TwoContentWrapper = styled.div`
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(2, 1fr);
  gap: 3rem;
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

const ApplicantButton = styled(SemiPurpleButton)<{ capacity: boolean }>`
  display: ${({ capacity }) => (capacity ? 'block' : 'none')};
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  padding: 0 1rem;

  &:hover {
    cursor: revert;
  }
`;
const ApplyButton = styled(SemiPurpleButton)<{ capacity: boolean }>`
  width: 30%;
  border-top-left-radius: ${({ capacity }) => capacity && '0'};
  border-bottom-left-radius: ${({ capacity }) => capacity && '0'};
  font-size: ${Theme.fontSize.mediumContent};
`;
const BookmarkButton = styled(SemiPurpleButton)`
  margin-left: 0.5rem;
  padding: 0 1.5rem;
`;

const EventContentWrapper = styled.div`
  width: 100%;
  margin-top: 2rem;
`;
const EventContentTitle = styled.div`
  font-size: ${Theme.fontSize.largeTitle};
  margin-bottom: 0.5rem;
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
};
