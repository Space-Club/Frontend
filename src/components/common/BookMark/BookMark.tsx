import usePatchBookmarkMutation from '@/hooks/query/event/usePatchBookmarkMutation';
import Theme from '@/styles/Theme';

import { HTMLAttributes, MouseEventHandler, forwardRef, useEffect, useState } from 'react';
import { FaBookmark, FaRegBookmark } from 'react-icons/fa';

interface BookMark extends HTMLAttributes<HTMLDivElement> {
  bookmarked: boolean;
  eventId: string;
  size?: number;
  strokeWidth?: number;
  disabled?: boolean;
}

const BookMark = forwardRef<HTMLDivElement, BookMark>(
  ({ bookmarked, size = 30, strokeWidth = 10, eventId, disabled = false, ...props }, ref) => {
    const [bookmarkPaint, setBookmarkPaint] = useState(bookmarked);
    const { patchBookmarkMutate, isBookmarkLoading } = usePatchBookmarkMutation({ bookmarkPaint });

    useEffect(() => {
      setBookmarkPaint(bookmarked);
    }, [bookmarked]);

    const handleBookmarkClick: MouseEventHandler<HTMLDivElement> = async (event) => {
      if (disabled) return;
      event.stopPropagation();
      if (isBookmarkLoading) return;
      patchBookmarkMutate({ eventId, bookmark: !bookmarkPaint });
      setBookmarkPaint((prevPaint) => !prevPaint);
    };

    return (
      <>
        <div ref={ref} onClick={handleBookmarkClick} {...props}>
          {bookmarkPaint ? (
            <FaBookmark size={size} color={Theme.color.tSemiActive} strokeWidth={strokeWidth} />
          ) : (
            <FaRegBookmark size={size} color={Theme.color.tSemiActive} strokeWidth={strokeWidth} />
          )}
        </div>
      </>
    );
  },
);

export default BookMark;
