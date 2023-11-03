interface Club {
  name: string;
  image: string;
  info: string;
  memberCount: 1;
  background: string;
  inviteCode: string;
}

interface CreateClubFormValue extends Pick<Club, 'name' | 'info'> {
  owner: string;
  image: FileList | null;
}

interface getInviteLinkResponse {
  link: 'string'; // TODO 명세서 나올시 수정 필요;
}

export { getInviteLinkResponse, CreateClubFormValue, Club };
