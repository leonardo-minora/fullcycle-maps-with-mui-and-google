import React from "react";
import { AppBar,  IconButton, Toolbar, Typography } from '@mui/material';
import DriveEtaIcon from '@mui/icons-material/DriveEta'

const AppNavBar = () => (
  <AppBar position="static" enableColorOnDark>
    <Toolbar>
      <IconButton color="inherit" edge="start">
        <DriveEtaIcon />
      </IconButton>
      <Typography variant="h6">Fullcycle Delivery</Typography>
    </Toolbar>
  </AppBar>
);

export default AppNavBar;