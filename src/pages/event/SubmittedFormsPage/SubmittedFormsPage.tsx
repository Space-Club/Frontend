import SearchInputForm from '@/components/SearchInputForm/SearchInputForm';
import SubmittedForms from '@/components/SubmittedForms/SubmittedForms';
import Breadcrumb from '@/components/common/Breadcrumb/Breadcrumb';
import Header from '@/components/common/Header/Header';
import Pagination from '@/components/common/Pagination/Pagination';
import Tab from '@/components/common/Tab/Tab';
import { MAIN_TABS } from '@/constants/tab';
import useGetSubmittedFormsQuery from '@/hooks/query/event/useGetSubmittedFormsQuery';
import { CommonEmptyEventsWrapper } from '@/styles/common';

import { useState } from 'react';
import { useParams } from 'react-router-dom';

import { SubmittedFormsWrapper } from './SubmittedFormsPage.style';

const SubmittedFormsPage = () => {
  const { eventId } = useParams();
  if (!eventId) {
    throw new Error('id를 찾을 수 없습니다!');
  }
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
      <Breadcrumb eventId={eventId} pageType="submittedForms" />
      <SubmittedFormsWrapper>
        <SubmittedForms formInfo={formInfo} userForms={userForms} />
        {userForms.length === 0 && (
          <CommonEmptyEventsWrapper>제출된 폼이 없습니다.</CommonEmptyEventsWrapper>
        )}
      </SubmittedFormsWrapper>
      <Pagination
        totalPages={totalPages}
        size={size}
        onChangePage={handleChangePage}
        currentPage={currentPage}
      />
    </>
  );
};

export default SubmittedFormsPage;
