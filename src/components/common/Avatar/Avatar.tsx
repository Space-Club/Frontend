import { AvatarSize } from '@/types/user';
import { getAvatarSize } from '@/utils/getAvatarSize';

import { AiFillEdit } from 'react-icons/ai';
import { BiSolidUserCircle } from 'react-icons/bi';
import { IoPeopleCircleSharp } from 'react-icons/io5';

import {
  AvatarContainerStyled,
  DefaultImageStyled,
  EditButtonStyled,
  ProfileImageStyled,
} from './Avatar.style';

interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  avatarSize: AvatarSize;
  profileImageSrc?: string;
  isEditable?: boolean;
  isClub?: boolean;
}

const Avatar = ({ avatarSize, profileImageSrc, isEditable, isClub }: AvatarProps) => {
  const defaultIconSize = getAvatarSize(avatarSize);
  const editIconSize = isEditable ? (avatarSize === 'large' ? '3rem' : '1rem') : undefined;

  return (
    <div>
      <AvatarContainerStyled>
        {profileImageSrc ? (
          <ProfileImageStyled avatarSize={avatarSize} src={profileImageSrc} alt="profile image" />
        ) : (
          <DefaultImageStyled avatarSize={avatarSize}>
            {isClub ? (
              <IoPeopleCircleSharp size={defaultIconSize} color="#A89BB9" />
            ) : (
              <BiSolidUserCircle size={defaultIconSize} color="#A89BB9" />
            )}
          </DefaultImageStyled>
        )}
        {isEditable && (
          <EditButtonStyled avatarSize={avatarSize}>
            <AiFillEdit size={editIconSize} />
          </EditButtonStyled>
        )}
      </AvatarContainerStyled>
    </div>
  );
};

export default Avatar;
