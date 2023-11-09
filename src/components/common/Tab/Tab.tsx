import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { TabContainerStyled, TabItemStyled } from './Tab.style';

interface TabItem extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  link: string;
}

interface TabProps {
  tabItems: TabItem[];
}

const Tab = ({ tabItems }: TabProps) => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(location.pathname);
  const navigate = useNavigate();

  console.log(activeTab, location.pathname);

  useEffect(() => {
    setActiveTab(location.pathname);
  }, [setActiveTab, location]);

  return (
    <TabContainerStyled>
      {tabItems?.map((tabItem, index) => {
        return (
          <TabItemStyled
            key={index}
            isActive={activeTab === tabItem.link}
            onClick={() => {
              setActiveTab(tabItem.link);
              navigate(tabItem.link);
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
