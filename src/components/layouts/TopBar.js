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
          <Toolbar sx={{justifyContent: "flex-end"}}>
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
            <Typography 
             sx={{
              mr: 0,
              fontFamily: 'monospace',
              fontWeight: 900,
              color: 'inherit',
              textDecoration: 'none',
              typography: 'body2',
               display: "flex",
            
            }}
            >
            <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>
             <span style={{ fontWeight: '100' }}>Home</span>
           </Link>
           {/* <Link to="/dashbord" style={{ textDecoration: 'none', color: 'black', paddingLeft: 15 }}>
            Dashbord
           </Link> */}
           <Link to="/profile" style={{ textDecoration: 'none', color: 'black', paddingLeft: 15 }}>
            Profile
           </Link>

           <Link to="/blogs" style={{ textDecoration: 'none', color: 'black', paddingLeft: 15 }}>
            Blog
           </Link>

           <Link to="/profile" style={{ textDecoration: 'none', color: 'black', paddingLeft: 15 }}>
            Contact Us
           </Link>
            </Typography>            
          </Toolbar>
        </AppBar>
      
    </div>
  )
}

export default TopBar
