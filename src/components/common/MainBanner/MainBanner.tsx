import useAllEventsQuery from '@/hooks/query/event/useAllEventsQuery';
import { EmptyEventWrapper } from '@/pages/ProfilePage/ProfilePage.style';

import { useLocation } from 'react-router-dom';

import Carousel from '../CarouselSlider/Carousel';
import { ClubCoverTransparent } from '../ClubCover/ClubCover.style';
import {
  BannerBottomTitleStyled,
  BannerContainerStyled,
  BannerImageStyled,
  BannerTopTitleStyled,
  BannerWrapperStyled,
} from './MainBanner.style';

const MainBanner = () => {
  const { pathname } = useLocation();

  const { events } = useAllEventsQuery(
    {
      pageNumber: 0,
      category: pathname === '/' ? 'SHOW' : pathname === '/events' ? 'PROMOTION' : 'RECRUITMENT',
      sort: pathname === '/recruitment' ? 'FormInfo.formCloseDateTime' : 'EventInfo.startDateTime',
    },
    pathname,
  );

  if (!events) return null;

  const availableEvents = events?.filter((event) => !event.eventInfo.isEnded);

  return (
    <BannerContainerStyled>
      {availableEvents.length === 0 ? (
        <EmptyEventWrapper>현재 신청 가능한 행사가 없습니다</EmptyEventWrapper>
      ) : (
        <Carousel autoSlide totalItem={availableEvents.length}>
          {events.map((event) => (
            <BannerWrapperStyled>
              <ClubCoverTransparent />
              <BannerTopTitleStyled>{event.clubInfo.name}신입부원 모집 중</BannerTopTitleStyled>
              <BannerBottomTitleStyled>
                ~{event.eventInfo.endDate} 신청 마감
              </BannerBottomTitleStyled>
              <BannerImageStyled src={event.clubInfo.coverImageUrl} alt="클럽 커버 이미지" />
            </BannerWrapperStyled>
          ))}
        </Carousel>
      )}
    </BannerContainerStyled>
  );
};

export default MainBanner;
