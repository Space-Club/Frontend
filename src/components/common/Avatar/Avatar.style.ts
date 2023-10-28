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
`;

const DefaultImageStyled = styled.div<AvatarShapeType>`
  position: relative;
  width: ${({ avatarShape }) => getAvatarSize(avatarShape)};
  height: ${({ avatarShape }) => getAvatarSize(avatarShape)};
  border-radius: ${({ avatarShape }) => (avatarShape === 'rectangle' ? '1.7rem' : '50%')};
  background-color: white;
  object-fit: cover;
`;

const EditButtonStyled = styled.div<AvatarShapeType>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ avatarShape }) => (avatarShape === 'large' ? '4rem' : '1.5rem')};
  height: ${({ avatarShape }) => (avatarShape === 'large' ? '4rem' : '1.5rem')};
  position: absolute;
  right: 2%;
  bottom: 2%;
  border-radius: 50%;
  background-color: white;
  cursor: pointer;
`;

export {
  getAvatarSize,
  AvatarContainerStyled,
  ProfileImageStyled,
  DefaultImageStyled,
  EditButtonStyled,
};
