import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

const SiteContents = () => {
  return (
    <>
      <Link to="/">
        <Button>About</Button>
      </Link>
      <Link to="/projects">
        <Button>Projects</Button>
      </Link>
      <Link to="/contact">
        <Button>Contact</Button>
      </Link>
      <Link to="/music">
        <Button>Music</Button>
      </Link>
    </>
  )
}

export default SiteContents
