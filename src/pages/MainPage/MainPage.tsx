import SearchInputForm from '@/components/SearchInputForm/SearchInputForm';
import Banner from '@/components/common/Banner/Banner';
import EventCard from '@/components/common/EventCard/EventCard';
import Header from '@/components/common/Header/Header';
import Tab from '@/components/common/Tab/Tab';
import { MAIN_TABS } from '@/constants/event';
import useAllEventsQuery from '@/hooks/query/event/useAllEventsQuery';

import {
  BannerWrapperStyled,
  ContentContainerStyled,
  EventCardWrapperStyled,
} from './MainPage.style';

const MainPage = () => {
  const { events } = useAllEventsQuery({ pageNumber: 1 });
  //TODO: pathname에 따라서 행사 불러오기 혹은 컴포넌트 불러오기

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
                posterSrc={event.poster}
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
