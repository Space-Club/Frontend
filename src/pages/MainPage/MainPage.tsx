import MainEvents from '@/components/MainEvents/MainEvents';
import SearchInputForm from '@/components/SearchInputForm/SearchInputForm';
import Banner from '@/components/common/Banner/Banner';
import Header from '@/components/common/Header/Header';
import Tab from '@/components/common/Tab/Tab';
import { MAIN_TABS } from '@/constants/tab';

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
        <MainEvents pathname={pathname} />
      </ContentContainerStyled>
    </>
  );
};

export default MainPage;
