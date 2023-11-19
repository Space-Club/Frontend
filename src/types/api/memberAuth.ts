interface MemberAuthRequest {
  clubId: string;
}

interface MemberAuthResponse {
  role: string;
}

export { MemberAuthRequest, MemberAuthResponse };
