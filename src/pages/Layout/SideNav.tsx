import Avatar from '@/components/common/Avatar/Avatar';

import { FaBell, FaHome, FaPlusCircle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

import { AvatarGroup, Container, iconStyle } from './SideNav.style';

const SideNav = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <AvatarGroup>
        {Array(8)
          .fill(null)
          .map((_, index) => (
            <Avatar key={index} avatarShape="normal" onClick={() => navigate('/club/home')} />
          ))}
      </AvatarGroup>
      <FaPlusCircle className={iconStyle} onClick={() => navigate('/club/create')} />
      <FaHome className={iconStyle} onClick={() => navigate('/')} />
      <FaBell className={iconStyle} onClick={() => alert('알림페이지 준비 중')} />
      <Avatar avatarShape="rectangle" />
    </Container>
  );
};

export default SideNav;
