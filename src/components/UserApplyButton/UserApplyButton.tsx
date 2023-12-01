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
  isToken: boolean;
  eventId: string;
  eventDetail: getEventDetailResponse;
  applyModalOpen: () => void;
  loginModalOpen: () => void;
}

const UserApplyButton = ({
  isToken,
  eventId,
  eventDetail,
  applyModalOpen,
  loginModalOpen,
}: UserApplyButton) => {
  const bookmarkRef = useRef<HTMLDivElement>(null);
  const { isBookmarked } = useIsBookmarkedQuery({ eventId });
  const { category, hasAlreadyApplied, eventInfo, formInfo } = eventDetail ?? {};
  const { applicants, isEnded } = eventInfo ?? {};
  const { isAbleToApply } = formInfo ?? {};

  const capacity = category === 'RECRUITMENT' ? eventInfo.recruitmentLimit : eventInfo.capacity;

  const getApplyButtonText = () => {
    if (hasAlreadyApplied) {
      return EVENT_DETAIL_BUTTON.APPLY.COMPLETED;
    } else if (category === 'RECRUITMENT' && applicants >= 1000) {
      return EVENT_DETAIL_BUTTON.APPLY.APPLICANT;
    } else if (category !== 'RECRUITMENT' && applicants >= capacity) {
      return EVENT_DETAIL_BUTTON.APPLY.SOLD_OUT;
    } else if (isEnded) {
      return EVENT_DETAIL_BUTTON.APPLY.DEADLINE;
    } else if (!isAbleToApply) {
      return EVENT_DETAIL_BUTTON.APPLY.NOT_PERIOD;
    } else {
      return EVENT_DETAIL_BUTTON.APPLY.POSSIBLE;
    }
  };

  const handleBookmarkClick = () => {
    if (isToken) {
      bookmarkRef.current?.click();
    } else {
      loginModalOpen();
    }
  };

  return (
    <ButtonWrapper>
      {capacity && category !== 'RECRUITMENT' && (
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
        capacity={Boolean(category !== 'RECRUITMENT' && capacity)}
        disabled={getApplyButtonText() !== EVENT_DETAIL_BUTTON.APPLY.POSSIBLE}
        onClick={() => (isToken ? applyModalOpen() : loginModalOpen())}
      >
        {getApplyButtonText()}
      </ApplyButton>
      <BookmarkButton reverse bold onClick={() => handleBookmarkClick()}>
        <BookMark
          bookmarked={isBookmarked!}
          eventId={eventId}
          ref={bookmarkRef}
          disabled={!isToken}
        />
      </BookmarkButton>
    </ButtonWrapper>
  );
};

export default UserApplyButton;
