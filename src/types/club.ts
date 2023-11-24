interface Club {
  name: string;
  logoImageUrl: string;
  info: string;
  memberCount: string;
  coverImageUrl: string;
  inviteUrl: string;
  reverse?: boolean;
}

interface ClubInfo extends Pick<Club, 'name' | 'logoImageUrl'> {}

interface CreateClubFormValue {
  image: File | null;
  name?: string;
  info?: string;
}

interface getInviteLinkResponse {
  link: 'string'; // TODO 명세서 나올시 수정 필요;
}

interface Notice {
  id: string;
  notice: string;
}

export { getInviteLinkResponse, CreateClubFormValue, Club, Notice, ClubInfo };
