import SearchInputForm from '@/components/SearchInputForm/SearchInputForm';
import SearchedEvents from '@/components/SearchedEvents';
import Header from '@/components/common/Header/Header';
import Spinner from '@/components/common/Spinner/Spinner';
import Tab from '@/components/common/Tab/Tab';
import { MAIN_TABS } from '@/constants/tab';

import { Suspense } from 'react';
import { useParams } from 'react-router-dom';

import { SearchMessageStyled, SearchesContainer } from './SearchResultPage.style';

const SearchResultPage = () => {
  const { keyword } = useParams();

  return (
    <>
      <Header>
        <SearchInputForm />
        <Tab tabItems={MAIN_TABS} />
      </Header>
      <SearchMessageStyled>{`"${keyword}" 검색 결과`}</SearchMessageStyled>
      <Suspense fallback={<Spinner />}>
        <SearchesContainer>
          <SearchedEvents keyword={keyword} />
        </SearchesContainer>
      </Suspense>
    </>
  );
};

export default SearchResultPage;
