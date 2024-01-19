import { useEffect, useRef, useState } from 'react';

const useCloseOnOutsideClick = () => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    document.addEventListener('mousedown', (event) => handleClickOutside(event));

    return () => {
      document.removeEventListener('mousedown', (event) => handleClickOutside(event));
    };
  }, [ref]);

  const toggleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  return { isOpen, setIsOpen, toggleOpen, ref };
};

export default useCloseOnOutsideClick;
