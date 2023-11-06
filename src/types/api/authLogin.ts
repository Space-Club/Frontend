interface OauthLoginRequest {
  code: string;
}

interface OauthLoginResponse {
  accessToken: string;
  userId: string;
}

export { OauthLoginRequest, OauthLoginResponse };
