import { axiosClient } from '@/apis/axiosClient';
import { END_POINTS } from '@/constants/api';

import { FieldValues } from 'react-hook-form';

interface postPerformanceForm {
  data: FieldValues;
}

const postPerformanceForm = async ({ data }: postPerformanceForm) => {
  await axiosClient.post(END_POINTS.PERFORMANCE_FORM, { data });
};

export default postPerformanceForm;
