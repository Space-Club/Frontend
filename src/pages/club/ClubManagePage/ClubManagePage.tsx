import ClubHeader from '@/components/ClubHeader/ClubHeader';
import ClubSetting from '@/components/ClubSetting/ClubSetting';
import InviteLink from '@/components/InviteLink/InviteLink';
import MemberManager from '@/components/MemberManager/MemberManager';
import ConfirmModal from '@/components/Modals/ConfirmModal';
import { MODAL_TEXT } from '@/constants/modalMessage';
import useDeleteClubMutation from '@/hooks/query/club/useDeleteClubMutation';
import useGetClubQuery from '@/hooks/query/club/useGetClubQuery';
import useModal from '@/hooks/useModal';

import { useParams } from 'react-router-dom';

import {
  ClubManagePageContainer,
  ClubManagePageLeftWrapper,
  ClubManagePageRightWrapper,
  DeleteButton,
} from './ClubManagePage.style';

const ClubManagePage = () => {
  const { clubId } = useParams();
  const {
    showModal: showDeleteModal,
    modalOpen: deleteModalOpen,
    modalClose: deleteModalClose,
  } = useModal();

  if (!clubId) {
    throw new Error('clubId를 URL에서 가져올 수 없습니다.');
  }

  const { deleteClubMutate } = useDeleteClubMutation({ clubId });

  const { clubInfo } = useGetClubQuery({ clubId });
  if (!clubInfo) return null;

  return (
    <>
      {showDeleteModal && (
        <ConfirmModal
          message={MODAL_TEXT.DELETE_CLUB}
          onClose={deleteModalClose}
          onConfirm={() => deleteClubMutate()}
        />
      )}
      <ClubHeader clubId={clubId} />
      <ClubManagePageContainer>
        <ClubManagePageLeftWrapper>
          <MemberManager />
        </ClubManagePageLeftWrapper>
        <ClubManagePageRightWrapper>
          <ClubSetting clubId={clubId} />
          <InviteLink />
          <DeleteButton type="button" buttonText="클럽 삭제하기" onClick={deleteModalOpen} />
        </ClubManagePageRightWrapper>
      </ClubManagePageContainer>
    </>
  );
};

export default ClubManagePage;
