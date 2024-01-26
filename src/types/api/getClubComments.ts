import { PageData } from '../common';

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
  pageData: PageData;
}

export { GetClubCommentsRequest, GetClubCommentsResponse };
