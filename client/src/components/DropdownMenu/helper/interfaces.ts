import { PopoverOrigin } from '@mui/material'
import { CSSProperties, ReactNode } from 'react'

export interface OptionMenu {
  label: string
  select: () => void
  divider?: boolean
}

export interface DropdownMenuProps {
  options: OptionMenu[]
  anchorEl: Element | null
  open: boolean
  close: () => void
  header?: ReactNode
  sx?: CSSProperties
  transformOrigin?: PopoverOrigin
  anchorOrigin?: PopoverOrigin
}
