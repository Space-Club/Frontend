import ScheduleCalendar from '../ScheduleCalendar/ScheduleCalendar';
import Schedules from '../Schedules/Schedules';
import { ScheduleManageContainer } from './ScheduleManage.style';

const ScheduleManage = () => {
  return (
    <ScheduleManageContainer>
      <ScheduleCalendar />
      <Schedules />
    </ScheduleManageContainer>
  );
};

export default ScheduleManage;
