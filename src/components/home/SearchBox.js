import React from 'react'
import { Input, Button } from './SearchBox.styled'
import SearchIcon from '@mui/icons-material/Search';
const SearchBox = () => {
  return (
    <div>
        <Input placeholder = 'Enter text'></Input>
        <Button>
        Search
        </Button>
      
    </div>
  )
}

export default SearchBox
