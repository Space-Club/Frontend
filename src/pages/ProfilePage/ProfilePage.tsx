import Profile from '@/components/Profile/Profile';
import SearchInputForm from '@/components/SearchInputForm/SearchInputForm';
import Header from '@/components/common/Header/Header';
import MyEventCard from '@/components/common/MyEventCard/MyEventCard';
import Tab from '@/components/common/Tab/Tab';
import { MY_EVENTS_TABS } from '@/constants/event';
import { TabContextProvider } from '@/context/TabContext';
import useMyEventQuery from '@/hooks/query/event/useMyEventQuery';

import { MyEventContainer, MyEventTabContainer, ProfileBottomWrapper } from './ProfilePage.style';

const ProfilePage = () => {
  const { events } = useMyEventQuery({ pageNumber: 1 }); //TODO: 페이지네이션 처리

  return (
    <TabContextProvider>
      <Header>
        <SearchInputForm />
      </Header>
      <Profile />
      <ProfileBottomWrapper>
        <MyEventTabContainer>
          <Tab tabItems={MY_EVENTS_TABS} />
        </MyEventTabContainer>
        <MyEventContainer>
          {events?.map((event) => (
            <MyEventCard
              key={event.id}
              eventId={event.id}
              title={event.title}
              posterImageUrl={event.posterImageUrl}
              startDate={event.startDate}
              location={event.location}
              clubName={event.clubName}
              eventTagKey={event.status}
            />
          ))}
        </MyEventContainer>
      </ProfileBottomWrapper>
    </TabContextProvider>
  );
};

export default ProfilePage;
