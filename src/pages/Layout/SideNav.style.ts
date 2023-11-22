import Theme from '@/styles/Theme';
import { sideBarScrollAreaStyled } from '@/styles/common';
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
  background: ${Theme.color.logo_2};
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

const ClubLogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  position: relative;

  &:hover::after {
    content: attr(data-name);
    position: absolute;
    bottom: -20%;
    left: 50%;
    padding: 0.1rem;
    transform: translateX(-50%);
    background: ${Theme.color.shadow};
    color: ${Theme.color.tWhiteGrey};
    border-radius: 0.25rem;
    font-size: ${Theme.fontSize.tagText};
    opacity: 1;
    transition: opacity 0.2s ease-in-out;
  }
`;

const CreateClubButtonStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 4rem;
  height: 1.625rem;
  border-radius: 0.75rem;
  background: ${Theme.color.sidebarBackground};
  box-shadow: 0px 1px 4px 0px ${Theme.color.shadow};
  font-size: ${Theme.fontSize.tagText};
  cursor: pointer;

  position: relative;

  &:hover {
    transform: scale(1.1);
    transition: transform 0.3s ease-in-out;
  }

  &::before {
    content: '클럽 생성';
    position: absolute;
    top: -100%;
    background: ${Theme.color.shadow};
    color: ${Theme.color.tWhiteGrey};
    padding: 0.3rem;
    border-radius: 0.25rem;
    opacity: 0;
    transition: opacity 0.2s ease-in-out;
  }

  &:hover::before {
    opacity: 1;
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
