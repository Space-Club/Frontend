import { useEffect, useRef, useState } from 'react';

const useCloseOnOutsideClick = () => {
  const [isOpen, setIsOpen] = useState(false);
  const targetRef = useRef<HTMLDivElement>(null);
  const toggleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (targetRef.current && !targetRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', (event) => handleClickOutside(event));

    return () => {
      document.removeEventListener('mousedown', (event) => handleClickOutside(event));
    };
  }, [targetRef]);

  return { isOpen, setIsOpen, toggleOpen, targetRef };
};

export default useCloseOnOutsideClick;
