interface User {
  token: string;
}

interface ClubMember {
  id: string;
  name: string;
  image: string;
  role: string;
}

type AvatarSize = 'normal' | 'large' | 'small' | 'medium';

type MemberRole = 'MEMBER' | 'MANAGER';

export { User, AvatarSize, MemberRole, ClubMember };
