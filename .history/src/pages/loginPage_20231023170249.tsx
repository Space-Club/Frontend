import styled from '@emotion/styled';

const ContainerStyle = styled.div`
  display: flex;
  border: 2px;
  height: max-content;
`;

const ItemLogoArea = styled.div`
  width: 50%;
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
      <ItemLogoArea>
        <LogoStyle>로고</LogoStyle>
      </ItemLogoArea>
      <ItemLoginStyle>로그인 부분</ItemLoginStyle>
    </ContainerStyle>
  );
};

export default LoginPage;
