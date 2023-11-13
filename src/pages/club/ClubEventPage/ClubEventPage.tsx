import ActiveButton from '@/components/ActiveButton/ActiveButton';
import EventCard from '@/components/common/EventCard/EventCard';
import Header from '@/components/common/Header/Header';
import Tab from '@/components/common/Tab/Tab';
import { CREATE_EVENT } from '@/constants/club';
import { PATH } from '@/constants/path';
import { TAB_CONSTANTS } from '@/constants/tab';
import useClubEventsQuery from '@/hooks/query/club/useClubEventsQuery';

import { useNavigate, useParams } from 'react-router-dom';

import { ButtonWrapper, EventsContainer, HeaderElementWrapper } from './ClubEventPage.style';

const ClubEventPage = () => {
  const navigate = useNavigate();
  const { clubId } = useParams();
  if (!clubId) throw new Error('클럽 ID를 찾을 수 없습니다');
  const { clubEvents } = useClubEventsQuery({ clubId, pageNumber: 0 });

  return (
    <>
      <Header>
        <HeaderElementWrapper>
          <Tab
            tabItems={[
              { title: `${TAB_CONSTANTS.CLUB_HOME}`, link: `${PATH.CLUB.HOME(clubId)}` },
              { title: `${TAB_CONSTANTS.CLUB_EVENTS}`, link: `${PATH.CLUB.EVENT(clubId)}` },
              { title: `${TAB_CONSTANTS.CLUB_MANAGE}`, link: `${PATH.CLUB.MANAGE(clubId)}` },
            ]}
          />
        </HeaderElementWrapper>
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
      <ButtonWrapper>
        <ActiveButton
          buttonText={CREATE_EVENT.BUTTON_TEXT}
          fontSize="mediumTitle"
          onClick={() => navigate(`${PATH.EVENT.CHOICE}`)}
        />
      </ButtonWrapper>
    </>
  );
};

export default ClubEventPage;
