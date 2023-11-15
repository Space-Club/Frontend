import useEditClubMutation from '@/hooks/query/club/useEditClubMutation';
import useGetClubQuery from '@/hooks/query/club/useGetClubQuery';

import Avatar from '../common/Avatar/Avatar';
import ClubBanner from '../common/ClubBanner/ClubBanner';
import ClubCover from '../common/ClubCover/ClubCover';

interface ClubSettingProps {
  clubId: string;
}

const ClubSetting = ({ clubId }: ClubSettingProps) => {
  const { clubInfo } = useGetClubQuery({ clubId });
  const { editClub } = useEditClubMutation();

  const handleCoverImageEdit = (file: File) => {
    editClub({ image: file, clubId });
  };

  // const handleAvatarImageEdit = (file: File) => {
  //   editClub({ logoImage: file, clubId });
  // };

  if (!clubInfo) return null;

  return (
    <>
      <Avatar
        avatarSize="medium"
        isClub={true}
        profileImageSrc={clubInfo.logoImageUrl}
        isEditable
        // onEdit={handleImageEdit}
      />
      <ClubCover
        coverImageUrl={clubInfo.logoImageUrl}
        clubId={clubId}
        isEditable
        onEdit={handleCoverImageEdit}
      />
      <ClubBanner clubId={clubId} bannerSize="small" />
    </>
  );
};

export default ClubSetting;
