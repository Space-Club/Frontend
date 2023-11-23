import LoginButton from '@/components/LoginButton/LoginButton';
import SideBarMyProfile from '@/components/SideBarMyProfile/SideBarMyProfile';
import Avatar from '@/components/common/Avatar/Avatar';
import { PATH } from '@/constants/path';
import useClubs from '@/hooks/query/club/useClubs';
import useGetUserInfoQuery from '@/hooks/query/user/useUserImageQuery';
import { getStorage } from '@/utils/localStorage';

import { FaPlusCircle } from 'react-icons/fa';
import { IoMdHome, IoMdNotifications } from 'react-icons/io';
import { Link, useNavigate } from 'react-router-dom';

import {
  ClubLogoWrapper,
  ClubWrapper,
  CreateClubButtonStyled,
  SidebarContainer,
  iconStyle,
} from './SideNav.style';

const SideNav = () => {
  const { clubs } = useClubs();
  const { userInfo } = useGetUserInfoQuery();
  const isLoginUser = Boolean(getStorage('token'));

  const navigate = useNavigate();

  return (
    <SidebarContainer>
      <ClubWrapper>
        {clubs?.map((club) => (
          <ClubLogoWrapper data-name={club.name}>
            <Avatar
              key={club.id}
              avatarSize="normal"
              profileImageSrc={club.logoImageUrl}
              isClub
              pointer
              onClick={() => navigate(PATH.CLUB.HOME(club.id))}
            ></Avatar>
          </ClubLogoWrapper>
        ))}
      </ClubWrapper>
      {isLoginUser && (
        <CreateClubButtonStyled>
          <FaPlusCircle size={'1rem'} onClick={() => navigate(PATH.CREATE)} />
        </CreateClubButtonStyled>
      )}
      <IoMdHome className={iconStyle} onClick={() => navigate(PATH.MAIN)} />
      <IoMdNotifications className={iconStyle} onClick={() => alert('알림페이지 준비 중')} />
      {isLoginUser ? (
        <Link to={PATH.PROFILE_APPLIED}>
          <SideBarMyProfile profileImageUrl={userInfo?.profileImageUrl} />
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
