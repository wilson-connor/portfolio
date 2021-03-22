import React, { useEffect, useState } from 'react'
import SiteContents from './SiteContents'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import './styles.css'
import SideMenu from './SideMenu'

const App = () => {
  const [clicked, setClicked] = useState(false)
  const handleClick = () => {
    setClicked(!clicked)
  }
  const closeMobileMenu = () => {
    setClicked(false)
  }

  return (
    <Router>
      <nav>
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
            <div>Contact information</div>
          </Route>
          <Route path="/projects">
            <div>Project Info</div>
          </Route>
          <Route path="/">
            <div>About Connor</div>
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
