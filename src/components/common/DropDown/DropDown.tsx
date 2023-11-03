import Theme from '@/styles/Theme';

import { OptionStyled, SelectStyled } from './DropDown.style';

export interface DropDownOption {
  label: string;
  value: string;
  fontColor?: keyof typeof Theme.color;
}

interface DropDownProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  backgroundColor?: keyof typeof Theme.color;
  options: DropDownOption[];
  selectedValue: string;
  children?: React.ReactNode;
}

const DropDown = ({
  backgroundColor = 'dropDownBackground',
  options,
  selectedValue,
  children,
  ...props
}: DropDownProps) => {
  return (
    <SelectStyled value={selectedValue} backgroundColor={backgroundColor} {...props}>
      {options.map((option) => (
        <OptionStyled
          key={option.value}
          fontColor={option.fontColor ?? 'black'}
          value={option.value}
        >
          {option.label}
          {children}
        </OptionStyled>
      ))}
    </SelectStyled>
  );
};

export default DropDown;
