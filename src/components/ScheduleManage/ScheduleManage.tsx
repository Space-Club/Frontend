import { SelectedDateContextProvider } from '@/context/SelectedDateContext';
import useClubSchedulesQuery from '@/hooks/query/event/useClubSchedulesQuery';

import { useParams } from 'react-router-dom';

import ScheduleCalendar from '../ScheduleCalendar/ScheduleCalendar';
import Schedules from '../Schedules/Schedules';
import { ScheduleManageContainer } from './ScheduleManage.style';

const ScheduleManage = () => {
  const { clubId } = useParams() as { clubId: string };
  const { data } = useClubSchedulesQuery({ clubId });
  if (!data) {
    return null;
  }

  return (
    <SelectedDateContextProvider>
      <ScheduleManageContainer>
        <ScheduleCalendar schedules={data.schedules} />
        <Schedules schedules={data.schedules} />
      </ScheduleManageContainer>
    </SelectedDateContextProvider>
  );
};

export default ScheduleManage;
