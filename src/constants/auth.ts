export const KAKAO_REST_API_KEY = 'd358bd786d22951d3c433fe2cbcd6689';
export const KAKAO_REDIRECT_URI = 'http://localhost:5173/oauth/kakao';
export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${KAKAO_REST_API_KEY}&redirect_uri=${KAKAO_REDIRECT_URI}&response_type=code`;

interface OauthLoginRequest {
  code: string;
}

interface OauthLoginResponse {
  token: string;
  isNewMember: boolean;
}

export { OauthLoginRequest, OauthLoginResponse };
