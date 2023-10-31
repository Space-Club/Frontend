import Theme from '@/styles/Theme';
import styled from '@emotion/styled';

const TabContainerStyled = styled.div`
  display: flex;
  align-items: center;
  width: fit-content;
`;

const TabItemStyled = styled.div<{ isActive: boolean }>`
  text-align: center;
  width: fit-content;
  height: 2rem;
  position: relative;
  margin: 0 0.5rem;
  line-height: 2rem;
  color: ${(props) => (props.isActive ? `${Theme.color.activeColor}` : `${Theme.color.black}`)};
  cursor: pointer;

  &:not(:last-of-type)::after {
    content: '';
    position: absolute;
    top: 0.5rem;
    right: -0.5rem;
    width: 1px;
    height: 1rem;
    background-color: ${Theme.color.black};
    cursor: default;
  }
`;

export { TabContainerStyled, TabItemStyled };
