import { Dispatch, SetStateAction } from 'react';

import { PageButton, PaginationWrapper } from './Pagination.style';

interface Pagination {
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
  total: number;
  limit: number;
}

const Pagination = ({ page, setPage, total, limit }: Pagination) => {
  const totalPageNum = Math.ceil(total / limit);

  const num = Math.floor(page / 10);

  const startPage = num * 10 + 1;
  const endPage = Math.min((num + 1) * 10, totalPageNum);

  const pageNumbers = [];
  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }

  return (
    <PaginationWrapper>
      <PageButton onClick={() => setPage(0)} disabled={page === 0}>
        &lt;&lt;
      </PageButton>
      <PageButton onClick={() => setPage(page - 1)} disabled={page === 0}>
        &lt;
      </PageButton>
      {pageNumbers.map((value) => (
        <PageButton
          key={value - 1}
          aria-current={page + 1 === value ? 'page' : undefined}
          onClick={() => setPage(value - 1)}
        >
          {value}
        </PageButton>
      ))}
      <PageButton onClick={() => setPage(page + 1)} disabled={page === totalPageNum - 1}>
        &gt;
      </PageButton>
      <PageButton onClick={() => setPage(totalPageNum - 1)} disabled={page === totalPageNum - 1}>
        &gt;&gt;
      </PageButton>
    </PaginationWrapper>
  );
};

export default Pagination;
