import MyEventCard from '@/components/common/MyEventCard/MyEventCard';
import { Event } from '@/types/event';

const ProfilePage = () => {
  const TestEvent: Event = {
    id: '1',
    title: 'Test Event',
    clubName: 'Test Club',
    clubImage: 'https://picsum.photos/200/300',
    startTime: '2023-12-30T00:00:00.000Z',
    startDate: '2023-12-30',
    location: 'Test Location',
    poster: 'https://picsum.photos/200/300',
  };
  return (
    <div>
      <MyEventCard event={TestEvent} eventTagKey="pending" />
    </div>
  );
};

export default ProfilePage;
