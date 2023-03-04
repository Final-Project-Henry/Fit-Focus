import { Grid } from '@mui/material'
import { Props } from '../../shared/interfaces/grid-interfaces'

const GridItem = ({ children, ...rest }: Props) => {
  return (
    <Grid item {...rest}>
      {children}
    </Grid>
  )
}

export default GridItem
