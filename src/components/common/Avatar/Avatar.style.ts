import Theme from '@/styles/Theme';
import { AvatarSize } from '@/types/user';
import { getAvatarSize } from '@/utils/getAvatarSize';
import styled from '@emotion/styled';

const AvatarContainerStyled = styled.div`
  position: relative;
  display: inline-flex;
  user-select: none;
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
  width: ${({ avatarSize }) => (avatarSize === 'large' ? '2.5rem' : '1rem')};
  height: ${({ avatarSize }) => (avatarSize === 'large' ? '2.5rem' : '1rem')};
  position: absolute;
  right: 8%;
  bottom: 5%;
  border-radius: 50%;
  border: 1px solid ${Theme.color.idkGrey};
  color: ${Theme.color.semiBlack};
  background-color: white;
  cursor: pointer;
`;

export { AvatarContainerStyled, ProfileImageStyled, DefaultImageStyled, EditButtonStyled };
