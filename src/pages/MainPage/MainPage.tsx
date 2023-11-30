import MainEvents from '@/components/MainEvents';
import SearchInputForm from '@/components/SearchInputForm/SearchInputForm';
import Banner from '@/components/common/Banner/Banner';
import Header from '@/components/common/Header/Header';
import Spinner from '@/components/common/Spinner/Spinner';
import Tab from '@/components/common/Tab/Tab';
import { MAIN_TABS } from '@/constants/tab';

import { Suspense } from 'react';
import { useLocation } from 'react-router-dom';

import { BannerWrapperStyled, ContentContainerStyled } from './MainPage.style';

const MainPage = () => {
  const { pathname } = useLocation();

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
        <Suspense fallback={<Spinner />}>
          <MainEvents pathname={pathname} />
        </Suspense>
      </ContentContainerStyled>
    </>
  );
};

export default MainPage;
