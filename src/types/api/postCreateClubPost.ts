interface PostCreateClubPostRequest {
  clubId: string;
  title: string;
  content: string;
  image: File | null;
}

export { PostCreateClubPostRequest };
