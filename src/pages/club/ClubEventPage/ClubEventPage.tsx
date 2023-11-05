import ActiveButton from '@/components/ActiveButton/ActiveButton';
import EventCard from '@/components/common/EventCard/EventCard';
import Header from '@/components/common/Header/Header';
import Tab from '@/components/common/Tab/Tab';
import { CREATE_EVENT } from '@/constants/club';
import { PATH } from '@/constants/path';
import { TAB_CONSTANTS } from '@/constants/tab';
import { TabContextProvider } from '@/context/TabContext';
import useClubEventsQuery from '@/hooks/query/club/useClubEventsQuery';

import { useNavigate } from 'react-router-dom';

import { ButtonWrapper, EventsContainer, HeaderElementWrapper } from './ClubEventPage.style';

const ClubEventPage = () => {
  const { clubEvents } = useClubEventsQuery({ clubId: 1, pageNumber: 0 });
  const navigate = useNavigate();

  return (
    <TabContextProvider>
      <Header>
        <HeaderElementWrapper>
          <Tab
            tabItems={[
              { title: `${TAB_CONSTANTS.CLUB_HOME}` },
              { title: `${TAB_CONSTANTS.CLUB_PERFORMANCE}` },
              { title: `${TAB_CONSTANTS.CLUB_MANAGEMENT}` },
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
    </TabContextProvider>
  );
};

export default ClubEventPage;
