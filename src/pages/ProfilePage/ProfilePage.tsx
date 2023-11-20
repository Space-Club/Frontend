import DeleteUserButton from '@/components/DeleteUserButton/DeleteUserButton';
import Profile from '@/components/Profile/Profile';
import Header from '@/components/common/Header/Header';
import Tab from '@/components/common/Tab/Tab';
import { PROFILE_TABS } from '@/constants/tab';
import { ProfileEventType } from '@/types/event';

import { useParams } from 'react-router-dom';

import AppliedEvents from './AppliedEvents';
import BookmarkedEvents from './BookmarkedEvents';
import {
  AppliedEventTabContainer,
  DeleteUserButtonWrapper,
  ProfileBottomWrapper,
} from './ProfilePage.style';

const ProfilePage = () => {
  const { category } = useParams<{ category: ProfileEventType }>();

  return (
    <>
      <Header>
        <DeleteUserButtonWrapper>
          <DeleteUserButton />
        </DeleteUserButtonWrapper>
      </Header>
      <Profile />
      <ProfileBottomWrapper>
        <AppliedEventTabContainer>
          <Tab tabItems={PROFILE_TABS} />
        </AppliedEventTabContainer>
        {category === 'applied' ? <AppliedEvents /> : <BookmarkedEvents />}
      </ProfileBottomWrapper>
    </>
  );
};

export default ProfilePage;
