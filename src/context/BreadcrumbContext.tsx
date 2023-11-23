import { PropsWithChildren, createContext, useState } from 'react';

interface BreadcrumbContextProps {
  breadcrumb: string[];
  setBreadcrumb: React.Dispatch<React.SetStateAction<string[]>>;
}

const BreadcrumbContext = createContext<BreadcrumbContextProps>({
  breadcrumb: [],
  setBreadcrumb: () => {},
});

export const BreadcrumbContextProvider = ({ children }: PropsWithChildren) => {
  const [breadcrumb, setBreadcrumb] = useState<string[]>(['']);

  return (
    <BreadcrumbContext.Provider value={{ breadcrumb, setBreadcrumb }}>
      {children}
    </BreadcrumbContext.Provider>
  );
};

export default BreadcrumbContext;
