import React, { useState } from 'react'
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import MuiAppBar from '@mui/material/AppBar';
import { styled, useTheme } from '@mui/material/styles';
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { handleDrawerOpen } from '../../features/sidebar/sidebarSlice'

const drawerWidth = 0;

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
  })(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
  }));
  
const TopBar = () => {

    const theme = useTheme();
    const open = useSelector((state) => state.sidebar.open)
    const dispatch = useDispatch()
    const [dropdownOpen, setDropdownOpen] = useState(false)

  return (
    <div>
          <AppBar position="fixed" sx={{background: 'white'}} open={open}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={() => dispatch(handleDrawerOpen())}
              edge="start"
              sx={{
                marginRight: 5,
                ...(open && { display: 'none' }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap component="div">
            <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>
             Home
           </Link>
           <Link to="/dashbord" style={{ textDecoration: 'none', color: 'black', paddingLeft: 15 }}>
            Dashbord
           </Link>
           <Link to="/profile" style={{ textDecoration: 'none', color: 'black', paddingLeft: 15 }}>
            Profile
           </Link>
            </Typography>            
          </Toolbar>
        </AppBar>
      
    </div>
  )
}

export default TopBar
