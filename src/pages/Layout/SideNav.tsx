import getMyClub from '@/apis/users/getMyClub';
import SideBarMyProfile from '@/components/SideBarMyProfile/SideBarMyProfile';
import Avatar from '@/components/common/Avatar/Avatar';
import { PATH } from '@/constants/path';

import { FaPlusCircle } from 'react-icons/fa';
import { IoMdHome, IoMdNotifications } from 'react-icons/io';
import { Link, useNavigate } from 'react-router-dom';

import { useQuery } from '@tanstack/react-query';

import { ClubWrapper, CreateClubButtonStyled, SidebarContainer, iconStyle } from './SideNav.style';

const SideNav = () => {
  const { data: clubs } = useQuery(['myclubs', 'userid'], () => getMyClub({ id: '1' }), {
    refetchInterval: false,
  }); //userid에 받는 방식 고려 후, 리팩토링
  const navigate = useNavigate();

  return (
    <SidebarContainer>
      <ClubWrapper>
        {clubs?.map((club) => (
          <Link to={`/club/home/${club.id}`}>
            <Avatar key={club.id} avatarSize="normal" profileImageSrc={club.src}></Avatar>
          </Link>
        ))}
      </ClubWrapper>
      <CreateClubButtonStyled>
        <FaPlusCircle size={'1rem'} onClick={() => navigate(`${PATH.CLUB.CREATE}`)} />
      </CreateClubButtonStyled>
      <IoMdHome className={iconStyle} onClick={() => navigate('/')} />
      <IoMdNotifications className={iconStyle} onClick={() => alert('알림페이지 준비 중')} />
      <Link to={`/profile`}>
        <SideBarMyProfile />
      </Link>
    </SidebarContainer>
  );
};

export default SideNav;
