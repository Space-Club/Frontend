import Theme from '@/styles/Theme';
import { sideBarScrollAreaStyled } from '@/styles/common';
import { css } from '@emotion/css';
import styled from '@emotion/styled';

export const Container = styled.div`
  position: fixed;
  width: 7rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding-bottom: 1rem;
  box-sizing: border-box;
  background: ${Theme.color.logo_2};
  color: ${Theme.color.gray};
`;

export const AvatarGroup = styled(sideBarScrollAreaStyled)`
  overflow: auto;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  width: 100%;

  &:first-child {
    padding-top: 1rem;
  }
`;
export const iconStyle = css`
  display: block;
  width: 2rem;
  height: 2rem;
  cursor: pointer;
`;
