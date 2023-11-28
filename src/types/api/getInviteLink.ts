interface getInviteLinkRequest {
  clubId: string;
}

interface getInviteLinkResponse {
  inviteLink: string;
  isExpired: boolean;
}

export { getInviteLinkRequest, getInviteLinkResponse };
