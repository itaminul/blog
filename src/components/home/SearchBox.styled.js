import styled from 'styled-components'

export const Input = styled.input`
font-size: 14px;
line-height: 1;
background-color: white;
width: 55%;
height: 50px;
border-radius: 8px;
border: none;
color: black;
align-items: center;
flex-direction: column;
row-gap: 20px;
transition: margin 300ms cubic-bezier(0.645, 0.045, 0.355, 1);

&:focus,
&:active {
  outline: none;
}
&::placeholder {
  color: white;
}

`

export const Button = styled.button`
line-height: 1;
pointer-events: ${props => (props.barOpened ? "auto" : "none")};
cursor: ${props => (props.barOpened ? "pointer" : "none")};
background-color: white;
border: none;
outline: none;
color: black;
font-size: 25px;
border-radius: 10%;
padding: 5px 5px 5px 5px;
`