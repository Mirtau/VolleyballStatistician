import React from 'react'
import './main.css'
import { Link } from 'react-router-dom'

const Header = (props) => {
  return(
    <div className="container">
    <div className='header'>
    <header className="top">
      <button className="home"><Link to='/'>Home</Link></button>
    <h1 className="home1">Spike It Stats</h1>
    <button className='logout'><Link className ='logout' to='/Logout'>Logout</Link></button>
    </header>
    </div>
    </div>
  )
}

export default Header
