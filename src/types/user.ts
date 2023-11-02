interface User {
  token: string;
}

type AvatarSize = 'normal' | 'large' | 'small' | 'medium';

interface GetMyProfileInfoResponse {
  username: string;
  phoneNumber: string;
  profileImageUrl: string;
}

export { User, AvatarSize, GetMyProfileInfoResponse };
