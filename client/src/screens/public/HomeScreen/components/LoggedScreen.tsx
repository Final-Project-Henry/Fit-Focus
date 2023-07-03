import Footer from 'components/Footer/Footer'
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
} from '../styles/loggedScreenStyles'

const LoggedScreen = ({ onClick }: LoggedScreenProps) => {
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
        <WeekExercisesContent></WeekExercisesContent>
      </WeekExercisesArea>
      {/* -------------------------Footer------------------------- */}
      <Footer />
    </LoggedScreenContainer>
  )
}

export default LoggedScreen
