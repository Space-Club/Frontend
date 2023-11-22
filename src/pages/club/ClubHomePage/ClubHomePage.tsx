import ClubHeader from '@/components/ClubHeader/ClubHeader';
import ClubMember from '@/components/ClubMember/ClubMember';
import ClubNotices from '@/components/ClubNotices/ClubNotices';
import CreateNoticeButton from '@/components/CreateNoticeButton/CreateNoticeButton';
import ScheduleManage from '@/components/ScheduleManage/ScheduleManage';
import ClubBanner from '@/components/common/ClubBanner/ClubBanner';

import { useParams } from 'react-router-dom';

import {
  ClubHomeBottomWrapper,
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

  return (
    <>
      <ClubHeader clubId={clubId} />
      <ClubHomePageContainer>
        <ClubHomeTopWrapper>
          <ClubBanner clubId={clubId} bannerSize="small" />
        </ClubHomeTopWrapper>
        <ClubMiddleWrapper>
          <ClubNoticeTextedWrapper>
            <ClubNoticeTextStyled>
              공지사항
              <CreateNoticeButton clubId={clubId} />
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
        <ClubHomeBottomWrapper>
          <ScheduleManage />
        </ClubHomeBottomWrapper>
      </ClubHomePageContainer>
    </>
  );
};

export default ClubHomePage;
