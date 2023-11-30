import MainEvents from '@/components/MainEvents';
import SearchInputForm from '@/components/SearchInputForm/SearchInputForm';
import Header from '@/components/common/Header/Header';
import MainBanner from '@/components/common/MainBanner/MainBanner';
import Spinner from '@/components/common/Spinner/Spinner';
import Tab from '@/components/common/Tab/Tab';
import { MAIN_TABS } from '@/constants/tab';

import { Suspense } from 'react';
import { useLocation } from 'react-router-dom';

import { ContentContainerStyled } from './MainPage.style';

const MainPage = () => {
  const { pathname } = useLocation();

  return (
    <>
      <Header>
        <SearchInputForm />
        <Tab tabItems={MAIN_TABS} />
      </Header>
      <ContentContainerStyled>
        <MainBanner />
        <Suspense fallback={<Spinner />}>
          <MainEvents pathname={pathname} />
        </Suspense>
      </ContentContainerStyled>
    </>
  );
};

export default MainPage;
