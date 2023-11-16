interface EditClubSettingRequest {
  clubId: string;
  logoImage?: File;
  coverImage?: File;
  name?: string;
  info?: string;
}

interface EditClubSettingResponse {}

export { EditClubSettingRequest, EditClubSettingResponse };
