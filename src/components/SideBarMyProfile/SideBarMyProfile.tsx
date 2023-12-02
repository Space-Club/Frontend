import Theme from '@/styles/Theme';

import { BiSolidUserCircle } from 'react-icons/bi';

import { MyProfileStyled, ProfileImageStyled } from './SideBarMyProfile.style';

interface SideBarAvatarProps {
  profileImageUrl?: string | null;
}

const SideBarMyProfile = ({ profileImageUrl, ...props }: SideBarAvatarProps) => {
  return (
    <MyProfileStyled {...props}>
      {profileImageUrl ? (
        <ProfileImageStyled src={profileImageUrl} alt="my profile image" />
      ) : (
        <BiSolidUserCircle size="4.6rem" style={{ fill: Theme.color.tSemiPurple }} />
      )}
    </MyProfileStyled>
  );
};

export default SideBarMyProfile;
