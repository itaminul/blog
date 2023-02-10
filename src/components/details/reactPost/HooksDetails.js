import React from 'react'
import { Link } from 'react-router-dom'
import {
    Container,
    Details,
    DetailsTitle,
    DetailsDescription
    
  } from '../Content.styled'
  import {
    Example,
    GeneralExample
  } from '../../javascript/Common.styled'
export const HooksDetails = () => {
  const breaks = `\n`;
  const example = 'No results.<br>Please try another search term.';
  const example2 = `  Hi this is first line  ${breaks}  hi this is second line `
  //https://hygraph.com/blog/usestate-react
  return (
    <>
        <Container>
            <Details>
            <DetailsTitle>
                What is Hooks? 
            </DetailsTitle>

            <DetailsDescription>
            In React, the state is data or properties you can use in our application. States are mutable, meaning their value can change, and for that, the useState() hook is used to handle and manage your states.

            The useState() hook allows you to create, track and update a state in functional components. This hook is created by React and doesn't need to be installed when you create your React project.
            <DetailsTitle>
            Declaring a state to React with useState()Anchor 
            </DetailsTitle>

            
            To use the useState() hook, you must first import it from React, or you will have to append it like React.useState() anytime you have to create a state. The useState() hook takes in the initial value of the state variable as an argument. This value could be of any data type, such as string, number, object, array, and lots more.
           

            




            </DetailsDescription>
            </Details>
            <Example>
            <div id="example">
                    Example
                    <GeneralExample>
                      <table>
                        <tbody>
                          <tr>
                            <td style={{whiteSpace: 'preLine'}}>  {example} </td>
                            <td>    First Line {'\n'} Second Line. </td>
                          </tr>
                        </tbody>
                      </table>
                  

                  
                     

                    
                    </GeneralExample>
                  </div>
            </Example>
        </Container> 
    </>
  )
}
