import Theme from '@/styles/Theme';
import styled from '@emotion/styled';

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
`;
const UpdateDeleteWrapper = styled.div`
  display: flex;
  gap: 0.25rem;
`;
const EventDetailWrapper = styled.div`
  display: flex;
  width: 100%;
`;
const PosterImage = styled.img`
  width: 23rem;
  height: 31rem;
  background-color: lightgray;
`;
const DetailContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-grow: 1;
  margin-left: 3rem;
`;
const EventTitle = styled.div`
  font-size: 2rem;
`;
const TwoContentWrapper = styled.div`
  display: flex;
  gap: 10rem;
`;
const ContentLabel = styled.div`
  font-size: 1.5rem;
`;
const ButtonWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
  justify-content: flex-end;
`;
const SemiPurpleButton = styled.button<{ reverse?: boolean }>`
  outline: none;
  background-color: ${({ reverse }) => (reverse ? 'white' : `${Theme.color.tSemiActive}`)};
  color: ${({ reverse }) => (reverse ? `${Theme.color.tSemiActive}` : 'white')};
  border: 1px solid ${Theme.color.tSemiActive};
  border-radius: 0.25rem;
  padding: 0.5rem 2rem;
  box-sizing: border-box;
`;

export {
  FormButtonWrapper,
  PurpleButton,
  UpdateDeleteWrapper,
  EventDetailWrapper,
  PosterImage,
  DetailContentWrapper,
  EventTitle,
  TwoContentWrapper,
  ContentLabel,
  ButtonWrapper,
  SemiPurpleButton,
};
