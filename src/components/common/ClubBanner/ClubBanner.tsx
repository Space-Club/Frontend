import useGetClubQuery from '@/hooks/query/club/useGetClubQuery';

import Avatar from '../Avatar/Avatar';
import ClubCover from '../ClubCover/ClubCover';
import ClubInfo from '../ClubInfo/ClubInfo';
import { ClubAvatarInfoWrapper, ClubBannerContainer } from './ClubBanner.style';

interface ClubBannerProps {
  clubId: string;
  bannerSize?: 'small' | 'large';
}

const ClubBanner = ({ clubId, bannerSize = 'large' }: ClubBannerProps) => {
  const { clubInfo } = useGetClubQuery({ clubId });

  if (!clubInfo) return null;

  const { coverImageUrl, logoImageUrl, info, memberCount, name } = clubInfo ?? {};

  return (
    <ClubBannerContainer bannerSize={bannerSize}>
      <ClubCover coverImageUrl={coverImageUrl} isTransparent={true}>
        <ClubAvatarInfoWrapper>
          <Avatar avatarSize="medium" isClub={true} profileImageSrc={logoImageUrl} />
          <ClubInfo info={info} name={name} memberCount={memberCount} />
        </ClubAvatarInfoWrapper>
      </ClubCover>
    </ClubBannerContainer>
  );
};

export default ClubBanner;
