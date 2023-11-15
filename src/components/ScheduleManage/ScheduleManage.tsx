import useClubSchedulesQuery from '@/hooks/query/event/useClubSchedulesQuery';

import ScheduleCalendar from '../ScheduleCalendar/ScheduleCalendar';
import Schedules from '../Schedules/Schedules';
import { ScheduleManageContainer } from './ScheduleManage.style';

const ScheduleManage = () => {
  const { schedules } = useClubSchedulesQuery({ clubId: '1' });
  console.log(schedules);

  return (
    <ScheduleManageContainer>
      <ScheduleCalendar />
      <Schedules />
    </ScheduleManageContainer>
  );
};

export default ScheduleManage;
