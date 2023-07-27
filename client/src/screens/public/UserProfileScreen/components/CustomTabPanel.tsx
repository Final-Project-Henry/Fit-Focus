import { Box, Typography } from '@mui/material'
import { TabContainer } from '../styles/userProfileScreenStyles'

interface TabPanelProps {
  children?: React.ReactNode
  index: number
  value: number
}

const CustomTabPanel = ({ children, value, index, ...other }: TabPanelProps) => {
  return (
    <TabContainer
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </TabContainer>
  )
}

export default CustomTabPanel
