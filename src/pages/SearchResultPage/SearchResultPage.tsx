import SearchInputForm from '@/components/SearchInputForm/SearchInputForm';
import EventCard from '@/components/common/EventCard/EventCard';
import Header from '@/components/common/Header/Header';
import Pagination from '@/components/common/Pagination/Pagination';
import Tab from '@/components/common/Tab/Tab';
import { MAIN_TABS } from '@/constants/tab';
import useSearchResultQuery from '@/hooks/query/event/useSearchResultQuery';

import { useState } from 'react';
import { useParams } from 'react-router-dom';

import {
  PaginationWrapper,
  SearchMessageStyled,
  SearchesContainer,
  SearchesWrapper,
} from './SearchResultPage.style';

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
        <SearchesWrapper>
          {data?.map((event) => (
            <EventCard
              key={event.id}
              eventId={event.id}
              eventTitle={event.eventInfo.title}
              eventDate={event.eventInfo.startDate}
              formCloseDate={event.formInfo.closeDate}
              posterSrc={event.eventInfo.posterImageUrl}
              eventPlace={event.eventInfo.location}
              clubName={event.clubInfo.name}
              clubImageSrc={event.clubInfo.logoImageUrl}
            />
          ))}
        </SearchesWrapper>
        <PaginationWrapper>
          <Pagination
            totalPages={totalPages}
            size={size}
            onChangePage={(page) => setCurrentPage(page)}
          />
        </PaginationWrapper>
      </SearchesContainer>
    </>
  );
};

export default SearchResultPage;
