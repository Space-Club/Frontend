import { TAB_CONSTANTS } from '@/constants/tab';
import { useTabContext } from '@/hooks/useTabContext';
import { getKeyByValue } from '@/utils/getKeyByValue';

import { useEffect } from 'react';

import { SeparatorStyled, TabContainerStyled, TabItemStyled } from './Tab.style';

interface TabItemProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  width: string;
}

interface TabProps {
  active?: string;
  maxWidth: string;
  defaultTab?: string;
  tabItems: TabItemProps[];
}

const Tab = ({ active, maxWidth, defaultTab, tabItems }: TabProps) => {
  const { activeTab, setActiveTab } = useTabContext();
  const activeIndex = getKeyByValue(TAB_CONSTANTS, activeTab);

  useEffect(() => {
    if (active) {
      setActiveTab(active);
    } else if (defaultTab) {
      setActiveTab(defaultTab);
    }
  }, [active, setActiveTab, defaultTab]);

  return (
    <TabContainerStyled maxWidth={maxWidth}>
      {tabItems.map((tabItem, index) => {
        const isActive = TAB_CONSTANTS[activeIndex as keyof typeof TAB_CONSTANTS] === tabItem.title;

        const isLastItem = index === tabItems.length - 1;

        return (
          <>
            <TabItemStyled
              key={index}
              isActive={isActive}
              width={tabItem.width}
              onClick={() => {
                setActiveTab(tabItem.title);
              }}
            >
              <span>{tabItem.title}</span>
            </TabItemStyled>
            {!isLastItem && <SeparatorStyled />}
          </>
        );
      })}
    </TabContainerStyled>
  );
};

export default Tab;
