import Theme from '@/styles/Theme';

import { OptionStyled, SelectStyled } from './DropDown.style';

export interface DropDownOption {
  label: string;
  value: string | number;
  fontColor?: keyof typeof Theme.color;
}

interface DropDownProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  backgroundColor?: keyof typeof Theme.color;
  options: DropDownOption[];
  selectedValue: string | number;
  children?: React.ReactNode;
}

const DropDown = ({
  backgroundColor = 'tButtonWhite',
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
