import { GetClubResponse } from '@/types/api/getClub';

const inviteLinkResponse = {
  invitationCode: 'https://github.com/Space-Club',
};

const club: GetClubResponse = {
  coverImageUrl: 'https://avatars.githubusercontent.com/u/77104140?v=4',
  logoImageUrl: 'https://avatars.githubusercontent.com/u/77104140?v=4',
  info: '스페이스 클럽은 우주에 관심있는 사람들이 모여 만든 동아리입니다.',
  inviteUrl: '',
  memberCount: '10',
  name: '스페이스 클럽',
};

export { inviteLinkResponse, club };
