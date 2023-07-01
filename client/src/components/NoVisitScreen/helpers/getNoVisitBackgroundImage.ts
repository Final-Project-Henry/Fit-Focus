import {
  noVisitImage1,
  noVisitImage2,
  noVisitImage3,
  noVisitImage4,
  noVisitImage5,
  noVisitImage6,
  noVisitImage7,
} from 'shared/shareData'

const images = [noVisitImage1, noVisitImage2, noVisitImage3, noVisitImage4, noVisitImage5, noVisitImage6, noVisitImage7]

export default () => {
  const randomIndex = Math.floor(Math.random() * images.length)

  return images[randomIndex]
}
