import React, { useState } from 'react'
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import HomeIcon from '@mui/icons-material/Home';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import GrainIcon from '@mui/icons-material/Grain';
import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Popper from '@mui/material/Popper';
import Fade from '@mui/material/Fade';



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

const featuresStyle = {
  border: 'none',
  textAlign: 'center',
  color: 'white',
  background: '#dc3545',
  borderRadius: '10px',
  padding: '5px 15px 10px 15px',
}
const Breadcrumb = (props) => {


const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState();

  const handleClick = (newPlacement) => (event) => {
    setAnchorEl(event.currentTarget);
    setOpen((prev) => placement !== newPlacement || !prev);
    setPlacement(newPlacement);
  };

     return (
    <div role="presentation">

    <Box sx={{ flexGrow: 1 }}>
      <Popper open={open} anchorEl={anchorEl} placement={placement} transition>
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <Paper style={featuresStyle}>
              <Typography sx={{ p: 2 }}>The content of the Popper ddd.</Typography>
            </Paper>
          </Fade>
        )}
      </Popper>

      <Grid container spacing={1}>
        <Grid  style={breacrambStyle}  item xs={9}>
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
        <Grid xs={1}>
        <Button onClick={handleClick('bottom')}>bottom</Button>
        </Grid>
        <Grid xs={1}>
        {props.modalForm}
        </Grid>
        
      </Grid>
    </Box>

      
    </div>
  );
}

export default Breadcrumb