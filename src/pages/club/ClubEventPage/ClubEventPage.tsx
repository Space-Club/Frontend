import ActiveButton from '@/components/ActiveButton/ActiveButton';
import ClubHeader from '@/components/ClubHeader/ClubHeader';
import EventCard from '@/components/common/EventCard/EventCard';
import Pagination from '@/components/common/Pagination/Pagination';
import { CREATE_EVENT } from '@/constants/club';
import { PATH } from '@/constants/path';
import useClubEventsQuery from '@/hooks/query/club/useClubEventsQuery';
import { EventsWrapper } from '@/styles/common';

import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { ButtonWrapper, EmptyClubEvent } from './ClubEventPage.style';

const ClubEventPage = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(0);
  const { clubId } = useParams();
  if (!clubId) throw new Error('클럽 ID를 찾을 수 없습니다');
  const { clubEvents, pageData } = useClubEventsQuery({ clubId, pageNumber: currentPage });
  if (!pageData) {
    return null;
  }

  const { totalPages, size } = pageData;

  const handleChangePage = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <>
      <ClubHeader clubId={clubId}></ClubHeader>
      <EventsWrapper>
        {clubEvents?.map(({ id, eventInfo, formInfo, clubInfo }) => (
          <EventCard
            eventId={id}
            posterSrc={eventInfo.posterImageUrl}
            eventTitle={eventInfo.title}
            eventDate={eventInfo.startDate}
            formCloseDate={formInfo.closeDate}
            eventPlace={eventInfo.location}
            clubImageSrc={clubInfo.logoImageUrl}
            clubName={clubInfo.name}
            openStatus={eventInfo.openStatus}
          />
        ))}
        {clubEvents?.length === 0 && (
          <EmptyClubEvent>클럽에서 생성한 행사가 없습니다!</EmptyClubEvent>
        )}
      </EventsWrapper>
      <Pagination totalPages={totalPages} size={size} onChangePage={handleChangePage} />
      <ButtonWrapper>
        <ActiveButton
          buttonText={CREATE_EVENT.BUTTON_TEXT}
          fontSize="mediumContent"
          onClick={() => navigate(`${PATH.CLUB.CHOICE(clubId)}`)}
        />
      </ButtonWrapper>
    </>
  );
};

export default ClubEventPage;
