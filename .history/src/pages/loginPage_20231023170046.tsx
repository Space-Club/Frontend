import styled from '@emotion/styled';

const ContainerStyle = styled.div`
  display: flex;
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
        <div>로고</div>
      </ItemLogoArea>
      <ItemLoginStyle>로그인 부분</ItemLoginStyle>
    </ContainerStyle>
  );
};

export default LoginPage;
