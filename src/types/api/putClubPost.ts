interface PutClubPostRequest {
  postRequest: {
    title: string;
    content: string;
    doesPostImageExist: boolean;
  };
  image: File | null;
  postId: string | null;
}

export { PutClubPostRequest };
