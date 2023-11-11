import AppliedEventCard from '@/components/common/AppliedEventCard/AppliedEventCard';
import useAppliedEventQuery from '@/hooks/query/event/useAppliedEventQuery';

import { AppliedEventContainer } from './ProfilePage.style';

const AppliedEvents = () => {
  const { events } = useAppliedEventQuery({ pageNumber: 1 });

  return (
    <AppliedEventContainer>
      {events?.map((event) => (
        <AppliedEventCard
          key={event.id}
          eventId={event.id}
          title={event.title}
          posterImageUrl={event.posterImageUrl}
          startDate={event.startDate}
          location={event.location}
          clubName={event.clubName}
          eventTagKey={event.status}
        />
      ))}
    </AppliedEventContainer>
  );
};

export default AppliedEvents;
