interface GetClubPostRequest {
  clubId: string;
  postId: string;
}

interface GetClubPostResponse {
  postId: string;
  title: string;
  content: string;
  authorId: string;
  author: string;
  authorImageUrl?: string;
  postImageUrl?: string;
  createdDate: string;
  lastModifiedDate?: string;
}

export { GetClubPostRequest, GetClubPostResponse };
