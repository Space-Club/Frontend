import { ERROR_MESSAGE } from '@/constants/errorMessage';
import useEditClubMutation from '@/hooks/query/club/useEditClubMutation';
import useGetClubQuery from '@/hooks/query/club/useGetClubQuery';
import useToast from '@/hooks/useToast';
import { PurpleButton } from '@/pages/event/EventDetailPage/EventDetailPage.style';
import { MediumTitleStyled, SmallTitleStyled } from '@/styles/common';
import { validateClubInfo, validateClubName } from '@/utils/validate';

import { useState } from 'react';

import Avatar from '../common/Avatar/Avatar';
import ClubBanner from '../common/ClubBanner/ClubBanner';
import ClubCover from '../common/ClubCover/ClubCover';
import InputForm from '../common/InputForm/InputForm';
import {
  ClubAvatarInfoEditWrapper,
  ClubBannerPreviewWrapper,
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

  const [editedClubName, setEditedClubName] = useState(clubInfo?.name || '');
  const [editedClubInfo, setEditedInfoName] = useState(clubInfo?.info || '');

  if (!clubInfo) {
    return null;
  }

  const { coverImageUrl, logoImageUrl } = clubInfo;

  const handleCoverImageEdit = (file: File) => {
    editClub({ coverImage: file, clubId });
  };

  const handleAvatarImageEdit = (file: File) => {
    editClub({ logoImage: file, clubId });
  };

  const handleClubNameEdit = () => {
    if (validateClubName(editedClubName)) {
      editClub({ name: editedClubName, clubId });
    } else {
      createToast({ message: ERROR_MESSAGE.CLUB.VALIDATE_LENGTH_NAME, toastType: 'error' });
    }
  };

  const handleClubInfoEdit = () => {
    if (validateClubInfo(editedClubInfo)) {
      editClub({ info: editedClubInfo, clubId });
    } else {
      createToast({ message: ERROR_MESSAGE.CLUB.VALIDATE_LENGTH_INFO, toastType: 'error' });
    }
  };

  return (
    <>
      <MediumTitleStyled>클럽설정</MediumTitleStyled>
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
              onChange={(event) => setEditedClubName(event.target.value)}
              value={editedClubName}
              labelText="클럽이름"
              inputType="text"
            />
            <PurpleButton onClick={handleClubNameEdit}>수정</PurpleButton>
          </ClubInfoEditWrapper>
          <ClubInfoEditWrapper>
            <InputForm
              onChange={(event) => setEditedInfoName(event.target.value)}
              value={editedClubInfo}
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
      <ClubBannerPreviewWrapper>
        <SmallTitleStyled>미리보기</SmallTitleStyled>
        <ClubBanner clubId={clubId} bannerSize="small" />
      </ClubBannerPreviewWrapper>
    </>
  );
};

export default ClubSetting;
