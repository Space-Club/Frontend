import styled from '@emotion/styled';

const ContainerStyle = styled.div`
  display: flex;
  height: 100vh;
`;

const ItemLogoArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  min-width: 33rem;
  height: 100vh;
  min-height: 33rem;
  border: 0.25rem solid;
`;

const LogoStyle = styled.div`
  width: 30rem;
  height: 30rem;
  border-radius: 50%;
  background: linear-gradient(
    139deg,
    #012a36 10.1%,
    rgba(50, 51, 96, 0.78) 46.84%,
    rgba(113, 42, 124, 0.51) 69.53%,
    rgba(0, 221, 49, 0) 88.79%
  );
`;

const ItemLoginStyle = styled.div`
  width: 50%;
`;

const LoginPage = () => {
  return (
    <ContainerStyle>
      <ItemLogoArea>
        <LogoStyle>로고</LogoStyle>
      </ItemLogoArea>
      <ItemLoginStyle>로그인 부분</ItemLoginStyle>
    </ContainerStyle>
  );
};

export default LoginPage;
