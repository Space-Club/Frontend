import { useTabContext } from '@hooks/useTabContext';

/**
 * TabItem 컴포넌트는 현재 활성화된 탭에 속한 내용을 표시하며,
 * useTabContext 커스텀 훅을 사용하여 탭 컨텍스트로부터
 * 현재 활성 탭을 가져와 화면에 표시함
 */

type TabItemProps = {
  index: string; //탭의 식별자
  children: React.ReactNode; //해당 탭의 내용
};

//특정 탭 내용을 렌더링함
const TabItem = ({ index, children }: TabItemProps) => {
  const { activeTab } = useTabContext();
  //useTabContext 커스텀 훅을 사용하여 현재 활성 탭을 가져옴.
  //이를 위해 useTabContext는 TabContext로부터
  //탭 관련 상태를 가져와서 현재 활성 탭을 반환.

  return <>{activeTab === index && children}</>;
  //현재 활성 탭이 현재의 index와 일치하면 children을 렌더링
  //선택한 탭에 속한 내용만 화면에 나타낼 수 있도록 하는 부분
};

export default TabItem;
