import { createContext, useState } from 'react';

/*
 * React 애플리케이션에서 탭 (Tab) 관련 상태를 관리하고
 * 다른 컴포넌트들 사이에서 이 상태를 공유하기 위한
 * 컨텍스트 (Context)를 설정
 */

interface TabContextProps {
  /*
   * 탭 컨텍스트에 저장될 상태와
   * 상태를 업데이트하는 함수를 설명하는 프로퍼티
   * 이 컨텍스트는 현재 활성 탭을 추적하고 다른 컴포넌트들이
   * 이 탭을 변경하고 업데이트할 때 사용됨
   */
  activeTab: string;
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
  //React에서 상태를 업데이트하기 위한 함수의 타입
  //React.Dispatch: React에서 상태를 업데이트하는 함수를 나타내는 타입
  //일반적으로 useState와 같은 React 훅에서 반환된 setter 함수.
  //React.SetStateAction<string>: 상태를 업데이트하는 데 사용할 수 있는 값 또는 업데이트 함수를 나타내는 타입
  //string은 업데이트될 상태의 타입을 나타내며, React.SetStateAction<string>은 이 상태를 업데이트하는 데 사용할 수 있는 값 또는 함수의 집합을 나타냄
}

const TabContext = createContext<TabContextProps>({
  activeTab: '',
  setActiveTab: () => {},
});

/*
 * TabContext를 사용하여 탭 상태를 관리하고,
 * 다른 컴포넌트들에게 탭 관련 상태를 제공하는 역할
 */
export const TabContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [activeTab, setActiveTab] = useState(''); //현재 활성 탭

  //TabContext.Provider 컴포넌트를 사용하여 TabContext를 제공
  //이 컨텍스트의 value 프로퍼티에는 현재 activeTab 상태와 setActiveTab 함수가 포함된 객체가 전달됨
  //children 프롭을 통해 이 컨텍스트를 사용할 다른 컴포넌트들을 렌더링
  return <TabContext.Provider value={{ activeTab, setActiveTab }}>{children}</TabContext.Provider>;
};

export default TabContext;
