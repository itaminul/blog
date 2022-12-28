import React, { Fragment } from 'react'
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components'
import { theme } from '../theme/Theme'
import { template } from '../theme/Template'
import { Box } from '../styledComponent/Box'
import { Flex } from '../styledComponent/Flex'
import { Text } from '../styledComponent/Text'
import { Grid } from '../styledComponent/Grid'
import Card from '../technical/Card'
import data from '../data/data'
import NoMatch from '../technical/NoMatch'
import { media } from '../theme/helpers'

import TopBar from '../layouts/TopBar'



const GlobalStyle = createGlobalStyle`
body {
    font-family: comrade;
    margin: 0px;
    margin-top: 70px
}
`;

const Aside = styled(Flex)`
justify-content: center;
align-items: center;
${media.mobile` display:none`}
${media.tablet` display:none`}
`;

const EnhancedText = props => (
    <Text 
    {...props}
    fontSize={[1, 2, 5]}
    textAlign={[ "center", "left", "right"]}
    />
)
const Profile = () => {
  return (
    <div>
           <TopBar />
        <ThemeProvider theme={theme}>
      <Fragment>
      <Grid
          gridGap={[1, 1, 2]}
          bg="yellow"
          height="100vh"
          gridTemplateColumns={[
            template.mobile.columns,
            template.tablet.columns,
            template.desktop.columns
          ]}
          gridTemplateRows={[
            template.mobile.rows,
            template.tablet.rows,
            template.desktop.rows
          ]}
          gridTemplateAreas={[
            template.mobile.area,
            template.tablet.area,
            template.desktop.area
          ]}
        >
        
          <Flex
            justifyContent="center"
            alignItems="center"
            bg="blue"
            gridArea="header"
          >
            <EnhancedText>Header</EnhancedText>
          </Flex>
          <Flex
            flexWrap="wrap"
            flexDirection="row"
            alignItems="center"
            justifyContent="center"
            bg="blue"
            gridArea="main"
            overflow="scroll"
          >
            {data.map((item, index) => (
              <Card m={1} item={item} />
            ))}
          </Flex>
          <Flex
            justifyContent="center"
            alignItems="center"
            bg="brown"
            gridArea="sidebar"
          >
            <EnhancedText>Side</EnhancedText>
          </Flex>
          <Flex
            justifyContent="center"
            alignItems="center"
            bg="red"
            gridArea="footer"
          >
            <EnhancedText>Footer</EnhancedText>
          </Flex>

          <Aside bg="pink" gridArea="aside">
            <EnhancedText>Aside</EnhancedText>
          </Aside>

        </Grid>

        <GlobalStyle />
      </Fragment>
    </ThemeProvider>    
    </div>
  )
}

export default Profile
