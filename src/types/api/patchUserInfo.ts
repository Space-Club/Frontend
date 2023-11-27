interface PatchUserInfoRequest {
  name: string;
  phoneNumber: string;
}

interface PatchUserInfoResponse {
  userId: string;
  accessToken: string;
  refreshToken: string;
}

export { PatchUserInfoRequest, PatchUserInfoResponse };
