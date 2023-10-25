import { VerticalScrollStyled } from './VerticalScroll.style';

interface VerticalScrollProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  height: string;
}

const VerticalScroll = ({ children, height, ...props }: VerticalScrollProps) => {
  return (
    <VerticalScrollStyled height={height} {...props}>
      {children}
    </VerticalScrollStyled>
  );
};

export default VerticalScroll;
