interface OauthLoginRequest {
  code: string;
}

interface OauthLoginResponse {
  token: string;
  isNewMember: boolean;
}

export { OauthLoginRequest, OauthLoginResponse };
