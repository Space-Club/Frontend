import SearchInputForm from '@/components/SearchInputForm/SearchInputForm';
import Banner from '@/components/common/Banner/Banner';
import EventCard from '@/components/common/EventCard/EventCard';
import Header from '@/components/common/Header/Header';
import Pagination from '@/components/common/Pagination/Pagination';
import Tab from '@/components/common/Tab/Tab';
import { MAIN_TABS } from '@/constants/tab';
import useAllEventsQuery from '@/hooks/query/event/useAllEventsQuery';

import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import {
  BannerWrapperStyled,
  ContentContainerStyled,
  EventCardWrapperStyled,
  PaginationWrapper,
} from './MainPage.style';

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
      <ContentContainerStyled>
        <BannerWrapperStyled>
          <Banner width={35} height={20} />
        </BannerWrapperStyled>
        <EventCardWrapperStyled>
          {events?.map(({ id, eventInfo, formInfo, clubInfo }) => {
            return (
              <EventCard
                eventId={id}
                posterSrc={eventInfo.posterImageUrl}
                eventTitle={eventInfo.title}
                eventDate={eventInfo.startDate}
                formCloseDate={formInfo.closeDate}
                eventPlace={eventInfo.location}
                clubName={clubInfo.name}
                clubImageSrc={clubInfo.logoImageUrl}
              />
            );
          })}
        </EventCardWrapperStyled>
        <PaginationWrapper>
          <Pagination totalPages={totalPages} size={size} onChangePage={handleChangePage} />
        </PaginationWrapper>
      </ContentContainerStyled>
    </>
  );
};

export default MainPage;
