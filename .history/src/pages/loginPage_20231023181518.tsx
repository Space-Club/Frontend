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
  min-width: 30rem;
  height: 100vh;
  min-height: 30rem;
  border: 0.01rem solid;
`;

const LogoStyle = styled.div`
  width: 28rem;
  height: 28rem;
  border-radius: 50%;
  position: relative;
  background: linear-gradient(
    139deg,
    #012a36 10.1%,
    rgba(50, 51, 96, 0.78) 46.84%,
    rgba(113, 42, 124, 0.51) 69.53%,
    rgba(0, 221, 49, 0) 88.79%
  );
`;

const LogoName = styled.div`
    ;
`;

const ItemLoginStyle = styled.div`
  width: 50%;
  min-width: 30rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TitleStyle = styled.div`
  padding: 10%;
  font-weight: bold;
  font-size: large;
`;

const LoginPage = () => {
  return (
    <ContainerStyle>
      <ItemLogoArea>
        <LogoStyle>
          <div>
            <span>Space</span>
            <span>Club</span>
          </div>
        </LogoStyle>
      </ItemLogoArea>
      <ItemLoginStyle>
        <TitleStyle>스페이스 클럽에 오신 걸 환영합니다!</TitleStyle>
        <button>Login with Kakao</button>
      </ItemLoginStyle>
    </ContainerStyle>
  );
};

export default LoginPage;
