import { Dispatch, SetStateAction } from 'react'
import { FormControl, IconButton, InputAdornment, MenuItem, Select, TextField } from '@mui/material'
import { Search } from '@mui/icons-material'
import { SearchbarContainer } from '../styles/newsScreenStyles'
import { languagesOptions } from '../helper/initialValues'

interface Props {
  searchText: string
  setSearchText: Dispatch<SetStateAction<string>>
  language: string
  setLanguage: Dispatch<SetStateAction<string>>
  handleSearch: () => void
}

const NewsSearchBar = ({ searchText, setSearchText, language, setLanguage, handleSearch }: Props) => {
  return (
    <SearchbarContainer>
      <TextField
        id='search'
        name='search'
        variant='filled'
        margin='normal'
        size='small'
        fullWidth
        placeholder='Escriba una palabra'
        required={true}
        value={searchText}
        onChange={({ target: { value } }) => setSearchText(value)}
        InputProps={{
          endAdornment: (
            <InputAdornment position='end'>
              <IconButton size='small' disabled={!searchText.length} onClick={handleSearch}>
                <Search />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      <FormControl sx={{ minWidth: 'inherit', marginTop: '7px' }}>
        <Select
          value={language}
          onChange={({ target: { value } }) => {
            setLanguage(value)
          }}
          variant='filled'
          size='small'
          inputProps={{
            required: true,
            width: '100px',
          }}
        >
          {languagesOptions.map((language, i) => (
            <MenuItem key={i} value={language.value}>
              {language.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </SearchbarContainer>
  )
}

export default NewsSearchBar
