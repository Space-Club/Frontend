interface Club {
  name: string;
  logoImageUrl: string;
  info: string;
  memberCount: string;
  coverImageUrl: string;
  inviteUrl: string;
}

interface CreateClubFormValue extends Pick<Club, 'name' | 'info'> {
  owner: string;
  image: FileList | null;
}

interface getInviteLinkResponse {
  link: 'string'; // TODO 명세서 나올시 수정 필요;
}

export { getInviteLinkResponse, CreateClubFormValue, Club };
