import ChangeFormStatusButton from '@/components/ChangeFormStatusButton/ChangeFormStatusButton';
import { EventStatus } from '@/types/event';
import { getEventStatusTag } from '@/utils/getEventStatusTag';

import { useParams } from 'react-router-dom';

import ApplyCancelButton from '../../ApplyCancelButton/ApplyCancelButton';
import { FormStatusItemStyled } from './FormStatus.style';

interface FormStatus {
  id: string;
  participationStatus: EventStatus;
}

const FormStatus = ({ id, participationStatus }: FormStatus) => {
  const { eventId } = useParams();
  if (!eventId) {
    return null;
  }

  return (
    <>
      <FormStatusItemStyled>{getEventStatusTag(participationStatus)}</FormStatusItemStyled>
      <FormStatusItemStyled>
        <ChangeFormStatusButton status={participationStatus} eventId={eventId} formId={id} />
      </FormStatusItemStyled>
      <FormStatusItemStyled>
        <ApplyCancelButton
          isCanceled={participationStatus === 'CANCELED'}
          eventId={eventId}
          formUserId={id}
        />
      </FormStatusItemStyled>
    </>
  );
};

export default FormStatus;
