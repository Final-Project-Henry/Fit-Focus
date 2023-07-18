import BannerScreeen from 'components/BannerScreen/BannerScreeen'
import { favoriteBanner } from 'shared/shareData'
import { FavoriteBodyContainer } from '../styles/favoritesScreenStyles'

const FavoritesBody = () => {
  return (
    <FavoriteBodyContainer id='contactus-body-container'>
      <BannerScreeen imgBg={favoriteBanner} title='Favoritos ❤️' />
    </FavoriteBodyContainer>
  )
}

export default FavoritesBody
