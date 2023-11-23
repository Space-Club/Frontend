interface ActiveButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  buttonText: string;
  fontSize: 'largeTitle' | 'mediumTitle' | 'smallTitle' | 'mediumContent' | 'smallContent';
  isLoading?: boolean;
  disabled?: boolean;
}

export { ActiveButtonProps };
