interface User {
  token: string;
}

type AvatarSize = 'normal' | 'large' | 'small' | 'medium';

type MemberRole = 'MEMBER' | 'MANAGER';

export { User, AvatarSize, MemberRole };
