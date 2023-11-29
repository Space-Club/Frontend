import ClubHeader from '@/components/ClubHeader/ClubHeader';
import ClubMember from '@/components/ClubMember/ClubMember';
import ClubNotices from '@/components/ClubNotices/ClubNotices';
import CreateNoticeButton from '@/components/CreateNoticeButton/CreateNoticeButton';
import ScheduleManage from '@/components/ScheduleManage/ScheduleManage';
import ClubBanner from '@/components/common/ClubBanner/ClubBanner';
import Spinner from '@/components/common/Spinner/Spinner';
import useMemberAuth from '@/hooks/query/club/useMemberAuth';

import { Suspense } from 'react';
import { useParams } from 'react-router-dom';

import {
  ClubHomePageContainer,
  ClubHomeTopWrapper,
  ClubMemberTextedWrapper,
  ClubMemberWrapper,
  ClubMiddleWrapper,
  ClubNoticeTextStyled,
  ClubNoticeTextedWrapper,
  ClubNoticeWrapper,
} from './ClubHomePage.style';

const ClubHomePage = () => {
  const { clubId } = useParams();
  if (!clubId) throw new Error('클럽 ID를 찾을 수 없습니다');

  const { role } = useMemberAuth({ clubId });

  if (!role) return null;

  return (
    <>
      <ClubHeader clubId={clubId} />
      <Suspense fallback={<Spinner />}>
        <ClubHomePageContainer>
          <ClubHomeTopWrapper>
            <ClubBanner withdrawClubButton clubId={clubId} bannerSize="small" />
          </ClubHomeTopWrapper>
          <ClubMiddleWrapper>
            <ClubNoticeTextedWrapper>
              <ClubNoticeTextStyled>
                공지사항
                {role === 'MANAGER' && <CreateNoticeButton clubId={clubId} />}
              </ClubNoticeTextStyled>
              <ClubNoticeWrapper>
                <ClubNotices clubId={clubId} />
              </ClubNoticeWrapper>
            </ClubNoticeTextedWrapper>
            <ClubMemberTextedWrapper>
              <ClubNoticeTextStyled>멤버</ClubNoticeTextStyled>
              <ClubMemberWrapper>
                <ClubMember clubId={clubId} />
              </ClubMemberWrapper>
            </ClubMemberTextedWrapper>
          </ClubMiddleWrapper>
          <ScheduleManage />
        </ClubHomePageContainer>
      </Suspense>
    </>
  );
};

export default ClubHomePage;
