interface ActiveButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  buttonText: string;
  fontSize: 'largeTitle' | 'mediumTitle' | 'smallTitle' | 'smallContent';
  isLoading?: boolean;
  disabled?: boolean;
}

export { ActiveButtonProps };
