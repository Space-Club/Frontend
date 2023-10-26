import TabContext from '@/context/TabContext';

import { useContext } from 'react';

export const useTabContext = () => {
  const context = useContext(TabContext);
  //useContext 훅을 사용하여 TabContext를 가져옴
  //이 컨텍스트는 탭 관련 상태를 포함하고, 다른 컴포넌트에서 이 상태를 사용하거나 업데이트할 수 있게 함
  //이 컨텍스트는 TabContextProvider 컴포넌트를 통해 사용 가능한 상태를 제공하며, useTabContext를 호출하는 컴포넌트에서 이 상태를 이용할 수 있게 됨
  if (!context) {
    //만약 context가 존재하지 않으면, 컨텍스트가 정확한 컴포넌트 계층 구조 내에서 사용되지 않았다는 것을 의미함
    //따라서 에러를 throw하여 개발자에게 알린다.
    throw new Error('useTabContext must be used within a TabProvider');
  }
  return context;
  //컨텍스트가 정상적으로 존재한다면, context 객체를 반환
  //이 객체에는 컨텍스트에서 관리하는 상태와 상태를 업데이트하는 함수가 들어 있음
  //이를 통해 다른 컴포넌트에서 탭 관련 상태를 읽거나 업데이트할 수 있다.
};
