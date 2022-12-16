import React from 'react'
import { Link } from "react-router-dom"

const Header = () => {
  return (
    <header className="Header">
      <h1>Redux Blog App</h1>
    <nav className="navigation">
      <ul>
        <li> <Link to="/">Home</Link></li>
        <li><Link to="about">About</Link></li>
        <li><Link to="post">Add A Post</Link></li>
      </ul>
     
      
      
    </nav>
    </header>
  )
}

export default Header