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
          maxWidth="13"
          defaultTab={`${TAB_CONSTANTS.PERFORMANCE}`}
          tabItems={[
            {
              title: `${TAB_CONSTANTS.PERFORMANCE}`,
              width: '3',
            },
            {
              title: `${TAB_CONSTANTS.EVENT_SHOW}`,
              width: '3',
            },
            {
              title: `${TAB_CONSTANTS.RECRUITMENT}`,
              width: '4',
            },
          ]}
        />
      </Header>
    </TabContextProvider>
  );
};

export default MainPage;
