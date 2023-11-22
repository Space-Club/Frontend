import ClubMember from '@/components/ClubMember/ClubMember';
import ClubNotices from '@/components/ClubNotices/ClubNotices';
import CreateNoticeButton from '@/components/CreateNoticeButton/CreateNoticeButton';
import ScheduleManage from '@/components/ScheduleManage/ScheduleManage';
import ClubBanner from '@/components/common/ClubBanner/ClubBanner';
import Header from '@/components/common/Header/Header';
import Tab from '@/components/common/Tab/Tab';
import { CLUB_TABS } from '@/constants/tab';
import useMemberAuth from '@/hooks/query/club/useMemberAuth';

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
  TabWrapper,
} from './ClubHomePage.style';

const ClubHomePage = () => {
  const { clubId } = useParams();
  if (!clubId) throw new Error('클럽 ID를 찾을 수 없습니다');

  const { role } = useMemberAuth({ clubId });

  if (!role) return null;

  return (
    <>
      <Header>
        <TabWrapper>
          <Tab tabItems={CLUB_TABS(clubId)} />
        </TabWrapper>
      </Header>
      <ClubHomePageContainer>
        <ClubHomeTopWrapper>
          <ClubBanner clubId={clubId} bannerSize="small" />
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
        <ClubHomeBottomWrapper>
          <ScheduleManage />
        </ClubHomeBottomWrapper>
      </ClubHomePageContainer>
    </>
  );
};

export default ClubHomePage;
