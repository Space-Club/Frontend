import useDeleteProfileImage from '@/hooks/query/user/useDeleteProfileImage';

import { ProfileImageDeleteButtonStyled } from './ProfileImageDeleteButton.style';

const ProfileImageDeleteButton = () => {
  const { deleteImage } = useDeleteProfileImage();

  return (
    <ProfileImageDeleteButtonStyled onClick={() => deleteImage()}>
      기본 이미지로 변경
    </ProfileImageDeleteButtonStyled>
  );
};
export default ProfileImageDeleteButton;
