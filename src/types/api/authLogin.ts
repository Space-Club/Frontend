interface OauthLoginRequest {
  code: string;
}

interface OauthLoginResponse {
  accessToken: string;
  refreshToken: string;
  userId: string;
}

export { OauthLoginRequest, OauthLoginResponse };
