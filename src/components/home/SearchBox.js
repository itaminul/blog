import React from 'react'
import { InputFiled } from './SearchBox.styled'

const inputFi = {
fontSize: "14px",
lineHeight: "1",
backgroundColor: "white",
width: "85%",
height: "50px",
borderRadius: "8px",
border: "none",
color: "black",
alignItems: "center",
flexDirection: "column",
rowGap: "20px",
transition: "margin 300ms cubic-bezier(0.645, 0.045, 0.355, 1)",
}
const SearchBox = () => {
  return (
    <div>
     
        <input type='text' style={inputFi} placeholder=' Search find tutorials' />
        {/* <Button>
        Search
        </Button> */}    
    </div>
  )
}

export default SearchBox
