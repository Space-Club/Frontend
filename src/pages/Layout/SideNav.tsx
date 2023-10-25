import Avatar from '@/components/common/Avatar/Avatar';

import { FaBell, FaHome, FaPlusCircle } from 'react-icons/fa';

import {
  AvatarGroup,
  Container,
  ProfileAvatar,
  ProfileName,
  ProfileWrapper,
  iconStyle,
} from './SideNav.style';

interface SideNav {
  name?: string;
}

const SideNav = ({ name = '무명' }: SideNav) => {
  return (
    <Container>
      <AvatarGroup>
        {Array(8)
          .fill(null)
          .map((_, index) => (
            <Avatar key={index} avatarShape="normal" />
          ))}
      </AvatarGroup>
      <FaPlusCircle className={iconStyle} />
      <FaHome className={iconStyle} />
      <FaBell className={iconStyle} />
      <ProfileWrapper>
        <ProfileAvatar avatarShape="rectangle" />
        <ProfileName>{name}</ProfileName>
      </ProfileWrapper>
    </Container>
  );
};

export default SideNav;
