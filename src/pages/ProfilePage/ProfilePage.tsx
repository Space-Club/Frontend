import Profile from '@/components/Profile/Profile';
import SearchInputForm from '@/components/SearchInputForm/SearchInputForm';
import Header from '@/components/common/Header/Header';
import Tab from '@/components/common/Tab/Tab';
import TabItem from '@/components/common/Tab/TabItem';
import { MY_EVENTS_TABS } from '@/constants/event';
import { TAB_CONSTANTS } from '@/constants/tab';
import { TabContextProvider } from '@/context/TabContext';

import { MyEventTabContainer, ProfileBottomWrapper } from './ProfilePage.style';
import RenderApplyEvents from './RenderApplyEvents';
import RenderBookedEvents from './RenderBookedEvents';

const ProfilePage = () => {
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
        <TabItem index={`${TAB_CONSTANTS.APPLY_PARTICIPATION}`}>
          <RenderApplyEvents />
        </TabItem>
        <TabItem index={`${TAB_CONSTANTS.BOOKMARKED_EVENT}`}>
          <RenderBookedEvents />
        </TabItem>
      </ProfileBottomWrapper>
    </TabContextProvider>
  );
};

export default ProfilePage;
