import Theme from '@/styles/Theme';
import styled from '@emotion/styled';

export const Container = styled.div`
  width: 30rem;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  gap: 4rem;
`;
export const Title = styled.div`
  font-family: 'MainBold';
  font-size: 2rem;
`;
export const SubmitBtn = styled.button`
  width: 100%;
  padding: 0.5rem 0;
  border: none;
  font-size: 20px;
  background-color: ${Theme.color.indigo};
  color: white;
  font-family: 'MainThin';
  cursor: pointer;
`;
