import { useTabContext } from '@/hooks/useTabContext';

import { Fragment, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { TabContainerStyled, TabItemStyled } from './Tab.style';

interface TabItemProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  link?: string;
}

interface TabProps {
  defaultTab?: string;
  tabItems: TabItemProps[];
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
          <Fragment key={index}>
            <TabItemStyled
              isActive={activeTab === tabItem.title}
              onClick={() => {
                setActiveTab(tabItem.title);
                tabItem.link && navigate(tabItem.link);
              }}
            >
              {tabItem.title}
            </TabItemStyled>
          </Fragment>
        );
      })}
    </TabContainerStyled>
  );
};

export default Tab;
