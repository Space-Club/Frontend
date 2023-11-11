interface PatchClubNoticeRequest {
  clubId: string;
  noticeId: string;
  notice: string;
}

interface PatchClubNoticeResponse {
  notice: string;
}

export { PatchClubNoticeRequest, PatchClubNoticeResponse };
