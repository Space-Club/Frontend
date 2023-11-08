import SearchInputForm from '@/components/SearchInputForm/SearchInputForm';
import Banner from '@/components/common/Banner/Banner';
import Header from '@/components/common/Header/Header';
import Tab from '@/components/common/Tab/Tab';
import TabItem from '@/components/common/Tab/TabItem';
import { MAIN_TABS } from '@/constants/event';
import { TAB_CONSTANTS } from '@/constants/tab';
import { TabContextProvider } from '@/context/TabContext';

import { BannerWrapperStyled, ContentContainerStyled } from './MainPage.style';
import RenderEventShows from './RenderEventShows';
import RenderPerformances from './RenderPerformances';
import RenderRecruitment from './RenderRecruitment';

const MainPage = () => {
  return (
    <TabContextProvider>
      <Header>
        <SearchInputForm />
        <Tab tabItems={MAIN_TABS} />
      </Header>
      <ContentContainerStyled>
        <BannerWrapperStyled>
          <Banner width={35} height={20} />
        </BannerWrapperStyled>
        <TabItem index={`${TAB_CONSTANTS.PERFORMANCE}`}>
          <RenderPerformances />
        </TabItem>
        <TabItem index={`${TAB_CONSTANTS.EVENT_SHOW}`}>
          <RenderEventShows />
        </TabItem>
        <TabItem index={`${TAB_CONSTANTS.RECRUITMENT}`}>
          <RenderRecruitment />
        </TabItem>
      </ContentContainerStyled>
    </TabContextProvider>
  );
};

export default MainPage;
