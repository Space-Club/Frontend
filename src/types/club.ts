interface CreateClubFormValue {
  name: string;
  info: string;
  owner: string;
  image: FileList | null;
}

interface postInviteLinkResponse {
  invitationCode: 'string'; // TODO 명세서 나올시 수정 필요;
}

export { postInviteLinkResponse, CreateClubFormValue };
