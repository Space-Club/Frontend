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
