import MyEventCard from '@/components/common/MyEventCard/MyEventCard';
import Tab from '@/components/common/Tab/Tab';
import { MY_EVENTS_TABS } from '@/constants/event';
import { TabContextProvider } from '@/context/TabContext';
import useMyEvent from '@/hooks/query/event/useMyEvent';

import { MyEventContainer, MyEventSection, MyEventTabContainer } from './ProfilePage.style';

const ProfilePage = () => {
  const { myEvents } = useMyEvent({ pageNumber: 1 }); //TODO: 페이지네이션 처리

  return (
    <TabContextProvider>
      <MyEventSection>
        <MyEventTabContainer>
          <Tab tabItems={MY_EVENTS_TABS} />
        </MyEventTabContainer>
        <MyEventContainer>
          {myEvents?.data.map((event) => (
            <MyEventCard
              key={event.id}
              eventId={event.id}
              title={event.title}
              poster={event.poster}
              startDate={event.startDate}
              location={event.location}
              clubName={event.clubName}
              eventTagKey={event.status}
            />
          ))}
        </MyEventContainer>
      </MyEventSection>
    </TabContextProvider>
  );
};

export default ProfilePage;
