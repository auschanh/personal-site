import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
//import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

const NavBar = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="primary">
        <Toolbar sx={{ textAlign: 'center' }}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <div className='navContainer'>
            <Typography variant="h6" sx={{ flexGrow: 1, textAlign: 'center' }}>
              Home
            </Typography>
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              About
            </Typography>
            <Typography variant="h6"  sx={{ flexGrow: 1 }}>
              Projects
            </Typography>
            <Typography variant="h6" c sx={{ flexGrow: 1 }}>
              Contact
            </Typography>
            </div>
        </Toolbar>
        
      </AppBar>
    </Box>
  )
}

export default NavBar