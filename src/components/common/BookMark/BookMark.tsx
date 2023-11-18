import usePatchBookmarkMutation from '@/hooks/query/event/usePatchBookmarkMutation';

import { HTMLAttributes, forwardRef, useState } from 'react';
import { FaBookmark, FaRegBookmark } from 'react-icons/fa';

interface BookMark extends HTMLAttributes<HTMLDivElement> {
  bookmarked: boolean;
  size?: number;
  strokeWidth?: number;
  eventId: string;
}

const BookMark = forwardRef<HTMLDivElement, BookMark>(
  ({ bookmarked, size = 30, strokeWidth = 10, eventId, ...props }, ref) => {
    const [bookmarkPaint, setBookmarkPaint] = useState(bookmarked);

    const { patchBookmarkMutate, isBookmarkLoading } = usePatchBookmarkMutation({ bookmarkPaint });

    const handleBookmarkClick = async () => {
      if (isBookmarkLoading) return;
      patchBookmarkMutate({ eventId, bookmark: !bookmarkPaint });
      setBookmarkPaint((prevPaint) => !prevPaint);
    };

    return (
      <>
        <div ref={ref} onClick={handleBookmarkClick} {...props}>
          {bookmarkPaint ? (
            <FaBookmark size={size} strokeWidth={strokeWidth} />
          ) : (
            <FaRegBookmark size={size} strokeWidth={strokeWidth} />
          )}
        </div>
      </>
    );
  },
);

export default BookMark;
