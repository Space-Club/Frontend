import { useCallback, useMemo, useState } from 'react';

import { PageButton, PaginationWrapper } from './Pagination.style';

interface Pagination {
  totalPages: number;
  size?: number;
  onChangePage: (page: number) => void;
}

const Pagination = ({ totalPages, size = 10, onChangePage }: Pagination) => {
  const [page, setPage] = useState(0);

  const currentPageSize = Math.floor(page / size);

  const startPage = currentPageSize * size + 1;
  const endPage = Math.min((currentPageSize + 1) * size, totalPages);

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
    onChangePage(totalPages - 1);
    setPage(totalPages - 1);
  }, [onChangePage, totalPages]);

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
      <PageButton onClick={handleNextClick} disabled={page === totalPages - 1}>
        &gt;
      </PageButton>
      <PageButton onClick={handleDoubleNextClick} disabled={page === totalPages - 1}>
        &gt;&gt;
      </PageButton>
    </PaginationWrapper>
  );
};

export default Pagination;
