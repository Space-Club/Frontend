import { useCallback, useMemo, useState } from 'react';

import { PageButton, PaginationWrapper } from './Pagination.style';

interface Pagination {
  total: number;
  limit: number;
  pageLength?: number;
  onChangePage: (page: number) => void;
}

const Pagination = ({ total, limit, pageLength = 10, onChangePage }: Pagination) => {
  const [page, setPage] = useState(0);
  const totalPageNum = Math.ceil(total / limit);

  const currentPageSize = Math.floor(page / pageLength);

  const startPage = currentPageSize * pageLength + 1;
  const endPage = Math.min((currentPageSize + 1) * pageLength, totalPageNum);

  const pageNumbers = useMemo(() => {
    return Array.from({ length: endPage - startPage + 1 }, (_, index) => startPage + index);
  }, [startPage, endPage]);

  const handleDoublePrevClick = useCallback(() => {
    onChangePage(0);
    setPage(0);
  }, [onChangePage]);
  const handlePrevClick = useCallback(() => {
    onChangePage(page - 1);
    setPage(page - 1);
  }, [onChangePage, page]);
  const handlePageClick = useCallback(
    (pageNumber: number) => {
      onChangePage(pageNumber - 1);
      setPage(pageNumber - 1);
    },
    [onChangePage],
  );
  const handleNextClick = useCallback(() => {
    onChangePage(page + 1);
    setPage(page + 1);
  }, [onChangePage, page]);
  const handleDoubleNextClick = useCallback(() => {
    onChangePage(totalPageNum - 1);
    setPage(totalPageNum - 1);
  }, [onChangePage, totalPageNum]);

  return (
    <PaginationWrapper>
      <PageButton onClick={handleDoublePrevClick} disabled={page === 0}>
        &lt;&lt;
      </PageButton>
      <PageButton onClick={handlePrevClick} disabled={page === 0}>
        &lt;
      </PageButton>
      {pageNumbers.map((value) => (
        <PageButton
          key={value - 1}
          aria-current={page + 1 === value ? 'page' : undefined}
          onClick={() => handlePageClick(value)}
        >
          {value}
        </PageButton>
      ))}
      <PageButton onClick={handleNextClick} disabled={page === totalPageNum - 1}>
        &gt;
      </PageButton>
      <PageButton onClick={handleDoubleNextClick} disabled={page === totalPageNum - 1}>
        &gt;&gt;
      </PageButton>
    </PaginationWrapper>
  );
};

export default Pagination;
