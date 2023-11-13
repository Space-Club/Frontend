import Theme from '@/styles/Theme';
import styled from '@emotion/styled';

const FormDropDownContainer = styled.div<{ isDropDown: boolean }>`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 15%;
  border: 1px solid;
  border-top-left-radius: 0.25rem;
  border-top-right-radius: 0.25rem;
  border-bottom-left-radius: ${({ isDropDown }) => (isDropDown ? '' : '0.25rem')};
  border-bottom-right-radius: ${({ isDropDown }) => (isDropDown ? '' : '0.25rem')};
`;
const Select = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  padding: 0 0.5rem;
  line-height: 2.5rem;
  border-radius: 0.25rem;
  cursor: pointer;

  &::after {
    content: '▾';
  }
`;
const DropDown = styled.div<{ isDropDown: boolean }>`
  position: absolute;
  top: 2.5rem;
  left: -1px;
  width: 100%;
  border: 1px solid;
  border-top-left-radius: ${({ isDropDown }) => (isDropDown ? '' : '0.25rem')};
  border-top-right-radius: ${({ isDropDown }) => (isDropDown ? '' : '0.25rem')};
  border-bottom-left-radius: 0.25rem;
  border-bottom-right-radius: 0.25rem;
  box-sizing: content-box;
`;
const Option = styled.div`
  width: 100%;
  height: 2.5rem;
  padding-left: 0.5rem;
  line-height: 2.5rem;
  background-color: white;
  cursor: pointer;

  &:hover {
    background-color: ${Theme.color.tSemiActive};
    color: white;
  }
`;

export { FormDropDownContainer, Select, DropDown, Option };
