import { useTabContext } from '@/hooks/useTabContext';

import { useEffect } from 'react';

import { TabContainerStyled, TabItemStyled } from './Tab.style';

interface TabItemProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
}

interface TabProps {
  maxWidth: string;
  defaultTab?: string;
  tabItems: TabItemProps[];
}

const Tab = ({ maxWidth, tabItems }: TabProps) => {
  const { activeTab, setActiveTab } = useTabContext();

  useEffect(() => {
    setActiveTab(tabItems[0].title);
  }, [setActiveTab, tabItems]);

  return (
    <TabContainerStyled maxWidth={maxWidth}>
      {tabItems.map((tabItem, index) => {
        return (
          <>
            <TabItemStyled
              key={index}
              isActive={activeTab === tabItem.title}
              onClick={() => {
                setActiveTab(tabItem.title);
              }}
            >
              {tabItem.title}
            </TabItemStyled>
          </>
        );
      })}
    </TabContainerStyled>
  );
};

export default Tab;
