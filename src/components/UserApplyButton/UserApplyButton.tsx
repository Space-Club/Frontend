import BookMark from '@/components/common/BookMark/BookMark';
import { EVENT_DETAIL_BUTTON } from '@/constants/event';
import useIsBookmarkQuery from '@/hooks/query/event/useIsBookmarkedQuery';
import {
  ApplicantButton,
  ApplyButton,
  BookmarkButton,
  ButtonWrapper,
} from '@/pages/event/EventDetailPage/EventDetailPage.style';
import { getEventDetailResponse } from '@/types/api/getEventDetail';

import { useRef } from 'react';

interface UserApplyButton {
  eventId: string;
  eventDetail: getEventDetailResponse;
  applyModalOpen: () => void;
}

const UserApplyButton = ({ eventId, eventDetail, applyModalOpen }: UserApplyButton) => {
  const bookmarkRef = useRef<HTMLDivElement>(null);
  const { isBookmarked } = useIsBookmarkQuery({ eventId });
  const { eventInfo, formInfo } = eventDetail ?? {};
  const { capacity, applicants, isEnded } = eventInfo ?? {};
  const { isAbleToApply } = formInfo ?? {};

  return (
    <ButtonWrapper>
      {capacity && (
        <ApplicantButton reverse capacity={!!capacity} disabled>
          {applicants}/{capacity}
        </ApplicantButton>
      )}
      <ApplyButton
        capacity={Boolean(capacity)}
        disabled={isEnded || isAbleToApply}
        onClick={() => applyModalOpen()}
      >
        {EVENT_DETAIL_BUTTON.apply}
      </ApplyButton>
      <BookmarkButton reverse bold onClick={() => bookmarkRef.current?.click()}>
        <BookMark bookmarked={isBookmarked!} eventId={eventId} ref={bookmarkRef} />
      </BookmarkButton>
    </ButtonWrapper>
  );
};

export default UserApplyButton;
