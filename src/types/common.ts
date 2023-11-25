import { EXCEPTION_CODE } from '@/constants/exceptionCode';

interface PageData {
  first: boolean;
  last: boolean;
  pageNumber: number;
  size: number;
  totalPages: number;
  totalElements: number;
}

type ExceptionCode = (typeof EXCEPTION_CODE)[keyof typeof EXCEPTION_CODE];

interface HttpException {
  exceptionName: string;
  code: ExceptionCode;
}

type ExceptionCodeMessage = {
  [key in ExceptionCode]: string;
};

export { PageData, HttpException, ExceptionCodeMessage };
