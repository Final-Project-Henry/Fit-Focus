export interface ElementColumns {
  accesor: string
  label: string
}
export type AreaTypes = 'Frontend' | 'Backend'
export interface ElementData {
  name: string
  area: AreaTypes
  email: string
  country: string
}

export interface CustomTableProps {
  columns: ElementColumns[]
  data: ElementData[]
}

export type Keys = keyof ElementData
