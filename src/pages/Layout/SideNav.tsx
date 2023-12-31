import LoginButton from '@/components/LoginButton/LoginButton';
import { LogoTextStyled } from '@/components/LoginButton/LoginButton.style';
import SideBarMyProfile from '@/components/SideBarMyProfile/SideBarMyProfile';
import Avatar from '@/components/common/Avatar/Avatar';
import { PATH } from '@/constants/path';
import useClubs from '@/hooks/query/club/useClubs';
import useMyProfile from '@/hooks/query/user/useMyProfile';
import { getStorage } from '@/utils/localStorage';

import { FaPlusCircle } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';

import {
  ClubLogoWrapper,
  ClubWrapper,
  CreateClubButtonStyled,
  SidebarContainer,
  SidebarToggleButtonStyled,
} from './SideNav.style';

interface SideNavProps extends React.HTMLAttributes<HTMLButtonElement> {
  isSideNavOpen: boolean;
}

const SideNav = ({ isSideNavOpen, ...props }: SideNavProps) => {
  const { clubs } = useClubs();
  const { data } = useMyProfile();
  const isLoginUser = Boolean(getStorage('token'));

  const navigate = useNavigate();

  return (
    <SidebarContainer isOpen={isSideNavOpen}>
      <SidebarToggleButtonStyled {...props}>{isSideNavOpen ? '<' : '>'} </SidebarToggleButtonStyled>
      <LogoTextStyled onClick={() => navigate(PATH.MAIN)}>Space Club</LogoTextStyled>
      {isLoginUser && (
        <CreateClubButtonStyled onClick={() => navigate(PATH.CREATE)}>
          클럽 생성
          <FaPlusCircle size={'1rem'} />
        </CreateClubButtonStyled>
      )}
      <ClubWrapper>
        {clubs?.map((club) => (
          <ClubLogoWrapper key={club.id} data-name={club.name}>
            <Link to={PATH.CLUB.HOME(club.id)}>
              <Avatar
                key={club.id}
                avatarSize="normal"
                profileImageSrc={club.logoImageUrl}
                isClub
                pointer
              ></Avatar>
            </Link>
          </ClubLogoWrapper>
        ))}
      </ClubWrapper>
      {isLoginUser ? (
        <Link to={PATH.PROFILE_APPLIED}>
          <SideBarMyProfile profileImageUrl={data?.profileImageUrl} />
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
