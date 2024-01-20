import { MODAL_TEXT } from '@/constants/modalMessage';
import { useBoundStore } from '@/store/useBoundStore';

import CheckBox from '../common/CheckBox/CheckBox';
import { FormCheckOptionsContainer } from './FormCheckOptions.style';

const FormCheckOptions = () => {
  const { setIsManaged } = useBoundStore();

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
