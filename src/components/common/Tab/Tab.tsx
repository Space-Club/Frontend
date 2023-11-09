import { useTabContext } from '@/hooks/useTabContext';

import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { TabContainerStyled, TabItemStyled } from './Tab.style';

interface TabItem extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  link?: string;
}

interface TabProps {
  defaultTab?: string;
  tabItems: TabItem[];
}

const Tab = ({ tabItems }: TabProps) => {
  const { activeTab, setActiveTab } = useTabContext();
  const navigate = useNavigate();

  useEffect(() => {
    setActiveTab(tabItems[0].title);
  }, [setActiveTab, tabItems]);

  return (
    <TabContainerStyled>
      {tabItems?.map((tabItem, index) => {
        return (
          <TabItemStyled
            key={index}
            isActive={activeTab === tabItem.title}
            onClick={() => {
              setActiveTab(tabItem.title);
              tabItem.link && navigate(tabItem.link);
            }}
          >
            {tabItem.title}
          </TabItemStyled>
        );
      })}
    </TabContainerStyled>
  );
};

export default Tab;
