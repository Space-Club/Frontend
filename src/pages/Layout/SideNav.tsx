import LoginButton from '@/components/LoginButton/LoginButton';
import SideBarMyProfile from '@/components/SideBarMyProfile/SideBarMyProfile';
import Avatar from '@/components/common/Avatar/Avatar';
import { PATH } from '@/constants/path';
import useClubs from '@/hooks/query/club/useClubs';
import useUserImageQuery from '@/hooks/query/user/useUserImageQuery';
import { getStorage } from '@/utils/localStorage';

import { FaPlusCircle } from 'react-icons/fa';
import { IoMdHome, IoMdNotifications } from 'react-icons/io';
import { Link, useNavigate } from 'react-router-dom';

import { ClubWrapper, CreateClubButtonStyled, SidebarContainer, iconStyle } from './SideNav.style';

const SideNav = () => {
  const { clubs } = useClubs();
  const { userImage } = useUserImageQuery();
  const isLoginUser = Boolean(getStorage('token'));

  const navigate = useNavigate();

  return (
    <SidebarContainer>
      <ClubWrapper>
        {clubs?.map((club) => (
          <Link key={club.id} to={PATH.CLUB.HOME(club.id)}>
            <Avatar
              key={club.id}
              avatarSize="normal"
              profileImageSrc={club.logoImageUrl}
              isClub
            ></Avatar>
          </Link>
        ))}
      </ClubWrapper>
      {isLoginUser && (
        <CreateClubButtonStyled>
          <FaPlusCircle size={'1rem'} onClick={() => navigate(`${PATH.CREATE}`)} />
        </CreateClubButtonStyled>
      )}
      <IoMdHome className={iconStyle} onClick={() => navigate('/')} />
      <IoMdNotifications className={iconStyle} onClick={() => alert('알림페이지 준비 중')} />
      {isLoginUser ? (
        <Link to={`/profile`}>
          <SideBarMyProfile profileImageUrl={userImage?.profileImageUrl} />
        </Link>
      ) : (
        <Link to={PATH.LOGIN} style={{ textDecoration: 'none' }}>
          <LoginButton />
        </Link>
      )}
    </SidebarContainer>
  );
};

export default SideNav;
