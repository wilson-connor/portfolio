import React, { useState } from 'react';
import { Button, AppBar, Toolbar, Typography, useMediaQuery, useTheme, IconButton, Drawer } from '@material-ui/core';
import { Menu } from '@material-ui/icons';
import SiteContents from './SiteContents';


const TopBarElements = ({ children, icon }) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));

  return matches ? children : icon;
}

const App = () => {

  const [showAbout, toggleShowAbout] = useState(true);
  const [showProjects, toggleShowProjects] = useState(false);
  const [showContact, toggleShowContact] = useState(false);
  const [showMusic, toggleShowMusic] = useState(false);
  const [openDrawer, toggleOpenDrawer] = useState(false);

  return (
    <div>
      <AppBar position='sticky' color='default'>
        <Toolbar>
          <Typography variant="h6">Connor Wilson</Typography>
          <TopBarElements
            icon={
              <IconButton edge="start" onClick={() => toggleOpenDrawer(!openDrawer)}>
                <Menu/>
              </IconButton>
            }>
            <SiteContents/>
          </TopBarElements>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="persistent"
        anchor="right"
        open={openDrawer}
      >
        <SiteContents/>
      </Drawer>
    </div>
  )
}

export default App;