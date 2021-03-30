import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './styles.css';
import SideMenu from './SideMenu';
import About from './About';
import Contact from './Contact';
import regeneratorRuntime from 'regenerator-runtime';

const App = () => {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked(!clicked);
  };
  const closeMobileMenu = () => {
    setClicked(false);
  };

  return (
    <Router>
      <nav className={clicked ? 'nav nav-active' : 'nav'}>
        <SideMenu
          closeMobileMenu={closeMobileMenu}
          handleClick={handleClick}
          clicked={clicked}
        />
      </nav>
      <div id="main">
        <Switch>
          <Route path="/music">
            <div>music links</div>
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/projects">
            <div>Project Info</div>
          </Route>
          <Route path="/">
            <About />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
