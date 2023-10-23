import styled from '@emotion/styled';

const ContainerStyle = styled.div`
  display: flex;
`;

const ItemLogoStyle = styled.div`
  border: 1px;
`;

const LoginPage = () => {
  return (
    <ContainerStyle>
      <div css={ItemLogoStyle}>로고</div>
      <div className="item_login">로그인 부분</div>
    </ContainerStyle>
  );
};

export default LoginPage;
