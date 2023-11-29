import Theme from '@/styles/Theme';
import { memberManagerScrollAreaStyled } from '@/styles/common';
import styled from '@emotion/styled';

const CheckBoxContainer = styled.div`
  height: 2.5rem;
  display: flex;
  width: fit-content;
  align-items: center;
  border: 1px solid ${Theme.color.gray};
  border-radius: 1rem;
  padding: 0 0.7rem;
`;

const CheckBoxInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right: 0.4rem;
  cursor: pointer;
`;

const CheckBoxLabelStyled = styled.label`
  font-size: ${Theme.fontSize.smallContent};
  margin-right: 0.3rem;
`;

const ManageInfoImgsWrapper = styled(memberManagerScrollAreaStyled)`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  overflow-y: auto;
  height: 25rem;
`;

const ManageInfoImgWrapper = styled.div`
  text-align: center;
  margin-bottom: 2rem;
`;

const ManageInfoImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const CheckBoxInputStyled = styled.input``;

export {
  CheckBoxContainer,
  CheckBoxInfoWrapper,
  CheckBoxLabelStyled,
  CheckBoxInputStyled,
  ManageInfoImgsWrapper,
  ManageInfoImgWrapper,
  ManageInfoImg,
};
