import styled from '@emotion/styled';

export const KakaoLoginButtonStyled = styled.div`
  width: 300px;
  height: 50px;
  border-radius: 15px;
  background-color: ${(props) => props.theme.color.kakaoYellow};
`;

export const KakaoLoginLink = styled.a`
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;
