import Theme from '@/styles/Theme';
import styled from '@emotion/styled';

const SelectStyled = styled.select<{ backgroundColor: keyof typeof Theme.color }>`
  height: 1.25rem;
  border-radius: 0.3rem;
  position: relative;

  &,
  & option {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.625rem;
    font-weight: 500;
    padding: 0 0.2rem;
    border: none;
    background-color: ${(props) => Theme.color[props.backgroundColor]};
  }
`;

const OptionStyled = styled.option<{ fontColor: keyof typeof Theme.color }>`
  border-radius: none;
  color: ${(props) => Theme.color[props.fontColor]};
`;

export { SelectStyled, OptionStyled };
