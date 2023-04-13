import { List, ListItem } from '@mui/material'
import { CardOfferContainer, PriceContainer } from '../styles/homeScreenStyles'
import { Check, Star } from '@mui/icons-material'
import { CardOfferProps } from '../helper/interfaces'

const CardOffer = ({ isFree }: CardOfferProps) => {
  return (
    <CardOfferContainer>
      <span>{isFree ? 'Gratis!' : 'Un único pago!!'}</span>
      <PriceContainer>
        <p>$</p>
        <h1>{isFree ? '0' : `3'000`}</h1>
        <a>.00</a>
      </PriceContainer>
      <List>
        <ListItem>
          <Check color='success' /> 30 Ejercicios por mes.
        </ListItem>
        <ListItem>
          <Check color='success' /> Calculadora de IMC.
        </ListItem>
        <ListItem>
          <Check color='success' /> Noticias sobre la vida fitness.
        </ListItem>
        <ListItem>
          <Check color='success' /> Calificar Ejercicios.
        </ListItem>
        {!isFree && (
          <>
            <ListItem>
              <Star color='warning' /> Guardar ejercicios favoritos.
            </ListItem>
            <ListItem>
              <Star color='warning' /> Ejercicios de estiramiento.
            </ListItem>
            <ListItem>
              <Star color='warning' /> Calificar Ejercicios.
            </ListItem>
          </>
        )}
      </List>
      <button>{isFree ? 'Empieza Gratis!' : 'Hazte Premium ya!!'}</button>
    </CardOfferContainer>
  )
}

export default CardOffer
