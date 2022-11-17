import React from 'react'
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import HomeIcon from '@mui/icons-material/Home';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import GrainIcon from '@mui/icons-material/Grain';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import ModalForm from '../modal/ModalForm'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const breacrambStyle = {
  background: '#a6a6a6',
  color: 'black',
  marginTop: '-10px',
  marginLeft: '10px',
  height: '40px'

}


const Breadcrumb = (props) => {
     return (
    <div role="presentation">

    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={1}>
        <Grid  style={breacrambStyle}  item xs={11}>
        <Breadcrumbs aria-label="breadcrumb">
        <Link
          underline="hover"
          sx={{ display: 'flex', alignItems: 'center' }}
          color="inherit"
          href="#"
        >
          <HomeIcon fontSize="inherit" />
          {props.titleType}
        </Link>
          <Typography
          sx={{ display: 'flex', alignItems: 'center' }}
          color="text.primary"
        >
          <GrainIcon s fontSize="inherit" />
          {props.title}
        </Typography>
      </Breadcrumbs>
        </Grid>
        <Grid>
        {props.modalForm}
        </Grid>
        
      </Grid>
    </Box>

      
    </div>
  );
}

export default Breadcrumb