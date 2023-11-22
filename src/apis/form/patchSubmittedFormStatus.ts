import { END_POINTS } from '@/constants/api';
import { SubmittedFormStatusRequest } from '@/types/api/patchSubmittedFormStatus';

import { axiosClientWithAuth } from '../axiosClient';

const patchSubmittedFormStatus = async ({
  eventId,
  formUserId,
  participationStatus,
}: SubmittedFormStatusRequest) => {
  await axiosClientWithAuth.patch(END_POINTS.SUBMITTED_FORM_STATUS({ eventId }), {
    formUserId,
    participationStatus,
  });
};

export default patchSubmittedFormStatus;
