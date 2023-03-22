import { Grid } from '@mui/material'
import { Props } from '../../shared/interfaces/grid-interfaces'

const GridItem = ({ children, ...rest }: Props) => {
  return (
    <Grid
      item
      {...rest}
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {children}
    </Grid>
  )
}

export default GridItem
