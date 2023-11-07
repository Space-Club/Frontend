import ConfirmModal from '@/components/Modals/ConfirmModal';
import SearchInputForm from '@/components/SearchInputForm/SearchInputForm';
import Banner from '@/components/common/Banner/Banner';
import EventCard from '@/components/common/EventCard/EventCard';
import Header from '@/components/common/Header/Header';
import Tab from '@/components/common/Tab/Tab';
import { TAB_CONSTANTS } from '@/constants/tab';
import { TabContextProvider } from '@/context/TabContext';
import useAllEventsQuery from '@/hooks/query/event/useAllEventsQuery';

import {
  BannerWrapperStyled,
  ContentContainerStyled,
  EventCardWrapperStyled,
} from './MainPage.style';

const MainPage = () => {
  const { events } = useAllEventsQuery({ pageNumber: 1 }); //TODO: 페이지네이션 처리
  return (
    <TabContextProvider>
      <Header>
        <SearchInputForm />
        <Tab
          defaultTab={`${TAB_CONSTANTS.PERFORMANCE}`}
          tabItems={[
            {
              title: `${TAB_CONSTANTS.PERFORMANCE}`,
            },
            {
              title: `${TAB_CONSTANTS.EVENT_SHOW}`,
            },
            {
              title: `${TAB_CONSTANTS.RECRUITMENT}`,
            },
          ]}
        />
      </Header>
      <ContentContainerStyled>
        <BannerWrapperStyled>
          <Banner width={35} height={20} />
        </BannerWrapperStyled>
        <ConfirmModal message="안녕하세요 난 테스트" confirmLabel="확인" />
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
    </TabContextProvider>
  );
};

export default MainPage;
