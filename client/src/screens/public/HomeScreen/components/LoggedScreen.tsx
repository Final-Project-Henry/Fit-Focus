import Footer from 'components/Footer/Footer'
import HorizontalCarrousel from 'components/HorizontalCarrousel/HorizontalCarrousel'
import { LoggedScreenProps } from '../helper/interfaces'
import {
  BannerArea,
  BannerButton,
  BannerContent,
  LoggedScreenContainer,
  SubTitle,
  Title,
  WeekExercisesArea,
  WeekExercisesContent,
  WeekTitle,
} from '../styles/loggedScreenStyles'

const LoggedScreen = ({ onClick, loginExercises }: LoggedScreenProps) => {
  return (
    <LoggedScreenContainer>
      {/* -------------------------BannerArea------------------------- */}
      <BannerArea>
        <BannerContent>
          <Title>Consigue tus objetivos sin salir de casa</Title>
          <SubTitle>
            Ejercicios con peso corporal. Rutinas personalizadas. Modo entrenamiento. Calculadora de IMC.
          </SubTitle>
          <BannerButton onClick={onClick}>Empieza ahora!</BannerButton>
        </BannerContent>
      </BannerArea>
      {/* -------------------------WeekExercises------------------------- */}
      <WeekExercisesArea>
        <WeekExercisesContent>
          <WeekTitle>Ejercicios de la semana</WeekTitle>
          <HorizontalCarrousel exercisesToShow={loginExercises?.week || []} />
        </WeekExercisesContent>
      </WeekExercisesArea>
      {/* -------------------------TopExercises------------------------- */}
      <WeekExercisesArea>
        <WeekExercisesContent>
          <WeekTitle>Ejercicios mejor calificados</WeekTitle>
          <HorizontalCarrousel exercisesToShow={loginExercises?.top || []} />
        </WeekExercisesContent>
      </WeekExercisesArea>
      {/* -------------------------Footer------------------------- */}
      <Footer />
    </LoggedScreenContainer>
  )
}

export default LoggedScreen
