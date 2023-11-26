import useAllEventsQuery from '@/hooks/query/event/useAllEventsQuery';
import { EmptyEventWrapper } from '@/pages/ProfilePage/ProfilePage.style';

import { useLocation } from 'react-router-dom';

import Carousel from '../CarouselSlider/Carousel';
import {
  BannerBottomTitleStyled,
  BannerContainerStyled,
  BannerImageStyled,
  BannerTopTitleStyled,
  BannerWrapperStyled,
} from './Banner.style';

const Banner = () => {
  const { pathname } = useLocation();

  const { events } = useAllEventsQuery(
    {
      pageNumber: 0,
      category: pathname === '/' ? 'SHOW' : pathname === '/events' ? 'PROMOTION' : 'RECRUITMENT',
      sort: pathname === '/recruitment' ? 'FormInfo.formCloseDateTime' : 'EventInfo.startDateTime',
    },
    pathname,
  );

  return (
    <BannerContainerStyled>
      {events ? (
        <Carousel autoSlide totalItem={1}>
          {events.map((event) => (
            <BannerWrapperStyled>
              <BannerTopTitleStyled>{event.clubInfo.name}신입부원 모집 중</BannerTopTitleStyled>
              <BannerBottomTitleStyled>
                ~{event.formInfo.closeDate} 신청 마감
              </BannerBottomTitleStyled>
              <BannerImageStyled
                src="https://picsum.photos/200/300"
                alt="이 부분은 배너 기본 이미지를 생성 전까진 임시입니다"
              />
            </BannerWrapperStyled>
          ))}
        </Carousel>
      ) : (
        <EmptyEventWrapper>현재 신청 가능한 행사가 없습니다</EmptyEventWrapper>
      )}
    </BannerContainerStyled>
  );
};

export default Banner;
