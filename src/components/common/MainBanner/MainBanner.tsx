import { MAIN_BANNER_EVENTS_TEXT } from '@/constants/event';
import { PATH } from '@/constants/path';
import useGetMainBannerQuery from '@/hooks/query/event/useGetMainBannerQuery';
import { EmptyEventWrapper } from '@/pages/ProfilePage/ProfilePage.style';

import { useNavigate } from 'react-router-dom';

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
  const { mainBannerEvents } = useGetMainBannerQuery();
  const navigate = useNavigate();

  if (!mainBannerEvents) return null;

  return (
    <BannerContainerStyled>
      {mainBannerEvents.length === 0 ? (
        <EmptyEventWrapper>현재 신청 가능한 행사가 없습니다</EmptyEventWrapper>
      ) : (
        <Carousel autoSlide totalItem={mainBannerEvents.length}>
          {mainBannerEvents.map(({ clubInfo, eventInfo }) => (
            <BannerWrapperStyled onClick={() => navigate(PATH.EVENT.DETAIL(eventInfo.eventId))}>
              <ClubCoverTransparent />
              <BannerTopTitleStyled>
                {clubInfo.name}
                {
                  MAIN_BANNER_EVENTS_TEXT[
                    eventInfo.eventCategory as keyof typeof MAIN_BANNER_EVENTS_TEXT
                  ]
                }
              </BannerTopTitleStyled>
              <BannerBottomTitleStyled>
                ~{eventInfo.formCloseDateTime} 신청 마감
              </BannerBottomTitleStyled>
              {clubInfo.coverImageUrl && (
                <BannerImageStyled src={clubInfo.coverImageUrl} alt="클럽 커버 이미지" />
              )}
            </BannerWrapperStyled>
          ))}
        </Carousel>
      )}
    </BannerContainerStyled>
  );
};

export default MainBanner;
