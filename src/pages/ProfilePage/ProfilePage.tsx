import Profile from '@/components/Profile/Profile';
import Header from '@/components/common/Header/Header';
import Tab from '@/components/common/Tab/Tab';
import { PROFILE_TABS } from '@/constants/tab';
import { ProfileEventType } from '@/types/event';

import { useParams } from 'react-router-dom';

import AppliedEvents from './AppliedEvents';
import BookedEvents from './BookedEvents';
import { AppliedEventTabContainer, ProfileBottomWrapper } from './ProfilePage.style';

const ProfilePage = () => {
  const { category } = useParams<{ category: ProfileEventType }>();

  return (
    <>
      <Header />
      <Profile />
      <ProfileBottomWrapper>
        <AppliedEventTabContainer>
          <Tab tabItems={PROFILE_TABS} />
        </AppliedEventTabContainer>
        {category === 'applied' ? <AppliedEvents /> : <BookedEvents />}
      </ProfileBottomWrapper>
    </>
  );
};

export default ProfilePage;
