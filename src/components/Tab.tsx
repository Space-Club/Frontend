import { TAB_CONSTANTS } from '@/constants/tab';
import { useTabContext } from '@/hooks/useTabContext';
import Theme from '@/styles/Theme';
import { getKeyByValue } from '@/utils/getKeyByValue';
import styled from '@emotion/styled';

import { useEffect } from 'react';

interface TabItemProps {
  title: string;
  width: string;
  onClick?: () => void;
}

interface TabProps {
  active?: string;
  maxWidth: string;
  defaultTab?: string;
  tabItems: TabItemProps[];
}

const TabContainerStyled = styled.div<{ maxWidth: string }>`
  display: flex;
  max-width: ${(props) => `${props.maxWidth}rem`};
`;

const TabItemStyled = styled.div<{ isActive: boolean; width: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => `${props.width}rem`};
  height: 2rem;
  color: ${(props) => (props.isActive ? `${Theme.color.lineColor}` : `${Theme.color.black}`)};
  cursor: pointer;
`;

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
        return (
          <TabItemStyled
            key={index}
            isActive={isActive}
            width={tabItem.width}
            onClick={() => {
              tabItem.onClick?.();
              setActiveTab(tabItem.title);
            }}
          >
            <span>{tabItem.title}</span>
          </TabItemStyled>
        );
      })}
    </TabContainerStyled>
  );
};

export default Tab;
