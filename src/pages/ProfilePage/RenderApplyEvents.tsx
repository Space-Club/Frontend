import MyEventCard from '@/components/common/MyEventCard/MyEventCard';
import useMyEventQuery from '@/hooks/query/event/useMyEventQuery';

import { MyEventContainer } from './ProfilePage.style';

const RenderApplyEvents = () => {
  const { events } = useMyEventQuery({ pageNumber: 1 });

  return (
    <MyEventContainer>
      {events?.map((event) => (
        <MyEventCard
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
    </MyEventContainer>
  );
};

export default RenderApplyEvents;
