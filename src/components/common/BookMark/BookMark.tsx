import usePatchBookmarkMutation from '@/hooks/query/event/usePatchBookmarkMutation';

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
  const { patchBookmarkMutate, isBookmarkLoading } = usePatchBookmarkMutation({ bookmarkPaint });

  const handleBookmarkClick = async () => {
    if (isBookmarkLoading) return;
    patchBookmarkMutate({ eventId, bookmark: !bookmarkPaint });
    setBookmarkPaint((prevPaint) => !prevPaint);
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
