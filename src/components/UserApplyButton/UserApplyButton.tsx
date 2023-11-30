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
  const { category, hasAlreadyApplied, eventInfo, formInfo } = eventDetail ?? {};
  const { applicants, isEnded } = eventInfo ?? {};
  const { isAbleToApply } = formInfo ?? {};

  const capacity = category === 'RECRUITMENT' ? eventInfo.recruitmentLimit : eventInfo.capacity;

  const getApplyButtonText = () => {
    if (hasAlreadyApplied) {
      return EVENT_DETAIL_BUTTON.APPLY.COMPLETED;
    } else if (category !== 'RECRUITMENT' && applicants >= capacity) {
      return EVENT_DETAIL_BUTTON.APPLY.SOLD_OUT;
    } else if (isEnded || isAbleToApply) {
      return EVENT_DETAIL_BUTTON.APPLY.DEADLINE;
    } else {
      return EVENT_DETAIL_BUTTON.APPLY.POSSIBLE;
    }
  };

  return (
    <ButtonWrapper>
      {capacity && (
        <ApplicantButton
          reverse
          capacity={Boolean(capacity)}
          isDisabled={getApplyButtonText() !== EVENT_DETAIL_BUTTON.APPLY.POSSIBLE}
          disabled
        >
          {applicants}/{capacity}
        </ApplicantButton>
      )}
      <ApplyButton
        capacity={Boolean(capacity)}
        disabled={getApplyButtonText() !== EVENT_DETAIL_BUTTON.APPLY.POSSIBLE}
        onClick={() => applyModalOpen()}
      >
        {getApplyButtonText()}
      </ApplyButton>
      <BookmarkButton reverse bold onClick={() => bookmarkRef.current?.click()}>
        <BookMark bookmarked={isBookmarked!} eventId={eventId} ref={bookmarkRef} />
      </BookmarkButton>
    </ButtonWrapper>
  );
};

export default UserApplyButton;
