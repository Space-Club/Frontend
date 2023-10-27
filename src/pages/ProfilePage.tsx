import MyEventCard from '@/components/common/MyEventCard/MyEventCard';

import React from 'react';

const ProfilePage = () => {
  return (
    <div>
      asdf asdf asdf
      <MyEventCard
        posterSrc="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
        eventStatus="cancelled"
        eventId="1"
        eventPlace="고려대학교 SK미래관"
        eventTitle="연어전시회"
        eventDate="12/20"
        clubName="동아리명"
      />
    </div>
  );
};

export default ProfilePage;
