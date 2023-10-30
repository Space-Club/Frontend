import { FaRegBookmark } from 'react-icons/fa';

import { SemiPurpleButton } from './BookMark.style';

interface BookMark {
  reverse?: boolean;
  size?: number;
  strokeWidth?: number;
}

const BookMark: React.FC<BookMark> = ({
  reverse = false,
  size = 30,
  strokeWidth = 10,
  ...props
}) => {
  return (
    <SemiPurpleButton reverse={reverse}>
      <FaRegBookmark size={size} strokeWidth={strokeWidth} {...props} />
    </SemiPurpleButton>
  );
};

export default BookMark;
