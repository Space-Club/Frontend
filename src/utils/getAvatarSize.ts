import { AvatarShapeType } from '@/types/user';

export const getAvatarSize = (avatarShape: AvatarShapeType['avatarShape']) => {
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
