import { Grid } from '@mui/material'
import { Props } from '../../shared/interfaces/grid-interfaces'

const GridItem = ({ children, ...rest }: Props) => {
  return (
    <Grid
      item
      style={{
        display: 'flex',
        width: '100%',
        justifyContent: 'center',
        height: 'fit-content',
        margin: 0,
        padding: 0,
      }}
      {...rest}
    >
      {children}
    </Grid>
  )
}

export default GridItem
