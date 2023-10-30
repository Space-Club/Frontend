import { BiSolidUserCircle } from 'react-icons/bi';

import { MyProfileStyled, ProfileImageStyled } from './SideBarMyProfile.style';

interface SideBarAvatarProps {
  userProfileImageSrc?: string;
}

const SideBarMyProfile = ({ userProfileImageSrc, ...props }: SideBarAvatarProps) => {
  return (
    <MyProfileStyled {...props}>
      {userProfileImageSrc ? (
        <ProfileImageStyled>
          <img src={userProfileImageSrc} alt="my profile image" />
        </ProfileImageStyled>
      ) : (
        <BiSolidUserCircle size="4.6rem" style={{ fill: 'rgba(239, 239, 244, 0.50)' }} />
      )}
    </MyProfileStyled>
  );
};

export default SideBarMyProfile;
