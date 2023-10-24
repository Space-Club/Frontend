import styled from '@emotion/styled';

const KakaoLoginButtonStyled = styled.div`
  width: 300px;
  height: 50px;
  border-radius: 15px;
  background-color: ${(props) => props.theme.color.kakaoYellow};
`;

const KakaoLoginLink = styled.a`
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export { KakaoLoginButtonStyled, KakaoLoginLink };
