import React from 'react'
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { increaseCount, getCount } from "../redux/feature/posts/postsSlice"

const Header = () => {
  const dispatch = useDispatch()
  const count = useSelector(getCount)
  
  return (
    <header className="Header">
      <h1><Link to="/" className="app-title">Redux Blog Ap</Link></h1>
    <nav className="navigation">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="about">About</Link></li>
        <li><Link to="post">Add A Post</Link></li>
        <li><Link to="user">Users</Link></li>
      </ul>
     <button onClick={() =>dispatch(increaseCount())}>{count}</button>
      
      
    </nav>
    </header>
  )
}

export default Header