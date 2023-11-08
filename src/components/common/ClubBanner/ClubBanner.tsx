import useGetClubQuery from '@/hooks/query/club/useGetClubQuery';

import { useParams } from 'react-router-dom';

import Avatar from '../Avatar/Avatar';
import ClubCover from '../ClubCover/ClubCover';
import ClubInfo from '../ClubInfo/ClubInfo';
import { ClubAvatarInfoWrapper, ClubBannerContainer } from './ClubBanner.style';

interface ClubBannerProps {
  bannerSize?: 'small' | 'large';
}

const ClubBanner = ({ bannerSize = 'large' }: ClubBannerProps) => {
  const { clubId } = useParams();
  if (!clubId) throw new Error('클럽 ID를 찾을 수 없습니다');

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
