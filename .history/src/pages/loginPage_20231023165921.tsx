import styled from '@emotion/styled';

const ContainerStyle = styled.div`
  display: flex;
`;

const ItemLogoArea = styled.div`
  width: 50%;
`;

const ItemLoginStyle = styled.div`
  width: 50%;
`;

const LoginPage = () => {
  return (
    <ContainerStyle>
      <ItemLogoArea>로고</ItemLogoArea>
      <ItemLoginStyle>로그인 부분</ItemLoginStyle>
    </ContainerStyle>
  );
};

export default LoginPage;
