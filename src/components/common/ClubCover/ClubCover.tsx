import { InvisibleInput } from '@/styles/common';

import { useRef } from 'react';

import {
  ClubCoverContainer,
  ClubCoverEditButtonStyled,
  ClubCoverEmptyWrapper,
  ClubCoverImage,
  ClubCoverTransparent,
} from './ClubCover.style';

interface ClubCoverProps {
  isTransparent?: boolean;
  coverImageUrl?: string;
  isEditable?: boolean;
  children?: React.ReactNode;
  clubId?: string;
  onEdit?: (file: File) => void;
}

const ClubCover = ({
  coverImageUrl,
  isTransparent,
  isEditable,
  children,
  onEdit,
}: ClubCoverProps) => {
  const editInputRef = useRef<HTMLInputElement>(null);

  const handleEditButtonClick = () => {
    if (editInputRef.current) {
      editInputRef.current.click();
    }
  };

  const handleEditInputChange = () => {
    if (editInputRef.current && editInputRef.current.files && onEdit) {
      onEdit(editInputRef.current.files[0]);
    }
  };

  return (
    <ClubCoverContainer>
      <InvisibleInput
        onChange={handleEditInputChange}
        ref={editInputRef}
        type="file"
      ></InvisibleInput>
      {coverImageUrl ? (
        <ClubCoverImage src={coverImageUrl} />
      ) : (
        <ClubCoverEmptyWrapper>클럽 배경을 설정해주세요</ClubCoverEmptyWrapper>
      )}
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
