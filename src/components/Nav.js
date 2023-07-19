import React, { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const drawerWidth = 240;

export default function Nav(props) {

  const container = undefined;
  const [aboutme, setAboutme] = useState([]);

  useEffect(() => {
    fetch('aboutMe.json', {
      headers: {
        Accept: "application/json"
      }
    }).then(res => res.json()).then(res => {
      setAboutme(res);
    })
  }, []);

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar component="nav">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            {aboutme.name} - {aboutme.city} - {aboutme.state} - {aboutme.country} 
          </Typography>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
        </Drawer>
      </Box>
    </Box>
  );
}
