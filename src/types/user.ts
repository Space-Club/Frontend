interface User {
  token: string;
}

interface ClubMember {
  id: string;
  name: string;
  image: string;
  role: MemberRole;
}

type AvatarSize = 'normal' | 'large' | 'small' | 'medium';

<<<<<<< HEAD
<<<<<<< HEAD
type MemberRole = 'MEMBER' | 'MANAGER';

export { User, AvatarSize, MemberRole, ClubMember };
=======
interface GetMyProfileInfoResponse {
  username: string;
  phoneNumber: string;
  profileImageUrl: string;
}

export { User, AvatarSize, GetMyProfileInfoResponse };
>>>>>>> 3387a0e (feat: 사용자 정보 가져오는 API 구현)
=======
export { User, AvatarSize };
>>>>>>> e431609 (코드리뷰 profile types 파일 이동및 buttonType추가)
