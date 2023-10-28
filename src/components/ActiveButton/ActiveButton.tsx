import Theme from '@/styles/Theme';
import styled from '@emotion/styled';

//#TODO : font-size 변경하기
interface ActiveButtonProps {
  buttonText: string;
  fontSize: 'largeTitle' | 'mediumTitle' | 'smallTitle' | 'smallContent';
}

function getFontSize(fontSize: ActiveButtonProps['fontSize']) {
  return Theme.fontSize[fontSize];
}

const ButtonStyled = styled.button<{ fontSize: ActiveButtonProps['fontSize'] }>`
  padding: 0.8rem 1rem;
  border: 0;
  border-radius: 0.5rem;
  background-color: ${Theme.color.tSemiActive};
  color: white;
  font-size: ${(props) => getFontSize(props.fontSize)};
`;

const ActiveButton = ({ buttonText, fontSize }: ActiveButtonProps) => {
  return <ButtonStyled fontSize={fontSize}>{buttonText}</ButtonStyled>;
};

export default ActiveButton;
