import { KAKAO_AUTH_URL } from '@/constants/auth';

import { KakaoLoginButtonStyled, KakaoLoginLink } from './KakaoAuthButton.style';

const KakaoLoginButton = () => {
  return (
    <KakaoLoginButtonStyled>
      <KakaoLoginLink href={KAKAO_AUTH_URL}>카카오계정으로 로그인하기</KakaoLoginLink>
    </KakaoLoginButtonStyled>
  );
};

export default KakaoLoginButton;
