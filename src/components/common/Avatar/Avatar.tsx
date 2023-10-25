import { AvatarContainerStyled, EditButtonStyled, ProfileImageStyled } from './Avatar.style';

interface AvatarProps {
  avatarShape: 'rectangle' | 'normal' | 'large' | 'small' | 'medium';
  profileImage?: string;
  isEdit?: boolean;
  onClick?: () => void;
}

const getAvatarSize = (avatarShape: AvatarProps['avatarShape']) => {
  switch (avatarShape) {
    case 'small':
      return '1.5rem';
    case 'normal':
      return '4rem';
    case 'rectangle':
      return '4.5rem';
    case 'medium':
      return '6.875rem';
    case 'large':
      return '16.3rem';
    default:
      return '4rem';
  }
};

const Avatar = ({ avatarShape, profileImage, isEdit, onClick }: AvatarProps) => {
  const width = getAvatarSize(avatarShape);
  const height = getAvatarSize(avatarShape);

  return (
    <div>
      <AvatarContainerStyled onClick={onClick}>
        {profileImage ? (
          <ProfileImageStyled
            avatarShape={avatarShape}
            src={profileImage}
            alt="profile image"
            style={{ width: `${width}`, height: `${width}` }}
          />
        ) : (
          <img
            src="https://picsum.photos/200/300"
            width={width}
            height={height}
            style={{ width: `${width}`, height: `${width}` }}
            alt="리액트 아이콘 기본이미지로 바꿀 부분"
          />
        )}
        {isEdit && (
          <EditButtonStyled>
            <span>편집아이콘추가예정</span>
          </EditButtonStyled>
        )}
      </AvatarContainerStyled>
    </div>
  );
};

export default Avatar;
