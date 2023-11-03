import { HTMLAttributes } from 'react';
import { FaBookmark, FaRegBookmark } from 'react-icons/fa';

import { SemiPurpleButton } from './BookMark.style';

interface BookMark extends HTMLAttributes<HTMLButtonElement> {
  reverse?: boolean;
  paint?: boolean;
  size?: number;
  strokeWidth?: number;
}

const BookMark = ({
  reverse = false,
  paint = false,
  size = 30,
  strokeWidth = 10,
  onClick,
  ...props
}: BookMark) => {
  return (
    <SemiPurpleButton reverse={reverse} onClick={onClick} {...props}>
      {paint ? (
        <FaBookmark size={size} strokeWidth={strokeWidth} />
      ) : (
        <FaRegBookmark size={size} strokeWidth={strokeWidth} />
      )}
    </SemiPurpleButton>
  );
};

export default BookMark;
