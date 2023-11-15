interface EditClubSettingRequest {
  clubId: string;
  image?: File;
  name?: string;
  info?: string;
}

interface EditClubSettingResponse {}

export { EditClubSettingRequest, EditClubSettingResponse };
