import Profile from '@/components/Profile/Profile';
import SearchInputForm from '@/components/SearchInputForm/SearchInputForm';
import Header from '@/components/common/Header/Header';
import Tab from '@/components/common/Tab/Tab';
import TabItem from '@/components/common/Tab/TabItem';
import { MY_EVENTS_TABS } from '@/constants/event';
import { TAB_CONSTANTS } from '@/constants/tab';
import { TabContextProvider } from '@/context/TabContext';

import AppliedEvents from './AppliedEvents';
import BookedEvents from './BookedEvents';
import { AppliedEventTabContainer, ProfileBottomWrapper } from './ProfilePage.style';

const ProfilePage = () => {
  return (
    <TabContextProvider>
      <Header>
        <SearchInputForm />
      </Header>
      <Profile />
      <ProfileBottomWrapper>
        <AppliedEventTabContainer>
          <Tab tabItems={MY_EVENTS_TABS} />
        </AppliedEventTabContainer>
        <TabItem tabName={`${TAB_CONSTANTS.APPLY_PARTICIPATION}`}>
          <AppliedEvents />
        </TabItem>
        <TabItem tabName={`${TAB_CONSTANTS.BOOKMARKED_EVENT}`}>
          <BookedEvents />
        </TabItem>
      </ProfileBottomWrapper>
    </TabContextProvider>
  );
};

export default ProfilePage;
