import SearchInputForm from '@/components/SearchInputForm/SearchInputForm';
import Banner from '@/components/common/Banner/Banner';
import EventCard from '@/components/common/EventCard/EventCard';
import Header from '@/components/common/Header/Header';
import Tab from '@/components/common/Tab/Tab';
import { MAIN_TABS } from '@/constants/tab';
import useAllEventsQuery from '@/hooks/query/event/useAllEventsQuery';

import { useLocation } from 'react-router-dom';

import {
  BannerWrapperStyled,
  ContentContainerStyled,
  EventCardWrapperStyled,
} from './MainPage.style';

const MainPage = () => {
  const { pathname } = useLocation();

  const { events } = useAllEventsQuery({
    pageNumber: 1,
    category: pathname === '/' ? 'SHOW' : pathname === '/events' ? 'PROMOTION' : 'RECRUITMENT',
    sort: 'id',
  });

  return (
    <>
      <Header>
        <SearchInputForm />
        <Tab tabItems={MAIN_TABS} />
      </Header>
      <ContentContainerStyled>
        <BannerWrapperStyled>
          <Banner width={35} height={20} />
        </BannerWrapperStyled>
        <EventCardWrapperStyled>
          {events?.map((event) => {
            return (
              <EventCard
                eventId={event.id}
                posterSrc={event.posterImageUrl}
                eventTitle={event.title}
                eventDate={event.startDate}
                eventTime={event.startTime}
                eventPlace={event.location}
                clubName={event.clubName}
              />
            );
          })}
        </EventCardWrapperStyled>
      </ContentContainerStyled>
    </>
  );
};

export default MainPage;
