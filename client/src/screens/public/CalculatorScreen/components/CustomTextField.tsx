import { TextField } from '@mui/material'
import { ChangeEvent, Dispatch, SetStateAction, useEffect } from 'react'
import { UserInfoState } from '../helper/initialState'

interface CustomTextfieldProps {
  name: string
  value: string
  label: string
  error: string
  maxValue: number
  handleOnChange: (e: ChangeEvent<HTMLInputElement>) => void
  placeholder: string
  setError: Dispatch<SetStateAction<UserInfoState>>
}

const CustomTextField = ({
  name,
  value,
  label,
  error,
  maxValue,
  handleOnChange,
  placeholder,
  setError,
}: CustomTextfieldProps) => {
  useEffect(() => {
    let message = ''
    if (Number(value) > maxValue) {
      message = `El numero no debe ser mayor a ${maxValue}`
    }
    setError(prev => ({
      ...prev,
      [name]: message,
    }))
  }, [value])

  return (
    <TextField
      id={name}
      name={name}
      variant='standard'
      margin='normal'
      label={label}
      error={Number(value) > maxValue}
      helperText={error}
      fullWidth
      placeholder={placeholder}
      required={true}
      value={value}
      onChange={handleOnChange}
    />
  )
}

export default CustomTextField
