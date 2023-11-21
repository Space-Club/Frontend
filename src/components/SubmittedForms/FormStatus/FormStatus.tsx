import { FORM_STATUS_DROPDOWN_OPTIONS } from '@/constants/form';
import useSubmittedFormStatusMutation from '@/hooks/query/form/useSubmittedFormStatusMutation';
import { EventStatus } from '@/types/event';
import { getEventStatusTag } from '@/utils/getEventStatusTag';

import { useParams } from 'react-router-dom';

import ApplyCancelButton from '../../ApplyCancelButton/ApplyCancelButton';
import DropDown from '../../common/DropDown/DropDown';
import { FormStatusItemStyled } from './FormStatus.style';

interface FormStatus {
  id: string;
  applicationStatus: EventStatus;
}

const FormStatus = ({ id, applicationStatus }: FormStatus) => {
  const { eventId } = useParams();
  const { changeSubmittedFormStatus } = useSubmittedFormStatusMutation();
  if (!eventId) {
    return null;
  }

  return (
    <>
      <FormStatusItemStyled>{getEventStatusTag(applicationStatus)}</FormStatusItemStyled>
      <FormStatusItemStyled>
        <DropDown
          options={FORM_STATUS_DROPDOWN_OPTIONS}
          selectedValue={
            applicationStatus === 'PENDING'
              ? 'PENDING'
              : applicationStatus === 'CONFIRMED'
              ? 'CONFIRMED'
              : 'PENDING'
          }
          onChange={(event) => {
            changeSubmittedFormStatus({
              eventId,
              formUserId: id,
              status: event.target.value as EventStatus,
            });
          }}
        />
      </FormStatusItemStyled>
      <FormStatusItemStyled>
        <ApplyCancelButton isCanceled={applicationStatus === 'CANCELED' ? true : false} />
      </FormStatusItemStyled>
    </>
  );
};

export default FormStatus;
