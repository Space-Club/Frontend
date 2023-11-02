import Theme from '@/styles/Theme';

import { OptionStyled, SelectStyled } from './DropDown.style';

export interface DropDownOption {
  label: string;
  value?: string;
  fontColor?: keyof typeof Theme.color;
}

interface DropDownProps {
  backgroundColor?: keyof typeof Theme.color;
  options: DropDownOption[];
  value: string;
  children?: React.ReactNode;
}

const DropDown = ({
  backgroundColor = 'dropDownBackground',
  options,
  value = options[0].value ?? '',
  children,
  ...props
}: DropDownProps) => {
  return (
    <SelectStyled value={value} backgroundColor={backgroundColor} {...props}>
      {options.map((option) => (
        <OptionStyled fontColor={option.fontColor ?? 'black'} value={option.value}>
          {option.label}
          {children}
        </OptionStyled>
      ))}
    </SelectStyled>
  );
};

export default DropDown;
