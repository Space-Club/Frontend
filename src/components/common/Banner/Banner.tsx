import Carousel from '../CarouselSlider/Carousel';
import { BannerContainerStyled, BannerImageStyled } from './Banner.style';

interface BannerProps {
  width: number;
  height: number;
}

const Banner = ({ width, height }: BannerProps) => {
  return (
    <BannerContainerStyled width={width} height={height}>
      <Carousel autoSlide totalItem={3}>
        <BannerImageStyled
          src="https://picsum.photos/200/300"
          alt="이 부분은 배너 기본 이미지를 생성 전까진 임시입니다"
        />
        <BannerImageStyled
          src="https://picsum.photos/200/300"
          alt="이 부분은 배너 기본 이미지를 생성 전까진 임시입니다"
        />
        <BannerImageStyled
          src="https://picsum.photos/200/300"
          alt="이 부분은 배너 기본 이미지를 생성 전까진 임시입니다"
        />
      </Carousel>
    </BannerContainerStyled>
  );
};

export default Banner;
