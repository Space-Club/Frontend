import ClubHeader from '@/components/ClubHeader/ClubHeader';
import ClubSetting from '@/components/ClubSetting/ClubSetting';
import InviteLink from '@/components/InviteLink/InviteLink';
import MemberManager from '@/components/MemberManager/MemberManager';
import ConfirmModal from '@/components/Modals/ConfirmModal';
import Spinner from '@/components/common/Spinner/Spinner';
import { MODAL_TEXT } from '@/constants/modalMessage';
import useDeleteClubMutation from '@/hooks/query/club/useDeleteClubMutation';
import useModal from '@/hooks/useModal';

import { Suspense } from 'react';
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
      <Suspense fallback={<Spinner />}>
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
      </Suspense>
    </>
  );
};

export default ClubManagePage;
