import { ChangeEvent, useState } from 'react'
import GridItem from 'components/Grid/GridItem'
import BannerScreeen from 'components/BannerScreen/BannerScreeen'
import GridContainer from 'components/Grid/GridContainer'
import ExitButton from 'components/CustomButton/CancelButton'
import Button from 'components/CustomButton/Button'
import CustomTextField from './CustomTextField'
import { calculatorBanner } from 'shared/shareData'
import { UserInfoState, userInfoInitialState } from '../helper/initialState'
import { getLevelByImc, levels } from '../helper/functions'
import ResultModal from './ResultModal'
import {
  ButtonContainer,
  ButtonsArea,
  CalcuBody,
  CalculatorBodyContainer,
  InfoContainer,
  InfoContent,
  InputsContainer,
  SubTitle,
  Title,
} from '../styles/calculatorScreenStyles'

const CalculatorBody = () => {
  const [userInfo, setUserInfo] = useState<UserInfoState>(userInfoInitialState)
  const [errors, setErrors] = useState<UserInfoState>(userInfoInitialState)
  const [IMC, setIMC] = useState<number>(0)
  const [level, setLevel] = useState<levels | null>(null)
  const [showResultsModal, setShowResultsModal] = useState<boolean>(false)

  const handleUserInfoChange = (e: ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value, name },
    } = e
    if (!value) {
      setUserInfo(prev => ({
        ...prev,
        [name]: value,
      }))
    }
    if (!Number(value)) return
    setUserInfo(prev => ({
      ...prev,
      [name]: value,
    }))
  }
  const handleClean = () => {
    setUserInfo(userInfoInitialState)
    setLevel(null)
  }
  const disabledButton = () => {
    const existsErrors = errors.weight || errors.weight || errors.years
    const existsData = userInfo.weight && userInfo.weight && userInfo.years
    return existsErrors || !existsData
  }
  const calculateIMC = () => {
    const newHeight = Number(userInfo.height) / 100
    const initialCalc = Number(userInfo.weight) / (newHeight * newHeight)
    const imc = Math.round(initialCalc * 10) / 10
    setIMC(imc)
    setLevel(getLevelByImc(imc))
    setShowResultsModal(true)
  }
  return (
    <CalculatorBodyContainer id='calculator-body-container'>
      <BannerScreeen imgBg={calculatorBanner} title='Calculadora de IMC 📱' />
      <InfoContainer>
        <GridItem xs={12} lg={6}>
          <InfoContainer>
            <GridItem xs={12}>
              <Title>Te ayudamos a saber cual es tu índice de masa corporal</Title>
            </GridItem>
            <GridItem xs={12}>
              <InfoContent>
                Saber tu IMC (Índice de Masa Corporal) antes de empezar una vida saludable, es la manera más recomendada
                para poder enfocar tus esfuerzos en metas claras. Este hecho acelera el proceso para obtener el físico
                deseado, ayudando a que notes cambios en menos tiempo. Esta calculadora te da un valor aproximado de tu
                IMC, para tenerlo como referencia a la hora de escoger la intensidad de los ejercicios. Si desea conocer
                un valor más exacto, puede obtar por hacerse un analisis de sangre. Esta calculadora aplica para adultos
                de 20 años a más.
              </InfoContent>
            </GridItem>
          </InfoContainer>
        </GridItem>
        <GridItem xs={12} lg={6}>
          <CalcuBody>
            <GridItem xs={12}>
              <SubTitle>Calculadora</SubTitle>
            </GridItem>
            <GridItem xs={12}>
              <InputsContainer>
                <CustomTextField
                  name={'weight'}
                  value={userInfo.weight}
                  label={'Peso'}
                  error={errors.weight}
                  maxValue={200}
                  handleOnChange={handleUserInfoChange}
                  placeholder={'Peso en kg. Ej:75'}
                  setError={setErrors}
                />
                <CustomTextField
                  name={'height'}
                  value={userInfo.height}
                  label={'Altura'}
                  error={errors.height}
                  maxValue={200}
                  handleOnChange={handleUserInfoChange}
                  placeholder={'Altura en cm. Ej:170'}
                  setError={setErrors}
                />
                <CustomTextField
                  name={'years'}
                  value={userInfo.years}
                  label={'Edad'}
                  error={errors.years}
                  maxValue={80}
                  handleOnChange={handleUserInfoChange}
                  placeholder={'Edad en años. Ej:25'}
                  setError={setErrors}
                />
              </InputsContainer>
            </GridItem>
            <GridItem xs={12}>
              <ButtonsArea>
                <GridContainer>
                  <ButtonContainer xs={12} md={6}>
                    <ExitButton onClick={handleClean}>Limpiar</ExitButton>
                  </ButtonContainer>
                  <ButtonContainer xs={12} md={6}>
                    <Button disabled={disabledButton()} onClick={calculateIMC}>
                      Calcular
                    </Button>
                  </ButtonContainer>
                </GridContainer>
              </ButtonsArea>
            </GridItem>
          </CalcuBody>
        </GridItem>
      </InfoContainer>
      {showResultsModal && level && (
        <ResultModal
          openModal={showResultsModal}
          closeModal={() => setShowResultsModal(false)}
          weight={userInfo.weight}
          height={userInfo.height}
          years={userInfo.years}
          imc={IMC}
          level={level}
        />
      )}
    </CalculatorBodyContainer>
  )
}

export default CalculatorBody
