import styled from '@emotion/styled';

interface AvatarProps {
  avatarShape: 'rectangle' | 'normal' | 'large' | 'small' | 'medium';
}

const getAvatarSize = (avatarShape: AvatarProps['avatarShape']) => {
  switch (avatarShape) {
    case 'normal':
      return '4rem';
    case 'large':
      return '16.3rem';
    case 'small':
      return '1.5rem';
    case 'medium':
      return '6.875rem';
    case 'rectangle':
      return '4.5rem';
    default:
      return '4rem';
  }
};

const AvatarContainerStyled = styled.div`
  position: relative;
  display: inline-flex;
`;

const ProfileImageStyled = styled.img<AvatarProps>`
  position: relative;
  width: ${({ avatarShape }) => getAvatarSize(avatarShape)};
  height: ${({ avatarShape }) => getAvatarSize(avatarShape)};
  border-radius: ${({ avatarShape }) => (avatarShape === 'rectangle' ? '1.7rem' : '50%')};
  object-fit: cover;
  cursor: ${({ avatarShape }) => (avatarShape === 'large' ? 'default' : 'pointer')};
`;

const EditButtonStyled = styled.div<AvatarProps>`
  width: ${({ avatarShape }) => (avatarShape === 'large' ? '4rem' : '2rem')};
  height: ${({ avatarShape }) => (avatarShape === 'large' ? '4rem' : '2rem')};
  position: absolute;
  right: 2%;
  bottom: 2%;
  border-radius: 50%;
  cursor: pointer;
  border: 1px solid;
`;

export { getAvatarSize, AvatarContainerStyled, ProfileImageStyled, EditButtonStyled };
