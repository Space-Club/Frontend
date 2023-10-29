import { AvatarSizeType } from '@/types/user';
import { getAvatarSize } from '@/utils/getAvatarSize';
import styled from '@emotion/styled';

const AvatarContainerStyled = styled.div`
  position: relative;
  display: inline-flex;
`;

const ProfileImageStyled = styled.img<AvatarSizeType>`
  position: relative;
  width: ${({ avatarSize }) => getAvatarSize(avatarSize)};
  height: ${({ avatarSize }) => getAvatarSize(avatarSize)};
  border-radius: 50%;
  object-fit: cover;
`;

const DefaultImageStyled = styled.div<AvatarSizeType>`
  position: relative;
  width: ${({ avatarSize }) => getAvatarSize(avatarSize)};
  height: ${({ avatarSize }) => getAvatarSize(avatarSize)};
  border-radius: 50%;
  background-color: #cccccc;
  object-fit: cover;
`;

const EditButtonStyled = styled.div<AvatarSizeType>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ avatarSize }) => (avatarSize === 'large' ? '4rem' : '1.5rem')};
  height: ${({ avatarSize }) => (avatarSize === 'large' ? '4rem' : '1.5rem')};
  position: absolute;
  right: 2%;
  bottom: 2%;
  border-radius: 50%;
  background-color: white;
  cursor: pointer;
`;

export { AvatarContainerStyled, ProfileImageStyled, DefaultImageStyled, EditButtonStyled };
