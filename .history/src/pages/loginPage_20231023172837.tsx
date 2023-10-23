import styled from '@emotion/styled';

const ContainerStyle = styled.div`
  display: flex;
  height: 100vh;
`;

const ItemLogoArea = styled.div`
  width: 50%;
  min-width: 5rem;
  height: 100vh;
  border: 0.5rem solid;
`;

const LogoStyle = styled.div`
  border-radius: 50%;
  background-color: navy;
`;

const ItemLoginStyle = styled.div`
  width: 50%;
`;

const LoginPage = () => {
  return (
    <ContainerStyle>
      <ItemLogoArea></ItemLogoArea>
      <ItemLoginStyle>로그인 부분</ItemLoginStyle>
    </ContainerStyle>
  );
};

export default LoginPage;
