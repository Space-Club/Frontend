import { BannerContainerStyled, BannerImageStyled } from './Banner.style';

interface BannerProps {
  bannerImageSrc?: string;
  width: number;
  height: number;
}

const Banner = ({ bannerImageSrc, width, height }: BannerProps) => {
  return (
    <BannerContainerStyled width={width} height={height}>
      {bannerImageSrc ? (
        <BannerImageStyled src={bannerImageSrc} alt="배너 이미지" />
      ) : (
        <BannerImageStyled
          src="https://picsum.photos/200/300"
          alt="이 부분은 배너 기본 이미지를 생성 전까진 임시입니다"
        />
      )}
    </BannerContainerStyled>
  );
};

export default Banner;
