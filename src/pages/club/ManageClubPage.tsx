import ClubSetting from '@/components/ClubSetting/ClubSetting';
import InviteLink from '@/components/InviteLink/InviteLink';
import MemberManager from '@/components/MemberManager/MemberManager';

import { useParams } from 'react-router-dom';

const ManageClubPage = () => {
  const { clubId } = useParams();

  if (!clubId) {
    throw new Error('clubId를 URL에서 가져올 수 없습니다.');
  }

  return (
    <>
      <MemberManager />
      <InviteLink />
      <ClubSetting clubId={clubId} />
    </>
  );
};

export default ManageClubPage;
