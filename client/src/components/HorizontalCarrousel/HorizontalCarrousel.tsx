import { ContextType, MouseEvent, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu'
import ExerciseToShowCard from 'components/ExerciseToShowCard/ExerciseToShowCard'
import { HorizontalCarrouselProps } from './helpers/interfaces'
import useDrag from './helpers/useDrag'
import {
  LeftArrowButton,
  RightArrowButton,
  CarrouselContainer,
  ContainerCard,
} from './styles/horizontalCarrouselStyles'
import './styles/hideScrollbar.css'
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material'

type scrollVisibilityApiType = ContextType<typeof VisibilityContext>

function LeftArrow() {
  const { isFirstItemVisible, scrollPrev } = useContext(VisibilityContext)
  return (
    <LeftArrowButton disabled={isFirstItemVisible} onClick={() => scrollPrev()}>
      <KeyboardArrowLeft />
    </LeftArrowButton>
  )
}

function RightArrow() {
  const { isLastItemVisible, scrollNext } = useContext(VisibilityContext)
  return (
    <RightArrowButton disabled={isLastItemVisible} onClick={() => scrollNext()}>
      <KeyboardArrowRight />
    </RightArrowButton>
  )
}

const HorizontalCarrousel = ({ exercisesToShow }: HorizontalCarrouselProps) => {
  const navigate = useNavigate()

  const { dragStart, dragStop, dragMove, dragging } = useDrag()
  const handleDrag =
    ({ scrollContainer }: scrollVisibilityApiType) =>
    (ev: MouseEvent) =>
      dragMove(ev, posDiff => {
        if (scrollContainer.current) {
          scrollContainer.current.scrollLeft += posDiff
        }
      })
  const handleItemClick = (id: string) => {
    if (!dragging) {
      navigate(`exercises/${id}`)
    }
  }

  return (
    <CarrouselContainer onMouseLeave={dragStop}>
      {!!exercisesToShow?.length && (
        <ScrollMenu
          LeftArrow={LeftArrow}
          RightArrow={RightArrow}
          onMouseDown={() => dragStart}
          onMouseUp={() => dragStop}
          onMouseMove={handleDrag}
        >
          {exercisesToShow.map((exercise, index) => (
            <ContainerCard key={index}>
              <ExerciseToShowCard
                exerciseData={exercise || null}
                key={index}
                open={() => {
                  handleItemClick(exercise._id)
                }}
              />
            </ContainerCard>
          ))}
        </ScrollMenu>
      )}
    </CarrouselContainer>
  )
}

export default HorizontalCarrousel
