import Theme from '@/styles/Theme';
import { css } from '@emotion/css';
import styled from '@emotion/styled';

export const Container = styled.div`
  width: 7rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 1rem 0;
  box-sizing: border-box;
  background: ${Theme.color.logo_2};
  color: ${Theme.color.gray};
`;

export const AvatarGroup = styled.div`
  overflow: scroll;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  width: 100%;
`;
export const iconStyle = css`
  display: block;
  width: 2rem;
  height: 2rem;
  cursor: pointer;
`;
