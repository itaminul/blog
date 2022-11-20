import React from 'react'
import SideBar from '../layouts/SideBar'
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
//import { useSelector } from 'react-redux'
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { TableCell } from '@mui/material';
import TopBar from '../layouts/TopBar'
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function Home(){
  // const open = useSelector((state) => state.SideBar.open);
  return (
    <>
  
      <nav>
       <TopBar />
      </nav>
      <main>
      <Box sx={{ flexGrow: 1 }} style={{marginTop: '220px'}}>
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <div className='grid-elements'>
          <Box component="span" sx={{ p: 17, border: '1px dashed grey' }}>
                image    image     image
           </Box>
            
            </div>
        </Grid>
        <Grid item>
          <div className='grid-elements'>
          <Typography  variant="h1" component="div"
          colSpan={2} align="center" style={{ verticalAlign: 'top' }}  >
          Lizard
        </Typography>
          </div>
        </Grid>
      </Grid>
    </Box>
      </main>
    </>
 
  )
}

export default Home
