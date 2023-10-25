import { AvatarShapeType } from '@/types/user';
import { getAvatarSize } from '@/utils/getAvatarSize';
import styled from '@emotion/styled';

const AvatarContainerStyled = styled.div`
  position: relative;
  display: inline-flex;
`;

const ProfileImageStyled = styled.img<AvatarShapeType>`
  position: relative;
  width: ${({ avatarShape }) => getAvatarSize(avatarShape)};
  height: ${({ avatarShape }) => getAvatarSize(avatarShape)};
  border-radius: ${({ avatarShape }) => (avatarShape === 'rectangle' ? '1.7rem' : '50%')};
  object-fit: cover;
  cursor: ${({ avatarShape }) => (avatarShape === 'large' ? 'default' : 'pointer')};
`;

const EditButtonStyled = styled.div<AvatarShapeType>`
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
