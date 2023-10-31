import Theme from '@/styles/Theme';
import styled from '@emotion/styled';

const RegisterContainer = styled.form`
  width: 30rem;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  gap: 1rem;
`;
const Title = styled.div`
  font-family: 'MainBold';
  font-size: 2rem;
  margin: 3rem 0;
`;
const SubmitButton = styled.button`
  width: 100%;
  margin-top: 3rem;
  padding: 0.5rem 0;
  border: none;
  font-size: ${Theme.fontSize.smallTitle};
  background-color: ${Theme.color.tSemiActive};
  border-radius: 0.25rem;
  color: white;
  font-family: 'MainThin';
  cursor: pointer;
`;
const ErrorMessage = styled.div`
  font-size: 0.7rem;
  color: red;
  align-self: flex-start;
`;

export { RegisterContainer, Title, SubmitButton, ErrorMessage };
