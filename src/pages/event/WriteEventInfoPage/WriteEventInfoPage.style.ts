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

  & > div:first-of-type {
    @media (min-width: 1023px) {
      padding-right: 1.5rem;
      border-right: 1px solid ${Theme.color.tSeparator};
    }
  }

  & > div:nth-last-of-type(2) {
    @media (min-width: 1023px) {
      padding-left: 1.5rem;
    }
  }
  & > div:first-child > div:nth-last-of-type(2) {
    flex-grow: 1;
  }
`;
const ContentArea = styled.div`
  min-width: 50%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  & > div:last-of-type {
    @media (max-width: 1023px) {
      padding-bottom: 1.5rem;
      margin-bottom: 2rem;
    }
  }
`;
const TwoInputContainer = styled.div`
  display: flex;
  gap: 0.5rem;

  &:last-of-type {
    padding-top: 1rem;
    border-top: 1px solid ${Theme.color.tSeparator};

    @media (max-width: 1023px) {
      border-bottom: 1px solid ${Theme.color.tSeparator};
    }
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
