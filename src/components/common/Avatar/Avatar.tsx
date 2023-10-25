import { AvatarShapeType } from '@/types/user';
import { getAvatarSize } from '@/utils/getAvatarSize';

import { AvatarContainerStyled, EditButtonStyled, ProfileImageStyled } from './Avatar.style';

interface AvatarProps {
  avatarShape: AvatarShapeType['avatarShape'];
  profileImageSrc?: string;
  isEdit?: boolean;
  onClick?: () => void;
}

const Avatar = ({ avatarShape, profileImageSrc, isEdit, onClick }: AvatarProps) => {
  const width = getAvatarSize(avatarShape);

  return (
    <div>
      <AvatarContainerStyled onClick={onClick}>
        {profileImageSrc ? (
          <ProfileImageStyled
            avatarShape={avatarShape}
            src={profileImageSrc}
            alt="profile image"
            style={{ width: `${width}`, height: `${width}` }}
          />
        ) : (
          <ProfileImageStyled
            src="https://picsum.photos/200/300"
            avatarShape={avatarShape}
            style={{ width: `${width}`, height: `${width}` }}
            alt="이 부분은 추후 수정 예정입니다."
          />
        )}
        {isEdit && (
          <EditButtonStyled avatarShape={avatarShape}>
            <span>편집아이콘추가예정</span>
          </EditButtonStyled>
        )}
      </AvatarContainerStyled>
    </div>
  );
};

export default Avatar;
