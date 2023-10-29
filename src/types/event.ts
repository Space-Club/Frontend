interface GetMyEventData {
  id: string;
  title: string;
  clubName: string;
  startDate: string;
  location: string;
  status: string; //TODO: EventTagType으로 변경
}

interface GetMyEventResponse {
  data: GetMyEventData[];
  pageData: {
    first: boolean;
    last: boolean;
    pageNumber: number;
    size: number;
    totalPages: number;
    totalElements: number;
  };
}

interface GetMyEventRequest {
  pageNumber: number;
}

export { GetMyEventResponse, GetMyEventRequest };
