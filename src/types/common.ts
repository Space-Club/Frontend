interface PageData {
  first: boolean;
  last: boolean;
  pageNumber: number;
  size: number;
  totalPages: number;
  totalElements: number;
}

interface HttpError {
  exceptionName: string;
  code: string;
}

export { PageData, HttpError };
