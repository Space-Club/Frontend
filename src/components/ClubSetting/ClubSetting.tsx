import { ERROR_MESSAGE } from '@/constants/errorMessage';
import useEditClubMutation from '@/hooks/query/club/useEditClubMutation';
import useGetClubQuery from '@/hooks/query/club/useGetClubQuery';
import useToast from '@/hooks/useToast';
import { PurpleButton } from '@/pages/event/EventDetailPage/EventDetailPage.style';
import { validateClubInfo, validateClubName } from '@/utils/validate';

import { useRef } from 'react';

import Avatar from '../common/Avatar/Avatar';
import ClubBanner from '../common/ClubBanner/ClubBanner';
import ClubCover from '../common/ClubCover/ClubCover';
import InputForm from '../common/InputForm/InputForm';
import {
  ClubAvatarInfoEditWrapper,
  ClubCoverEditWrapper,
  ClubInfoEditWrapper,
  ClubInfoEditsWrapper,
} from './ClubSetting.style';

interface ClubSettingProps {
  clubId: string;
}

const ClubSetting = ({ clubId }: ClubSettingProps) => {
  const { createToast } = useToast();
  const { editClub } = useEditClubMutation();
  const { clubInfo } = useGetClubQuery({ clubId });

  const clubNameInputRef = useRef<HTMLInputElement>(null);
  const clubInfoInputRef = useRef<HTMLInputElement>(null);

  const handleCoverImageEdit = (file: File) => {
    editClub({ coverImage: file, clubId });
  };

  const handleAvatarImageEdit = (file: File) => {
    editClub({ logoImage: file, clubId });
  };

  const handleClubNameEdit = () => {
    if (!clubNameInputRef.current) throw new Error(ERROR_MESSAGE.COMMON.CURRENT_REF_ERROR);

    if (validateClubName(clubNameInputRef.current.value)) {
      editClub({ name: clubNameInputRef.current.value, clubId });
    } else {
      createToast({ message: ERROR_MESSAGE.CLUB.VALIDATE_LENGTH_NAME, toastType: 'error' });
    }
  };

  const handleClubInfoEdit = () => {
    if (!clubInfoInputRef.current) throw new Error(ERROR_MESSAGE.COMMON.CURRENT_REF_ERROR);

    if (validateClubInfo(clubInfoInputRef.current.value)) {
      editClub({ info: clubInfoInputRef.current.value, clubId });
    } else if (clubInfoInputRef.current) {
      createToast({ message: ERROR_MESSAGE.CLUB.VALIDATE_LENGTH_INFO, toastType: 'error' });
    }
  };

  if (!clubInfo) return null;
  const { coverImageUrl, logoImageUrl, info, name } = clubInfo;

  return (
    <>
      <ClubAvatarInfoEditWrapper>
        <Avatar
          avatarSize="medium"
          isClub={true}
          profileImageSrc={logoImageUrl}
          isEditable
          onEdit={handleAvatarImageEdit}
        />
        <ClubInfoEditsWrapper>
          <ClubInfoEditWrapper>
            <InputForm
              placeholder={name}
              ref={clubNameInputRef}
              labelText="클럽이름"
              inputType="text"
            />
            <PurpleButton onClick={handleClubNameEdit}>수정</PurpleButton>
          </ClubInfoEditWrapper>
          <ClubInfoEditWrapper>
            <InputForm
              placeholder={info}
              ref={clubInfoInputRef}
              labelText="클럽소개"
              inputType="text"
            />
            <PurpleButton onClick={handleClubInfoEdit}>수정</PurpleButton>
          </ClubInfoEditWrapper>
        </ClubInfoEditsWrapper>
      </ClubAvatarInfoEditWrapper>
      <ClubCoverEditWrapper>
        <ClubCover
          coverImageUrl={coverImageUrl}
          clubId={clubId}
          isEditable
          onEdit={handleCoverImageEdit}
        />
      </ClubCoverEditWrapper>
      <ClubBanner clubId={clubId} bannerSize="small" />
    </>
  );
};

export default ClubSetting;
