import ManageInfo from '@/assets/image/manageInfo.png';
import NotManageInfo from '@/assets/image/notManageInfo.png';
import AlertModal from '@/components/Modals/AlertModal';
import useModal from '@/hooks/useModal';
import Theme from '@/styles/Theme';

import { useState } from 'react';
import { AiFillQuestionCircle } from 'react-icons/ai';

import {
  CheckBoxContainer,
  CheckBoxInfoWrapper,
  CheckBoxInputStyled,
  CheckBoxLabelStyled,
  ManageInfoImg,
  ManageInfoImgWrapper,
  ManageInfoImgsWrapper,
} from './CheckBox.style';

interface CheckBoxProps {
  onCheck: () => void;
  onUncheck: () => void;
  label: string;
  info?: string;
}

const CheckBox = ({ onCheck, onUncheck, label, info }: CheckBoxProps) => {
  const [isChecked, setIsChecked] = useState(false);

  const { modalClose, showModal, modalOpen } = useModal();

  const handleCheckBoxChange = () => {
    if (isChecked) {
      onUncheck();
    } else {
      onCheck();
    }
    setIsChecked((isChecked) => !isChecked);
  };

  return (
    <>
      {showModal && (
        <AlertModal message={info} onClose={modalClose}>
          <ManageInfoImgsWrapper>
            <ManageInfoImgWrapper>
              관리모드 사용 시
              <ManageInfoImg src={ManageInfo} />
            </ManageInfoImgWrapper>
            <ManageInfoImgWrapper>
              관리모드 미사용 시
              <ManageInfoImg src={NotManageInfo} />
            </ManageInfoImgWrapper>
          </ManageInfoImgsWrapper>
        </AlertModal>
      )}
      <CheckBoxContainer>
        {info && (
          <CheckBoxInfoWrapper onClick={modalOpen}>
            <AiFillQuestionCircle size={17} fill={Theme.color.gray} />
          </CheckBoxInfoWrapper>
        )}
        <CheckBoxLabelStyled>{label}</CheckBoxLabelStyled>
        <CheckBoxInputStyled type="checkbox" onChange={handleCheckBoxChange} />
      </CheckBoxContainer>
    </>
  );
};

export default CheckBox;
