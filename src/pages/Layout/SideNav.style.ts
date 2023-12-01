import Theme from '@/styles/Theme';
import { hoverBox, sideBarScrollAreaStyled } from '@/styles/common';
import { css } from '@emotion/css';
import styled from '@emotion/styled';

const SidebarContainer = styled.div`
  position: fixed;
  width: 5.7rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding-bottom: 2rem;
  box-sizing: border-box;
  background: ${Theme.color.sidebarColor};
  color: ${Theme.color.gray};
`;

const ClubWrapper = styled(sideBarScrollAreaStyled)`
  overflow: auto;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  width: 100%;

  &:first-of-type {
    padding-top: 1rem;
  }
`;

const ClubLogoWrapper = styled(hoverBox)`
  display: flex;
  justify-content: center;
  width: 100%;
  position: relative;

  div {
    border-radius: 50%;
    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.25);
  }
`;

const CreateClubButtonStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.2rem;

  min-width: 4rem;
  min-height: 4rem;
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  background: ${Theme.color.sidebarBackground};
  box-shadow: 0px 1px 4px 0px ${Theme.color.shadow};
  font-size: ${Theme.fontSize.tagText};
  cursor: pointer;
  transition: transform 0.3s ease-in-out;
  position: relative;

  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: ${Theme.color.tSemiPurple};
  }
`;

const iconStyle = css`
  display: block;
  width: 3rem;
  height: 3rem;
  cursor: pointer;
  fill: rgba(239, 239, 244, 0.3);

  filter: drop-shadow(2px 3px 1px ${Theme.color.shadow});
`;

export { SidebarContainer, ClubWrapper, CreateClubButtonStyled, iconStyle, ClubLogoWrapper };
