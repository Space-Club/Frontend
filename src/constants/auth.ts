export const KAKAO_REST_API_KEY = 'd239a34faadbf264fafdf0eeacc7e0fd';
export const KAKAO_REDIRECT_URI =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:5173/oauths/kakao/callback'
    : 'https://spaceclub.vercel.app/oauths/kakao/callback';

export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${KAKAO_REST_API_KEY}&redirect_uri=${KAKAO_REDIRECT_URI}&response_type=code`;
