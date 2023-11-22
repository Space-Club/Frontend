interface PostUserRequest {
  name: string;
  phoneNumber: string;
}

interface PostUserResponse {
  userId: string;
  refreshToken: string;
  accessToken: string;
}

export { PostUserRequest, PostUserResponse };
