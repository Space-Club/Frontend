import ActiveButton from '@/components/ActiveButton/ActiveButton';
import EventCard from '@/components/common/EventCard/EventCard';
import Header from '@/components/common/Header/Header';
import Tab from '@/components/common/Tab/Tab';
import { TAB_CONSTANTS } from '@/constants/tab';
import { TabContextProvider } from '@/context/TabContext';
import useClubEventsQuery from '@/hooks/query/club/useClubEventsQuery';
import styled from '@emotion/styled';

import { useNavigate } from 'react-router-dom';

const HeaderElementWrapper = styled.div`
  display: flex;
  justify-content: end;
  align-items: end;
  width: 100%;
  height: 100%;
`;

const EventsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding-top: 3rem;
`;

const ButtonWrapper = styled.div`
  position: fixed;
  bottom: 3rem;
  right: 5rem;
`;

const ClubEventPage = () => {
  const { clubEvents, isLoading } = useClubEventsQuery({ clubId: 1, pageNumber: 1 });
  const navigate = useNavigate();

  return (
    <TabContextProvider>
      <Header>
        <HeaderElementWrapper>
          <Tab
            tabItems={[
              {
                title: `${TAB_CONSTANTS.CLUB_HOME}`,
              },
              { title: `${TAB_CONSTANTS.CLUB_PERFORMANCE}` },
              { title: `${TAB_CONSTANTS.CLUB_MANAGEMENT}` },
            ]}
          />
        </HeaderElementWrapper>
      </Header>
      <EventsContainer>
        {clubEvents?.map((clubEvent) =>
          isLoading ? (
            <div>Loading...</div>
          ) : (
            <EventCard
              eventId={clubEvent.id}
              posterSrc={clubEvent.poster}
              eventTitle={clubEvent.title}
              eventDate={clubEvent.startDate}
              eventTime={clubEvent.startTime}
              eventPlace={clubEvent.location}
              clubName={clubEvent.clubName}
            />
          ),
        )}
      </EventsContainer>
      <ButtonWrapper>
        <ActiveButton
          buttonText="행사 생성하기"
          fontSize="mediumTitle"
          onClick={() => navigate('/club/create')}
        />
      </ButtonWrapper>
    </TabContextProvider>
  );
};

export default ClubEventPage;
