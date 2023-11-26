import SearchInputForm from '@/components/SearchInputForm/SearchInputForm';
import Banner from '@/components/common/Banner/Banner';
import EventCard from '@/components/common/EventCard/EventCard';
import Header from '@/components/common/Header/Header';
import Pagination from '@/components/common/Pagination/Pagination';
import Spinner from '@/components/common/Spinner/Spinner';
import Tab from '@/components/common/Tab/Tab';
import { MAIN_TABS } from '@/constants/tab';
import useAllEventsQuery from '@/hooks/query/event/useAllEventsQuery';
import { EventsWrapper } from '@/styles/common';

import { Suspense, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { ContentContainerStyled } from './MainPage.style';

const MainPage = () => {
  const { pathname } = useLocation();
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    setCurrentPage(0);
  }, [pathname]);

  const { events, pageData } = useAllEventsQuery(
    {
      pageNumber: currentPage,
      category: pathname === '/' ? 'SHOW' : pathname === '/events' ? 'PROMOTION' : 'RECRUITMENT',
      sort: pathname === '/recruitment' ? 'FormInfo.formCloseDateTime' : 'EventInfo.startDateTime',
    },
    pathname,
  );

  if (!pageData) {
    return null;
  }
  const { totalPages, size } = pageData;

  const handleChangePage = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <>
      <Header>
        <SearchInputForm />
        <Tab tabItems={MAIN_TABS} />
      </Header>
      <Suspense fallback={<Spinner />}>
        <ContentContainerStyled>
          <Banner />
          <EventsWrapper>
            {events?.map(({ id, eventInfo, clubInfo }) => {
              return (
                <EventCard
                  key={id}
                  eventId={id}
                  posterSrc={eventInfo.posterImageUrl}
                  eventTitle={eventInfo.title}
                  startDate={eventInfo.startDate}
                  endDate={eventInfo.endDate}
                  location={eventInfo.location}
                  isEnded={eventInfo.isEnded}
                  clubName={clubInfo.name}
                  clubLogoImageUrl={clubInfo.logoImageUrl}
                />
              );
            })}
          </EventsWrapper>
          <Pagination totalPages={totalPages} size={size} onChangePage={handleChangePage} />
        </ContentContainerStyled>
      </Suspense>
    </>
  );
};

export default MainPage;
