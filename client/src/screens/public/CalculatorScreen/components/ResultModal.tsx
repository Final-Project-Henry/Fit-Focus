import { Dialog, DialogContent } from '@mui/material'
import DialogTitle from 'components/CustomDialog/DialogTitle'
import GridContainer from 'components/Grid/GridContainer'
import GridItem from 'components/Grid/GridItem'
import { getLevelTitle, getPointerPosition, getResult, levels } from '../helper/functions'
import { calculatorTable } from 'shared/shareData'
import { useMemo } from 'react'
import { DangerBar, ResultData, TextResult } from '../styles/calculatorScreenStyles'

interface ResultsModalProps {
  openModal: boolean
  closeModal: () => void
  weight: string
  height: string
  years: string
  imc: number
  level: levels
}

const ResultModal = ({ closeModal, openModal, weight, height, years, imc, level }: ResultsModalProps) => {
  const resultMessage = useMemo(() => getResult(level), [level])
  const levelTitle = useMemo(() => getLevelTitle(level), [level])
  return (
    <Dialog
      open={openModal}
      keepMounted
      onClose={() => {
        closeModal()
      }}
    >
      <DialogTitle closeModal={closeModal} logo>
        Resultados
      </DialogTitle>
      <DialogContent>
        <GridContainer>
          <GridItem xs={12} md={6}>
            <img src={calculatorTable} alt='imc-table' />
          </GridItem>
          <GridItem xs={12} md={6}>
            <GridContainer>
              <GridItem xs={12}>
                <ResultData>
                  <b>Datos obtenidos:</b>
                </ResultData>
              </GridItem>
              <GridItem xs={12}>
                <ResultData>
                  <b>Altura: </b>
                  {height}
                </ResultData>
              </GridItem>
              <GridItem xs={12}>
                <ResultData>
                  <b>Peso: </b>
                  {weight}
                </ResultData>
              </GridItem>
              <GridItem xs={12}>
                <ResultData>
                  <b>Edad: </b>
                  {years}
                </ResultData>
              </GridItem>
              <GridItem xs={12}>
                <ResultData>
                  <b>IMC: </b>
                  {imc}
                </ResultData>
              </GridItem>
              <GridItem xs={12}>
                <ResultData>
                  <b>Categoría: </b>
                  {levelTitle}
                </ResultData>
              </GridItem>
              <GridItem xs={12}>
                <DangerBar>
                  <div
                    style={{
                      width: 0,
                      height: 0,
                      borderRight: '15px solid transparent',
                      borderTop: '20px solid #8790ab',
                      borderLeft: '15px solid transparent',
                      position: 'absolute',
                      top: '-20px',
                      left: getPointerPosition(imc),
                      zIndex: 1,
                    }}
                  ></div>
                </DangerBar>
              </GridItem>
            </GridContainer>
          </GridItem>
          <GridItem xs={12}>
            <TextResult>{resultMessage}</TextResult>
          </GridItem>
        </GridContainer>
      </DialogContent>
    </Dialog>
  )
}

export default ResultModal
