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
import ExerciseToShowCard from 'components/ExerciseToShowCard/ExerciseToShowCard'

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
          <ExerciseToShowCard exerciseData={loginExercises?.top[0] || null} key={1} />
        </WeekExercisesContent>
      </WeekExercisesArea>
      {/* -------------------------Footer------------------------- */}
      <Footer />
    </LoggedScreenContainer>
  )
}

export default LoggedScreen
