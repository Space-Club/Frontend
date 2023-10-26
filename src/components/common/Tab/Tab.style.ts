import Theme from '@/styles/Theme';
import styled from '@emotion/styled';

const TabContainerStyled = styled.div<{ maxWidth: string }>`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  max-width: ${(props) => `${props.maxWidth}rem`};
  width: 100%;
`;

const TabItemStyled = styled.div<{ isActive: boolean; width: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => `${props.width}rem`};
  height: 2rem;
  color: ${(props) => (props.isActive ? `${Theme.color.activeColor}` : `${Theme.color.black}`)};
  cursor: pointer;
`;

const SeparatorStyled = styled.div`
  height: 1.5rem;
  border-left: 0.07rem solid;
`;

export { TabContainerStyled, TabItemStyled, SeparatorStyled };
