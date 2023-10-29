import { AvatarSizeType } from '@/types/user';

export const getAvatarSize = (avatarSize: AvatarSizeType['avatarSize']) => {
  switch (avatarSize) {
    case 'small':
      return '1.3rem';
    case 'normal':
      return '3.7rem';
    case 'medium':
      return '6.6rem';
    case 'large':
      return '16rem';
    default:
      return '4rem';
  }
};
