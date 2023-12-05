import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div>
      <div><Link to="/">Create</Link></div>
      <div><Link to="/read">Read</Link></div>
      <div><Link to="/edit">Edit</Link></div>
    </div>
  )
}

export default Header