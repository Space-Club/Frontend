import BookMark from '@/components/common/BookMark/BookMark';
import { EVENT_DETAIL_BUTTON } from '@/constants/event';
import useIsBookmarkedQuery from '@/hooks/query/event/useIsBookmarkedQuery';
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
  const { isBookmarked } = useIsBookmarkedQuery({ eventId });
  const { hasAlreadyApplied, eventInfo, formInfo } = eventDetail ?? {};
  const { capacity, applicants, isEnded } = eventInfo ?? {};
  const { isAbleToApply } = formInfo ?? {};

  const checkApplyButtonText = () => {
    if (hasAlreadyApplied) {
      return EVENT_DETAIL_BUTTON.apply.completed;
    } else if (applicants >= capacity) {
      return EVENT_DETAIL_BUTTON.apply.soldOut;
    } else if (isEnded || isAbleToApply) {
      return EVENT_DETAIL_BUTTON.apply.deadLine;
    } else {
      return EVENT_DETAIL_BUTTON.apply.possible;
    }
  };

  return (
    <ButtonWrapper>
      {capacity && (
        <ApplicantButton
          reverse
          capacity={!!capacity}
          isDisabled={hasAlreadyApplied || isEnded || isAbleToApply || applicants >= capacity}
          disabled
        >
          {applicants}/{capacity}
        </ApplicantButton>
      )}
      <ApplyButton
        capacity={Boolean(capacity)}
        disabled={hasAlreadyApplied || isEnded || isAbleToApply || applicants >= capacity}
        onClick={() => applyModalOpen()}
      >
        {checkApplyButtonText()}
      </ApplyButton>
      <BookmarkButton reverse bold onClick={() => bookmarkRef.current?.click()}>
        <BookMark bookmarked={isBookmarked!} eventId={eventId} ref={bookmarkRef} />
      </BookmarkButton>
    </ButtonWrapper>
  );
};

export default UserApplyButton;
