import { MODAL_TEXT } from '@/constants/modalMessage';
import { FormOptionContext } from '@/context/FormOptionContext';

import { useContext } from 'react';

import CheckBox from '../common/CheckBox/CheckBox';
import { FormCheckOptionsContainer } from './FormCheckOptions.style';

const FormCheckOptions = () => {
  const { setIsManaged } = useContext(FormOptionContext);

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
    </FormCheckOptionsContainer>
  );
};

export default FormCheckOptions;
