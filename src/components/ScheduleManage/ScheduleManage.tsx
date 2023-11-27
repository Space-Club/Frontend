import { SelectedDateContextProvider } from '@/context/SelectedDateContext';
import useClubEventsQuery from '@/hooks/query/club/useClubEventsQuery';

import { useParams } from 'react-router-dom';

import ScheduleCalendar from '../ScheduleCalendar/ScheduleCalendar';
import Schedules from '../Schedules/Schedules';
import { ScheduleManageContainer } from './ScheduleManage.style';

const ScheduleManage = () => {
  const { clubId } = useParams() as { clubId: string };
  const { clubEvents } = useClubEventsQuery({ clubId, isSchedule: true });
  if (!clubEvents) {
    return null;
  }

  return (
    <SelectedDateContextProvider>
      <ScheduleManageContainer>
        <ScheduleCalendar clubEvents={clubEvents} />
        <Schedules clubEvents={clubEvents} />
      </ScheduleManageContainer>
    </SelectedDateContextProvider>
  );
};

export default ScheduleManage;
