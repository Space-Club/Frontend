import usePostBookmarkMutation from '@/hooks/query/event/usePostBookmarkMutation';

import { HTMLAttributes, useState } from 'react';
import { FaBookmark, FaRegBookmark } from 'react-icons/fa';

import { SemiPurpleButton } from './BookMark.style';

interface BookMark extends HTMLAttributes<HTMLButtonElement> {
  reverse?: boolean;
  size?: number;
  strokeWidth?: number;
  eventId: string;
}

const BookMark = ({
  reverse = false,
  size = 30,
  strokeWidth = 10,
  eventId,
  ...props
}: BookMark) => {
  const [bookmarkPaint, setBookmarkPaint] = useState(false);
  const { postBookmarkMutate } = usePostBookmarkMutation({ eventId });

  const handleBookmarkClick = async () => {
    postBookmarkMutate();
    setBookmarkPaint(!bookmarkPaint);
  };

  return (
    <SemiPurpleButton reverse={reverse} onClick={handleBookmarkClick} {...props}>
      {bookmarkPaint ? (
        <FaBookmark size={size} strokeWidth={strokeWidth} />
      ) : (
        <FaRegBookmark size={size} strokeWidth={strokeWidth} />
      )}
    </SemiPurpleButton>
  );
};

export default BookMark;
