import styled from 'styled-components'

export const InputFiled = styled.div`
font-size: 14px;
line-height: 1;
background-color: white;
width: 85%;
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
background: transparent;
border-radius: 3px;
border: 3px solid palevioletred;
color: palevioletred;
margin: 0 1em;
font-size: 1.08rem;
padding: 0.25em 1em;
&:hover{
    background: blue;
}
@media screen and (max-width: 45em) {
    padding: 1rem 1rem;
    font-size: 1rem;
    margin: 0.5rem;
   }
`
