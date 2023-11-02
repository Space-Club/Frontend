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

export { User, AvatarSize, ClubMember };
