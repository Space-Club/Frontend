import SearchInputForm from '@/components/SearchInputForm/SearchInputForm';
import SubmittedForms from '@/components/SubmittedForms/SubmittedForms';
import Header from '@/components/common/Header/Header';
import Pagination from '@/components/common/Pagination/Pagination';
import Tab from '@/components/common/Tab/Tab';
import { MAIN_TABS } from '@/constants/tab';
import useGetSubmittedFormsQuery from '@/hooks/query/event/useGetSubmittedFormsQuery';

import { useState } from 'react';
import { useParams } from 'react-router-dom';

import { PaginationWrapper, SubmittedFormsWrapper } from './SubmittedFormsPage.style';

const SubmittedFormsPage = () => {
  const { eventId } = useParams() as { eventId: string };
  const [currentPage, setCurrentPage] = useState(0);
  const { formInfo, userForms, pageData } = useGetSubmittedFormsQuery({
    eventId,
    pageNumber: currentPage,
  });
  if (!formInfo || !userForms || !pageData) {
    return null;
  }

  const { totalPages, size } = pageData;

  const handleChangePage = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <>
      <Header>
        <SearchInputForm />
        <Tab tabItems={MAIN_TABS} />
      </Header>
      <SubmittedFormsWrapper>
        <SubmittedForms formInfo={formInfo} userForms={userForms} />
      </SubmittedFormsWrapper>
      <PaginationWrapper>
        <Pagination totalPages={totalPages} size={size} onChangePage={handleChangePage} />
      </PaginationWrapper>
    </>
  );
};

export default SubmittedFormsPage;
