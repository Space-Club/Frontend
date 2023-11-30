import { InvisibleInput } from '@/styles/common';
import { AvatarSize } from '@/types/user';
import { getAvatarSize } from '@/utils/getAvatarSize';

import { useRef } from 'react';
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
  profileImageSrc?: string | null;
  isEditable?: boolean;
  isClub?: boolean;
  pointer?: boolean;
  onEdit?: (file: File) => void;
}

const Avatar = ({
  avatarSize,
  profileImageSrc,
  isEditable,
  isClub,
  pointer,
  onEdit,
}: AvatarProps) => {
  const defaultIconSize = getAvatarSize(avatarSize);
  const editIconSize = isEditable ? (avatarSize === 'large' ? '1.5rem' : '1rem') : undefined;
  const inputRef = useRef<HTMLInputElement>(null);

  const handleEditButtonClick = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  const handleInputChange = () => {
    if (inputRef.current && inputRef.current.files && onEdit) {
      onEdit(inputRef.current.files[0]);
    }
  };

  return (
    <>
      <AvatarContainerStyled>
        {profileImageSrc ? (
          <ProfileImageStyled
            avatarSize={avatarSize}
            src={profileImageSrc}
            pointer={pointer}
            alt="profile image"
          />
        ) : (
          <DefaultImageStyled avatarSize={avatarSize} pointer={pointer}>
            {isClub ? (
              <IoPeopleCircleSharp size={defaultIconSize} color="#A89BB9" />
            ) : (
              <BiSolidUserCircle size={defaultIconSize} color="#A89BB9" />
            )}
          </DefaultImageStyled>
        )}
        {isEditable && (
          <>
            <InvisibleInput
              onChange={handleInputChange}
              ref={inputRef}
              type="file"
              accept=".jpg, .jpeg, .png, .heic"
            />
            <EditButtonStyled onClick={handleEditButtonClick} avatarSize={avatarSize}>
              <AiFillEdit size={editIconSize} />
            </EditButtonStyled>
          </>
        )}
      </AvatarContainerStyled>
    </>
  );
};

export default Avatar;
