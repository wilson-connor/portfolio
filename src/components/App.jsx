import React, { useState } from 'react'
import SiteContents from './SiteContents'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <Link to="/">About</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/music">Music</Link>
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
    </Router>
  )
}

export default App
