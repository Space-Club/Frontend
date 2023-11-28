import SearchInputForm from '@/components/SearchInputForm/SearchInputForm';
import EventCard from '@/components/common/EventCard/EventCard';
import Header from '@/components/common/Header/Header';
import Pagination from '@/components/common/Pagination/Pagination';
import Tab from '@/components/common/Tab/Tab';
import { MAIN_TABS } from '@/constants/tab';
import useSearchResultQuery from '@/hooks/query/event/useSearchResultQuery';
import { EventsWrapper } from '@/styles/common';

import { useState } from 'react';
import { useParams } from 'react-router-dom';

import { SearchMessageStyled, SearchesContainer } from './SearchResultPage.style';

const SearchResultPage = () => {
  const { keyword } = useParams();
  const [currentPage, setCurrentPage] = useState(0);
  const { data, pageData } = useSearchResultQuery({ keyword: keyword ?? '', page: currentPage });
  if (!pageData) {
    return null;
  }
  const { totalPages, size } = pageData;

  return (
    <>
      <Header>
        <SearchInputForm />
        <Tab tabItems={MAIN_TABS} />
      </Header>
      <SearchMessageStyled>{`"${keyword}" 검색 결과`}</SearchMessageStyled>
      <SearchesContainer>
        <EventsWrapper>
          {data?.map(({ id, eventInfo, clubInfo }) => (
            <EventCard
              key={id}
              eventId={id}
              eventTitle={eventInfo.title}
              startDate={eventInfo.startDate}
              endDate={eventInfo.endDate}
              posterSrc={eventInfo.posterImageUrl}
              location={eventInfo.location}
              clubName={clubInfo.name}
              clubLogoImageUrl={clubInfo.logoImageUrl}
              isEnded={eventInfo.isEnded}
            />
          ))}
          {data?.length === 0 && <div>검색결과가 없습니다.</div>}
          {/* #TODO: CommonEmptyEventStyle로 바꿔주기 */}
        </EventsWrapper>
        <Pagination
          totalPages={totalPages}
          size={size}
          onChangePage={(page) => setCurrentPage(page)}
          currentPage={currentPage}
        />
      </SearchesContainer>
    </>
  );
};

export default SearchResultPage;
