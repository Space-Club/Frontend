import { FORM_STATUS_DROPDOWN_OPTIONS } from '@/constants/form';
import { getEventStatusTag } from '@/utils/getEventStatusTag';

import ApplyCancelButton from '../../ApplyCancelButton/ApplyCancelButton';
import DropDown from '../../common/DropDown/DropDown';
import { FormStatusItemStyled } from './FormStatus.style';

interface FormStatus {
  id: number;
  applicationStatus: 'PENDING' | 'CONFIRMED' | 'CANCELED' | 'CANCEL_REQUESTED';
}

const FormStatus = ({ id, applicationStatus }: FormStatus) => {
  console.log(id); //#TODO: form id로 상태 변경 및 취소 요청

  return (
    <>
      <FormStatusItemStyled>{getEventStatusTag(applicationStatus)}</FormStatusItemStyled>
      <FormStatusItemStyled>
        <DropDown
          options={FORM_STATUS_DROPDOWN_OPTIONS}
          selectedValue={
            applicationStatus === 'PENDING'
              ? 'SELECT'
              : applicationStatus === 'CONFIRMED'
              ? 'CONFIRM'
              : 'SELECT'
          }
          // onChange={} : #TODO :선택값 바뀌면 mutation 호출
        />
      </FormStatusItemStyled>
      <FormStatusItemStyled>
        <ApplyCancelButton isCanceled={applicationStatus === 'CANCELED' ? true : false} />
      </FormStatusItemStyled>
    </>
  );
};

export default FormStatus;
