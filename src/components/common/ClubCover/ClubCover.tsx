import { ClubCoverContainer, ClubCoverImage, ClubCoverTransparent } from './ClubCover.style';

interface ClubCoverProps {
  coverImageUrl: string;
  isTransparent?: boolean;
  isEditable?: boolean;
  children?: React.ReactNode;
}

//TODO: 배경 변경 API 명세 나오면 구현하기
const ClubCover = ({ coverImageUrl, isTransparent, isEditable, children }: ClubCoverProps) => {
  return (
    <ClubCoverContainer>
      <ClubCoverImage src={coverImageUrl} />
      {isTransparent && <ClubCoverTransparent />}
      {isEditable && <button>변경하기</button>}
      {children}
    </ClubCoverContainer>
  );
};
export default ClubCover;
