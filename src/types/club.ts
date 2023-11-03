interface CreateClubFormValue {
  name: string;
  info: string;
  owner: string;
  image: FileList | null;
}

interface getInviteLinkResponse {
  invitationCode: 'string'; // TODO 명세서 나올시 수정 필요;
}

export { getInviteLinkResponse, CreateClubFormValue };
