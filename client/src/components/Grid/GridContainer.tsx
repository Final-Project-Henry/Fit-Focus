import { Grid } from '@mui/material'
import { Props } from '../../shared/interfaces/grid-interfaces'

const GridContainer = ({ children, ...rest }: Props) => {
  return (
    <Grid
      container
      style={{
        width: '100%',
        height: '100%',
      }}
      {...rest}
    >
      {children}
    </Grid>
  )
}

export default GridContainer
