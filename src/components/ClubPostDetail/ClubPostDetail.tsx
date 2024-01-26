import { MODAL_TEXT } from '@/constants/modalMessage';
import { PATH } from '@/constants/path';
import useDeleteClubPostMutation from '@/hooks/query/club/useDeleteClubPostMutation';
import useGetClubPostDetail from '@/hooks/query/club/useGetClubPostDetail';
import useModal from '@/hooks/useModal';
import { getStorage } from '@/utils/localStorage';

import { useNavigate } from 'react-router-dom';

import ConfirmModal from '../Modals/ConfirmModal';
import Avatar from '../common/Avatar/Avatar';
import Button from '../common/Button/Button';
import {
  ButtonWrapper,
  ClubPostDetailContainer,
  PostAuthorWrapper,
  PostContentStyled,
  PostSeparatorStyled,
  PostTitleStyled,
  PostedDateStyled,
} from './ClubPostDetail.style';

interface ClubPostDetailProps {
  clubId: string;
  postId: string;
}

const ClubPostDetail = ({ clubId, postId }: ClubPostDetailProps) => {
  const { clubPostDetail } = useGetClubPostDetail({ clubId, postId });
  const { deletePost } = useDeleteClubPostMutation();
  const { modalClose, modalOpen, showModal } = useModal();
  const navigate = useNavigate();

  if (!clubPostDetail) {
    return null;
  }

  const {
    title,
    content,
    authorId,
    author,
    authorImageUrl,
    postImageUrl,
    createdDate,
    lastModifiedDate,
  } = clubPostDetail;

  const isAuthor = authorId === getStorage('userId');
  const isEdited = createdDate !== lastModifiedDate;
  const postedDate = createdDate.split('T')[0].replaceAll('-', '/');
  const postedTime = createdDate.split('T')[1];

  return (
    <>
      {showModal && (
        <ConfirmModal
          message={MODAL_TEXT.DELETE_CLUB_POST}
          confirmLabel="확인"
          onConfirm={() => deletePost({ postId })}
          onClose={modalClose}
        />
      )}
      <ClubPostDetailContainer>
        {isAuthor && (
          <ButtonWrapper>
            <Button
              buttonText="수정"
              outline
              onClick={() =>
                navigate(PATH.CLUB.WRITE_POST(clubId), {
                  state: {
                    clubPostDetail,
                    postId,
                  },
                })
              }
            />
            <Button buttonText="삭제" onClick={modalOpen} />
          </ButtonWrapper>
        )}
        <PostAuthorWrapper>
          <Avatar avatarSize="small" profileImageSrc={authorImageUrl} />
          {author}
        </PostAuthorWrapper>
        <PostTitleStyled>{title}</PostTitleStyled>
        {postImageUrl && <img src={postImageUrl} />}
        <PostContentStyled>{content}</PostContentStyled>
        <PostedDateStyled>
          {postedDate} {postedTime} {isEdited && <span>(편집됨)</span>}
        </PostedDateStyled>
      </ClubPostDetailContainer>
      <PostSeparatorStyled />
    </>
  );
};

export default ClubPostDetail;
