const transInviteLink = (link: string) =>
  'https://spaceclub.vercel.app/clubs/invite' + link.split('/invite')[1];

export default transInviteLink;
