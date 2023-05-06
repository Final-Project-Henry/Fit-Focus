import { Table, TableBody, TableContainer, TableHead, TableRow } from '@mui/material'
import { CustomTableProps, ElementData, Keys } from './helpers/interfaces'
import { StyledTableCell, StyledTableRow } from './styles/customTableStyles'

const CustomTable = ({ columns, data }: CustomTableProps) => {
  return (
    <TableContainer>
      <Table sx={{ minWidth: 700 }} aria-label='customized table'>
        <TableHead>
          <TableRow>
            {columns.map((column, i) => (
              <StyledTableCell key={i}>{column.label}</StyledTableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row: ElementData, i: number) => (
            <StyledTableRow key={i}>
              {Object.keys(row).map((key: string, i: number) => (
                <StyledTableCell key={i} component='th' scope='row'>
                  {row[key as Keys]}
                </StyledTableCell>
              ))}
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default CustomTable
