import useEditClubMutation from '@/hooks/query/club/useEditClubMutation';
import { InvisibleInput } from '@/styles/common';

import { useRef } from 'react';

import {
  ClubCoverContainer,
  ClubCoverEditButtonStyled,
  ClubCoverImage,
  ClubCoverTransparent,
} from './ClubCover.style';

interface ClubCoverProps {
  coverImageUrl: string;
  isTransparent?: boolean;
  isEditable?: boolean;
  children?: React.ReactNode;
}

const ClubCover = ({ coverImageUrl, isTransparent, isEditable, children }: ClubCoverProps) => {
  const editInputRef = useRef<HTMLInputElement>(null);

  const { editClubSetting } = useEditClubMutation();

  const handleEditButtonClick = () => {
    if (editInputRef.current) {
      editInputRef.current.click();
    }
  };

  const handleEditInputChange = () => {
    editClubSetting({ image: editInputRef.current?.files ?? null });
  };

  return (
    <ClubCoverContainer>
      <InvisibleInput
        onChange={handleEditInputChange}
        ref={editInputRef}
        type="file"
      ></InvisibleInput>
      <ClubCoverImage src={coverImageUrl} />
      {isTransparent && <ClubCoverTransparent />}
      {isEditable && (
        <ClubCoverEditButtonStyled onClick={handleEditButtonClick}>
          클럽배경 변경
        </ClubCoverEditButtonStyled>
      )}
      {children}
    </ClubCoverContainer>
  );
};
export default ClubCover;
