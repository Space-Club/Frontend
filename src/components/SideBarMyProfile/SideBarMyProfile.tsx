import { BiSolidUserCircle } from 'react-icons/bi';

import { MyProfileStyled, ProfileImageStyled } from './SideBarMyProfile.style';

interface SideBarAvatarProps {
  profileImageUrl?: string | null;
}

const SideBarMyProfile = ({ profileImageUrl, ...props }: SideBarAvatarProps) => {
  return (
    <MyProfileStyled {...props}>
      {profileImageUrl ? (
        <ProfileImageStyled>
          <img src={profileImageUrl} alt="my profile image" />
        </ProfileImageStyled>
      ) : (
        <BiSolidUserCircle size="4.6rem" style={{ fill: 'rgba(239, 239, 244, 0.50)' }} />
      )}
    </MyProfileStyled>
  );
};

export default SideBarMyProfile;
