interface OauthLoginRequest {
  code: string;
}

interface OauthLoginResponse {
  token: string;
  userId: string;
}

export { OauthLoginRequest, OauthLoginResponse };
