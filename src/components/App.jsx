import React, { useState } from 'react';
import { Button, AppBar, Toolbar, Typography, makeStyles, useMediaQuery, useTheme, IconButton } from '@material-ui/core';
import { Menu } from '@material-ui/icons';


const TopBarElements = ({ children, icon }) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));

  return matches ? children : icon;
}

const App = () => {

  return (
    <div>
    <AppBar position='sticky' color='default'>
      <Toolbar>
        <Typography variant="h6">Connor Wilson</Typography>
        <TopBarElements
          icon={
          <IconButton edge="start">
            <Menu/>
          </IconButton>
          }>
          <Button>About</Button>
          <Button>Projects</Button>
          <Button>Contact</Button>
        </TopBarElements>
      </Toolbar>
    </AppBar>
      <Button variant="contained" color="primary">Hello World</Button>
    </div>
  )
}

export default App;