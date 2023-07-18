import { ImageBanner, ImageBannerBg, ImageContainer, TitleBanner } from './styles/bannerScreenStyles'

interface BannerScreenProps {
  imgBg: string
  title: string
}

const BannerScreeen = ({ imgBg, title }: BannerScreenProps) => {
  return (
    <ImageContainer>
      <ImageBanner src={imgBg} />
      <ImageBannerBg src={imgBg} />
      <TitleBanner>{title}</TitleBanner>
    </ImageContainer>
  )
}

export default BannerScreeen
