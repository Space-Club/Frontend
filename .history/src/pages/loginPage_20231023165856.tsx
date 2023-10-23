import styled from '@emotion/styled';

const ContainerStyle = styled.div`
  display: flex;
`;

const ItemLogoStyle = styled.div`
  border: 1px;
  width: 50%;
`;

const ItemLoginStyle = styled.div`
  width: 50%;
`;

const LoginPage = () => {
  return (
    <ContainerStyle>
      <ItemLogoStyle>로고</ItemLogoStyle>
      <ItemLoginStyle>로그인 부분</ItemLoginStyle>
    </ContainerStyle>
  );
};

export default LoginPage;
