import { PageData } from '../common';

interface GetClubPostsRequest {
  clubId: string;
  pageNumber: number;
}

interface GetClubPostsResponse {
  data: {
    postId: string;
    title: string;
    content: string;
    authorId: string;
    author: string;
    authorImageUrl?: string;
    postImageUrl?: string;
    createdDate: string;
    lastModifiedDate?: string;
  }[];
  pageData: PageData;
}

export { GetClubPostsRequest, GetClubPostsResponse };
