import { Grid } from '@mui/material'
import { Props } from '../../shared/interfaces/grid-interfaces'

const GridContainer = ({ children, ...rest }: Props) => {
  return (
    <Grid container {...rest}>
      {children}
    </Grid>
  )
}

export default GridContainer
