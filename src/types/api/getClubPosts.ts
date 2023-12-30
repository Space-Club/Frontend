import { PageData } from '../common';

interface GetClubPostsRequest {
  clubId: string;
  pageNumber: number;
}

interface GetClubPostsResponse {
  posts: {
    postId: string;
    title: string;
    content: string;
    author: string;
    imageUrl: string;
    postDate: string;
  }[];
  pageData: PageData;
}

export { GetClubPostsRequest, GetClubPostsResponse };
