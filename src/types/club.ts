interface CreateClubFormValue {
  name: string;
  info: string;
  owner: string;
  image: FileList | null;
}

interface GetClubEventsRequest {
  clubId: number;
  pageNumber: number;
}

interface GetClubEventsResponse {
  data: {
    id: string;
    title: string;
    poster: string;
    startDate: string;
    startTime: string;
    location: string;
    clubName: string;
    clubImage: string;
    openStatus: 'CLUB' | 'ALL'; //혹은 string
  }[];
  pageData: {
    first: boolean;
    last: boolean;
    pageNumber: number;
    size: number;
    totalPages: number;
    totalElement: number;
  };
}

interface getInviteLinkResponse {
  link: 'string'; // TODO 명세서 나올시 수정 필요;
}

export { getInviteLinkResponse, GetClubEventsRequest, GetClubEventsResponse, CreateClubFormValue };
