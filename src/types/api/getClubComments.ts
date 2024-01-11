interface GetClubCommentsRequest {
  postId: string;
  pageNumber: number;
}

interface GetClubCommentsResponse {
  data: {
    commentId: string;
    content: string;
    authorId: string;
    author: string;
    authorImageUrl: string;
    createdDate: string;
    lastModifiedDate: string;
    isPrivate: boolean;
  }[];
  sliceData: {
    first: boolean;
    last: boolean;
    number: number;
    size: number;
    numberOfElements: number;
  };
}

export { GetClubCommentsRequest, GetClubCommentsResponse };
