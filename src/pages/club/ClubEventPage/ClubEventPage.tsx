import ActiveButton from '@/components/ActiveButton/ActiveButton';
import EventCard from '@/components/common/EventCard/EventCard';
import Header from '@/components/common/Header/Header';
import Pagination from '@/components/common/Pagination/Pagination';
import Tab from '@/components/common/Tab/Tab';
import { CREATE_EVENT } from '@/constants/club';
import { PATH } from '@/constants/path';
import { TAB_CONSTANTS } from '@/constants/tab';
import useClubEventsQuery from '@/hooks/query/club/useClubEventsQuery';

import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { TabWrapper } from '../ClubHomePage/ClubHomePage.style';
import { ButtonWrapper, EventsContainer } from './ClubEventPage.style';

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
      <Header>
        <TabWrapper>
          <Tab
            tabItems={[
              { title: `${TAB_CONSTANTS.CLUB_HOME}`, link: `${PATH.CLUB.HOME(clubId)}` },
              { title: `${TAB_CONSTANTS.CLUB_EVENTS}`, link: `${PATH.CLUB.EVENT(clubId)}` },
              { title: `${TAB_CONSTANTS.CLUB_MANAGE}`, link: `${PATH.CLUB.MANAGE(clubId)}` },
            ]}
          />
        </TabWrapper>
      </Header>
      <EventsContainer>
        {clubEvents?.map((clubEvent) => (
          <EventCard
            eventId={clubEvent.id}
            posterSrc={clubEvent.posterImageUrl}
            eventTitle={clubEvent.title}
            eventDate={clubEvent.startDate}
            eventTime={clubEvent.startTime}
            eventPlace={clubEvent.location}
            clubImageSrc={clubEvent.clubLogoImageUrl}
            clubName={clubEvent.clubName}
            openStatus={clubEvent.openStatus}
          />
        ))}
      </EventsContainer>
      <Pagination totalPages={totalPages} size={size} onChangePage={handleChangePage} />
      <ButtonWrapper>
        <ActiveButton
          buttonText={CREATE_EVENT.BUTTON_TEXT}
          fontSize="mediumTitle"
          onClick={() => navigate(`${PATH.CLUB.CHOICE(clubId)}`)}
        />
      </ButtonWrapper>
    </>
  );
};

export default ClubEventPage;
