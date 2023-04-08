import { Divider, Menu, MenuItem } from '@mui/material'
import { DropdownMenuProps, OptionMenu } from './helper/interfaces'

const DropdownMenu = ({
  options,
  anchorEl,
  open,
  close,
  header,
  sx,
  transformOrigin,
  anchorOrigin,
}: DropdownMenuProps) => {
  return (
    <Menu
      anchorEl={anchorEl}
      id='account-menu'
      open={open}
      onClose={close}
      PaperProps={{
        elevation: 0,
        style: sx || {},
        sx: sx || {},
      }}
      transformOrigin={
        transformOrigin || { horizontal: 'right', vertical: 'top' }
      }
      anchorOrigin={anchorOrigin || { horizontal: 'right', vertical: 'bottom' }}
    >
      {header && <MenuItem>{header}</MenuItem>}
      {options?.map((option: OptionMenu, index: number) => (
        <MenuItem
          key={index}
          onClick={option.select}
          style={{ fontFamily: 'Oswald' }}
        >
          {option.label}
          {option.divider && <Divider />}
        </MenuItem>
      ))}
    </Menu>
  )
}

export default DropdownMenu
