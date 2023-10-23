import { css, jsx } from '@emotion/react';

const ContainerStyle = css`
  display: flex;
`;

const ItemLogoStyle = css`
  border: 1rem;
`;

const LoginPage = () => {
  return (
    <div css={ContainerStyle}>
      <div css={ItemLogoStyle}>로고</div>
      <div className="item_login">로그인 부분</div>
    </div>
  );
};

export default LoginPage;
