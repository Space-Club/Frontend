import SideBarMyProfile from '@/components/SideBarMyProfile/SideBarMyProfile';
import Avatar from '@/components/common/Avatar/Avatar';
import { PATH } from '@/constants/path';
import useClubs from '@/hooks/query/club/useClubs';

import { FaPlusCircle } from 'react-icons/fa';
import { IoMdHome, IoMdNotifications } from 'react-icons/io';
import { Link, useNavigate } from 'react-router-dom';

import { ClubWrapper, CreateClubButtonStyled, SidebarContainer, iconStyle } from './SideNav.style';

const SideNav = () => {
  const { clubs, isLoading } = useClubs();
  const navigate = useNavigate();
  console.log(clubs);

  return (
    <SidebarContainer>
      <ClubWrapper>
        {clubs?.map((club) =>
          isLoading ? (
            <div>loading</div>
          ) : (
            <Link to={`${PATH.CLUB.HOME}${club.clubId}`}>
              <Avatar
                key={club.clubId}
                avatarSize="normal"
                profileImageSrc={club.clubImage ?? ''}
              ></Avatar>
            </Link>
          ),
        )}
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
