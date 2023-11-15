import useGetClubQuery from '@/hooks/query/club/useGetClubQuery';

import Avatar from '../common/Avatar/Avatar';
import ClubBanner from '../common/ClubBanner/ClubBanner';
import ClubCover from '../common/ClubCover/ClubCover';

interface ClubSettingProps {
  clubId: string;
}

const ClubSetting = ({ clubId }: ClubSettingProps) => {
  const { clubInfo } = useGetClubQuery({ clubId });

  if (!clubInfo) return null;

  return (
    <>
      <Avatar
        avatarSize="medium"
        isClub={true}
        profileImageSrc={clubInfo.logoImageUrl}
        isEditable
      />
      <ClubCover coverImageUrl={clubInfo.logoImageUrl} isEditable />
      <ClubBanner clubId={clubId} />
    </>
  );
};

export default ClubSetting;
