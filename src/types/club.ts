interface Club {
  name: string;
  logoImageUrl: string;
  info: string;
  memberCount: string;
  coverImageUrl?: string;
  inviteUrl: string;
  reverse?: boolean;
}

interface ClubInfo extends Pick<Club, 'name' | 'logoImageUrl'> {}

interface CreateClubFormValue {
  image: File;
  name?: string;
  info?: string;
}

interface Notice {
  id: string;
  notice: string;
}

export { CreateClubFormValue, Club, Notice, ClubInfo };
