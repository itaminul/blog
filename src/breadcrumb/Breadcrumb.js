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
import List from '@mui/joy/List';
import ListItem, { listItemClasses } from '@mui/joy/ListItem';
import ReceiptLong from '@mui/icons-material/ReceiptLong';
import IconButton from '@mui/joy/IconButton';
import ListItemButton, { listItemButtonClasses } from '@mui/joy/ListItemButton';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
const breacrambStyle = {
  border: '2px solid black',
  borderRadius: '5px',
  color: 'black',
  marginTop: '-10px',
  marginLeft: '10px',
  height: '40px'
}
const featuresStyle = {
  width: '250px',
  marginLeft: '1030px',
  marginTop: '2px',
  border: '3px solid blue',
  textAlign: 'center',
  color: 'black',
  borderRadius: '10px',
  padding: '5px 15px 10px 15px',
  borderBottomRightRadius: '40px',
}
const Breadcrumb = (props) => {
  const [openb, setOpenb] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState();
  const handleClick = (newPlacement) => (event) => {
    setAnchorEl(event.currentTarget);
    setOpen((prev) => placement !== newPlacement || !prev);
    setPlacement(newPlacement);
  }; 
  const closeProper = (e) => {
    e.preventDefault()
    setOpen(false);
  }
     return (
    <div role="presentation">
    <Box sx={{ flexGrow: 1 }} >
      <Popper open={open} anchorEl={anchorEl}  placement={placement} transition>
       
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <Paper style={featuresStyle}>
              <Typography sx={{ p: 2 }}>
              <List
        size="sm"
        sx={(theme) => ({
          // Gatsby colors
          '--joy-palette-primary-plainColor': '#8a4baf',
          '--joy-palette-neutral-plainHoverBg': 'transparent',
          '--joy-palette-neutral-plainActiveBg': 'transparent',
          '--joy-palette-primary-plainHoverBg': 'transparent',
          '--joy-palette-primary-plainActiveBg': 'transparent',
          [theme.getColorSchemeSelector('dark')]: {
            '--joy-palette-text-secondary': '#635e69',
            '--joy-palette-primary-plainColor': '#d48cff',
          },

          '--List-insetStart': '32px',
          '--List-item-paddingY': '0px',
          '--List-item-paddingRight': '16px',
          '--List-item-paddingLeft': '21px',
          '--List-item-startActionWidth': '0px',
          '--List-item-startActionTranslateX': '-50%',

          [`& .${listItemButtonClasses.root}`]: {
            borderLeft: '1px solid',
            borderColor: 'divider',
          },
          [`& .${listItemButtonClasses.root}.${listItemButtonClasses.selected}`]: {
            borderColor: 'currentColor',
          },
          [`& .${listItemClasses.nested} > .${listItemButtonClasses.root}`]: {
            border: 'none',
          },
          '& [class*="startAction"]': {
            color: 'var(--joy-palette-text-tertiary)',
          },
        })}
      >
        <ListItem nested>
          <ListItem component="div" startAction={<ReceiptLong />}>
            <Typography level="body3" sx={{ textTransform: 'uppercase' }}>
              Documentation
            </Typography>
          </ListItem>
        </ListItem>
        <ListItem
          nested
          sx={{ my: 1 }}
          startAction={
            <IconButton
              variant="plain"
              size="sm"
              color="neutral"
              onClick={() => setOpenb(!openb)}
            >
              <KeyboardArrowDown
                sx={{ transform: open ? 'initial' : 'rotate(-90deg)' }}
              />
            </IconButton>
          }
        >
          <ListItem>
            <Typography
              level="inherit"
              sx={{
                fontWeight: open ? 'bold' : undefined,
                color: open ? 'text.primary' : 'inherit',
              }}
            >
              Datatable
            </Typography>
          </ListItem>
          {openb && (
            <List sx={{ '--List-item-paddingY': '8px' }}>
              <ListItem>
                <ListItemButton>TanStack Table </ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton>
                 Version 7
                </ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton>
                 Json Data
                </ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton>
                 Column Filter
                </ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton>
                Pagination
                </ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton>
                 Data Counting
                </ListItemButton>
              </ListItem>
            </List>
          )}
        </ListItem>
        <ListItem
          nested
          sx={{ my: 1 }}
          startAction={
            <IconButton
              variant="plain"
              size="sm"
              color="neutral"
              onClick={() => setOpen2((bool) => !bool)}
            >
              <KeyboardArrowDown
                sx={{ transform: open2 ? 'initial' : 'rotate(-90deg)' }}
              />
            </IconButton>
          }
        >
          <ListItem>
            <Typography
              level="inherit"
              sx={{
                fontWeight: open2 ? 'bold' : undefined,
                color: open2 ? 'text.primary' : 'inherit',
              }}
            >
              Modal Form
            </Typography>
          </ListItem>
          {open2 && (
            <List sx={{ '--List-item-paddingY': '8px' }}>
              <ListItem>
                <ListItemButton>Show Batch List</ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton>Create Batch With Modal Form</ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton>Edit Batch With Modal Form</ListItemButton>
              </ListItem>
            </List>
          )}
        </ListItem>
      </List>              
              </Typography>
               <Typography>
                <Button variant="outlined" onClick={closeProper}>Close</Button>
                
                </Typography>
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
        <Button style={{marginTop: '-8px', marginLeft: '-20px', background: 'black', color: 'white', position: 'fixed'}} onClick={handleClick('bottom')}>Features</Button>
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