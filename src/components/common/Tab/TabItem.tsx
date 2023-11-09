import { useTabContext } from '@hooks/useTabContext';

type TabItemProps = {
  tabName: string;
  children: React.ReactNode;
};

const TabItem = ({ tabName, children }: TabItemProps) => {
  const { activeTab } = useTabContext();

  return <>{activeTab === tabName && children}</>;
};

export default TabItem;
