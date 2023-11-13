import { MODAL_TEXT } from '@/constants/modalMessage';

import CheckBox from '../common/CheckBox/CheckBox';
import { FormCheckOptionsContainer } from './FormCheckOptions.style';

const FormCheckOptions = () => {
  // const {  } = useContext(FormOptionContext); TODO: FormOptionContext 전역상태 변경

  return (
    <FormCheckOptionsContainer>
      <CheckBox
        label="관리 기능"
        onCheck={() => {}}
        onUncheck={() => {}}
        info={MODAL_TEXT.MANAGE_INFO}
      />
      <CheckBox label="신청자의 정보는 받지 않겠습니다" onCheck={() => {}} onUncheck={() => {}} />
    </FormCheckOptionsContainer>
  );
};

export default FormCheckOptions;
