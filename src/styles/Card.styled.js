import styled from 'styled-components'

export const StyledCard = styled.div`
display: flex;
align-items: center;
background-color: blaxk;
border-radios: 15px;
box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
margin: 40px 0;
padding: 60px;
flex-direction: ${({ layout }) => layout || 'row'};

@media (max-width: ${({ theme }) => theme.mobile }) {
    flex-direction: column;
    text-align: center;
}

`