import InputForm from '@/components/common/InputForm/InputForm';
import Theme from '@/styles/Theme';
import styled from '@emotion/styled';

const EventFormContainer = styled.form`
  display: flex;
  position: relative;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
  padding: 3rem 0;
  gap: 3rem;

  & > div:first-child > div:nth-last-of-type(2) {
    flex-grow: 1;
  }
`;
const ContentArea = styled.div`
  flex: 1;
  display: flex;
  position: relative;
  flex-direction: column;
  gap: 1rem;

  &:first-of-type::after {
    @media (min-width: 896px) {
      content: '';
      position: absolute;
      right: -1.5rem;
      height: 100%;
      border-right: 1px solid ${Theme.color.tSeparator};
    }
  }
  &:nth-of-type(2)::after {
    @media (max-width: 896px) {
      content: '';
      position: absolute;
      top: -1.5rem;
      width: 100%;
      border-top: 1px solid ${Theme.color.tSeparator};
    }
  }
`;
const TwoInputContainer = styled.div`
  display: flex;
  gap: 0.5rem;

  &:last-of-type {
    padding-top: 1rem;
    border-top: 1px solid ${Theme.color.tSeparator};
  }
`;
const HalfInputForm = styled(InputForm)`
  width: 50%;
`;
const ErrorMessage = styled.p`
  font-size: 0.7rem;
  color: red;
`;

export { EventFormContainer, ContentArea, TwoInputContainer, HalfInputForm, ErrorMessage };
