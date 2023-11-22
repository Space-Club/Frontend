import { END_POINTS } from '@/constants/api';
import { SubmittedFormStatusRequest } from '@/types/api/patchSubmittedFormStatus';

import { axiosClientWithAuth } from '../axiosClient';

const patchSubmittedFormStatus = async ({
  eventId,
  formUserId,
  status,
}: SubmittedFormStatusRequest) => {
  await axiosClientWithAuth.patch(END_POINTS.SUBMITTED_FORM_STATUS({ eventId }), {
    formUserId,
    status,
  });
};

export default patchSubmittedFormStatus;
