export const KAKAO_REST_API_KEY = 'd239a34faadbf264fafdf0eeacc7e0fd';
export const KAKAO_REDIRECT_URI = 'http://localhost:5173/oauth/kakao'; //TODO: 나중에 실제 도메인으로 바꾸기
export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${KAKAO_REST_API_KEY}&redirect_uri=${KAKAO_REDIRECT_URI}&response_type=code`;
