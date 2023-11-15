import { MODAL_TEXT } from '@/constants/modalMessage';
import { FormOptionContext } from '@/context/FormOptionContext';

import { useContext } from 'react';

import CheckBox from '../common/CheckBox/CheckBox';
import { FormCheckOptionsContainer } from './FormCheckOptions.style';

const FormCheckOptions = () => {
  const { setIsManaged, setIsSkip } = useContext(FormOptionContext);

  return (
    <FormCheckOptionsContainer>
      <CheckBox
        label="관리 기능"
        onCheck={() => {
          setIsManaged(true);
        }}
        onUncheck={() => {
          setIsManaged(false);
        }}
        info={MODAL_TEXT.MANAGE_INFO}
      />
      <CheckBox
        label="신청자의 정보는 받지 않겠습니다"
        onCheck={() => {
          setIsSkip(true);
        }}
        onUncheck={() => {
          setIsSkip(false);
        }}
      />
    </FormCheckOptionsContainer>
  );
};

export default FormCheckOptions;
