import Profile from '@/components/Profile/Profile';
import Header from '@/components/common/Header/Header';
import Tab from '@/components/common/Tab/Tab';
import { PROFILE_TABS } from '@/constants/user';

import AppliedEvents from './AppliedEvents';
import { AppliedEventTabContainer, ProfileBottomWrapper } from './ProfilePage.style';

const ProfilePage = () => {
  //TODO: pathname에 따라서 AppliedEvents, BookedEvent 보여주기
  return (
    <>
      <Header />
      <Profile />
      <ProfileBottomWrapper>
        <AppliedEventTabContainer>
          <Tab tabItems={PROFILE_TABS} />
        </AppliedEventTabContainer>
        <AppliedEvents />
      </ProfileBottomWrapper>
    </>
  );
};

export default ProfilePage;
