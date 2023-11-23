import BreadcrumbContext from '@/context/BreadcrumbContext';

import { useContext } from 'react';

const useBreadcrumbContext = () => {
  const breadcrumbContext = useContext(BreadcrumbContext);

  if (!breadcrumbContext) {
    throw new Error(
      'useBreadcrumbContext는 BreadcrumbContextProvider 내에서만 사용할 수 있습니다. ',
    );
  }

  return breadcrumbContext;
};

export default useBreadcrumbContext;
