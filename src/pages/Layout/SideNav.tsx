import getMyClub from '@/apis/users/getMyClub';
import Avatar from '@/components/common/Avatar/Avatar';
import { PATH } from '@/constants/path';

import { FaBell, FaHome, FaPlusCircle } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';

import { useQuery } from '@tanstack/react-query';

import { AvatarGroup, Container, iconStyle } from './SideNav.style';

const SideNav = () => {
  const { data: clubs } = useQuery(['myclubs', 'userid'], () => getMyClub({ id: '1' }), {
    refetchInterval: false,
  }); //userid에 받는 방식 고려 후, 리팩토링
  const navigate = useNavigate();

  return (
    <Container>
      <AvatarGroup>
        {clubs?.map((club) => (
          <Link to={`/club/home/${club.id}`}>
            <Avatar key={club.id} avatarShape="normal" profileImageSrc={club.src}></Avatar>
          </Link>
        ))}
      </AvatarGroup>
      <FaPlusCircle className={iconStyle} onClick={() => navigate(`${PATH.CLUB.CREATE}`)} />
      <FaHome className={iconStyle} onClick={() => navigate('/')} />
      <FaBell className={iconStyle} onClick={() => alert('알림페이지 준비 중')} />
      <Link to={`/profile`}>
        <Avatar avatarShape="rectangle" />
      </Link>
    </Container>
  );
};

export default SideNav;
