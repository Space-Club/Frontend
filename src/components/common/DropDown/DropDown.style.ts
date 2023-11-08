import Theme from '@/styles/Theme';
import styled from '@emotion/styled';

const SelectStyled = styled.select<{ backgroundColor: keyof typeof Theme.color }>`
  border-radius: 0.3rem;

  &,
  & option {
    height: 1.25rem;
    font-size: 0.625rem;
    padding: 0 0.1rem;
    border: none;
    background-color: ${(props) => Theme.color[props.backgroundColor]};
  }
`;

const OptionStyled = styled.option<{ fontColor: keyof typeof Theme.color }>`
  border-radius: none;
  color: ${(props) => Theme.color[props.fontColor]};
`;

export { SelectStyled, OptionStyled };
