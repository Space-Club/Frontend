interface PostUserRequest {
  nickname: string;
  phoneNumber: string;
}

interface PostUserResponse {
  userId: string;
  accessToken: string;
}

export { PostUserRequest, PostUserResponse };
