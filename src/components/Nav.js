import React from 'react'
import '../App.scss'
import { NavLink } from 'react-router-dom'

function Nav() {
  return (
    <div class="nav-wrapper">
      <div class="nav">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/LoginPage">Join Now</NavLink>
      </div>
    </div>
  )
}

export default Nav
