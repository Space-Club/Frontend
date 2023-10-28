import SearchInputForm from '@/components/SearchInputForm/SearchInputForm';
import Header from '@/components/common/Header/Header';
import Tab from '@/components/common/Tab/Tab';
import { TAB_CONSTANTS } from '@/constants/tab';
import { TabContextProvider } from '@/context/TabContext';

const MainPage = () => {
  return (
    <TabContextProvider>
      <Header style={{ justifyContent: 'space-between' }}>
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
    </TabContextProvider>
  );
};

export default MainPage;
