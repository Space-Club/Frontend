import Theme from '@/styles/Theme';
import { AvatarSize } from '@/types/user';
import { getAvatarSize } from '@/utils/getAvatarSize';
import styled from '@emotion/styled';

const AvatarContainerStyled = styled.div`
  position: relative;
  display: inline-flex;
`;

const ProfileImageStyled = styled.img<{ avatarSize: AvatarSize; pointer: boolean | undefined }>`
  position: relative;
  width: ${({ avatarSize }) => getAvatarSize(avatarSize)};
  height: ${({ avatarSize }) => getAvatarSize(avatarSize)};
  border-radius: 50%;
  object-fit: cover;
  cursor: ${({ pointer }) => (pointer ? 'pointer' : 'default')};
`;

const DefaultImageStyled = styled.div<{ avatarSize: AvatarSize; pointer: boolean | undefined }>`
  position: relative;
  width: ${(props) => getAvatarSize(props.avatarSize)};
  height: ${({ avatarSize }) => getAvatarSize(avatarSize)};
  border-radius: 50%;
  background-color: #cccccc;
  cursor: ${({ pointer }) => (pointer ? 'pointer' : 'default')};
  object-fit: cover;
`;

const EditButtonStyled = styled.div<{ avatarSize: AvatarSize }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ avatarSize }) => (avatarSize === 'large' ? '4rem' : '1.5rem')};
  height: ${({ avatarSize }) => (avatarSize === 'large' ? '4rem' : '1.5rem')};
  position: absolute;
  right: 2%;
  bottom: 2%;
  border-radius: 50%;
  background-color: ${Theme.color.idkGrey};
  cursor: pointer;
`;

export { AvatarContainerStyled, ProfileImageStyled, DefaultImageStyled, EditButtonStyled };
