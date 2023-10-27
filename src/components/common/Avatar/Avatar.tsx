import { AvatarShapeType } from '@/types/user';
import { getAvatarSize } from '@/utils/getAvatarSize';

import { AiFillEdit } from 'react-icons/ai';
import { BiSolidUserCircle } from 'react-icons/bi';

import {
  AvatarContainerStyled,
  DefaultImageStyled,
  EditButtonStyled,
  ProfileImageStyled,
} from './Avatar.style';

interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  avatarShape: AvatarShapeType['avatarShape'];
  profileImageSrc?: string;
  isEditable?: boolean;
}

const Avatar = ({ avatarShape, profileImageSrc, isEditable }: AvatarProps) => {
  const defaultIconSize = getAvatarSize(avatarShape);
  const editIconSize = isEditable ? (avatarShape === 'large' ? '3rem' : '1rem') : undefined;

  return (
    <div>
      <AvatarContainerStyled>
        {profileImageSrc ? (
          <ProfileImageStyled avatarShape={avatarShape} src={profileImageSrc} alt="profile image" />
        ) : (
          <DefaultImageStyled avatarShape={avatarShape}>
            <BiSolidUserCircle size={`${defaultIconSize}`} />
          </DefaultImageStyled>
        )}
        {isEditable && (
          <EditButtonStyled avatarShape={avatarShape}>
            <AiFillEdit size={editIconSize} />
          </EditButtonStyled>
        )}
      </AvatarContainerStyled>
    </div>
  );
};

export default Avatar;
