interface PatchClubNoticeRequest {
  clubId: string;
  noticeId: string;
}

interface PatchClubNoticeResponse {
  notice: string;
}

export { PatchClubNoticeRequest, PatchClubNoticeResponse };
