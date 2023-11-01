interface GetMyClub {
  clubId: number;
  clubImage: string | null;
  clubName: string;
}

interface GetMyClubsResponse {
  data: GetMyClub[];
}

const myClubs: GetMyClubsResponse = {
  data: [
    {
      clubId: 1,
      clubImage:
        'https://english.seoul.go.kr/wp-content/uploads/2022/09/working-seoul-poster-214x300.jpg',
      clubName: '클럽 1',
    },
    {
      clubId: 2,
      clubImage: 'https://www.europosters.ie/image/framed/750/115398_modenacerna.jpg',
      clubName: '클럽 2',
    },
  ],
};

export { myClubs };
