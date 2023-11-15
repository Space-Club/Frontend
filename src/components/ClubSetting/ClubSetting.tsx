import useEditClubMutation from '@/hooks/query/club/useEditClubMutation';
import useGetClubQuery from '@/hooks/query/club/useGetClubQuery';
import { PurpleButton } from '@/pages/event/EventDetailPage/EventDetailPage.style';

import { useRef } from 'react';

import Avatar from '../common/Avatar/Avatar';
import ClubBanner from '../common/ClubBanner/ClubBanner';
import ClubCover from '../common/ClubCover/ClubCover';
import InputForm from '../common/InputForm/InputForm';

interface ClubSettingProps {
  clubId: string;
}

const ClubSetting = ({ clubId }: ClubSettingProps) => {
  const { clubInfo } = useGetClubQuery({ clubId });
  const { editClub } = useEditClubMutation();

  const clubNameInputRef = useRef<HTMLInputElement>(null);
  const clubInfoInputRef = useRef<HTMLInputElement>(null);

  const handleCoverImageEdit = (file: File) => {
    editClub({ image: file, clubId });
  };

  // const handleAvatarImageEdit = (file: File) => {
  //   editClub({ logoImage: file, clubId });
  // };

  const handleClubNameEdit = () => {
    if (clubNameInputRef.current) {
      editClub({ name: clubNameInputRef.current.value, clubId });
    }
  };

  const handleClubInfoEdit = () => {
    if (clubInfoInputRef.current) {
      editClub({ info: clubInfoInputRef.current.value, clubId });
    }
  };

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
      <InputForm ref={clubNameInputRef} labelText="클럽이름" inputType="text" />
      <PurpleButton onClick={handleClubNameEdit}>수정</PurpleButton>
      <InputForm ref={clubInfoInputRef} labelText="클럽소개" inputType="text" />
      <PurpleButton onClick={handleClubInfoEdit}>수정</PurpleButton>
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
