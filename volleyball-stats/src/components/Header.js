import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

const Header = (props) => {
  return(
    <div className="container">
    <div className='header'>
    <header className="top">
      <Link to='/'><button className="home">Home</button></Link>
    <h1 className="home1">Spike It Stats</h1>
    <Link className ='logout' to='/Logout'><button className='logout'>Logout</button></Link>
    </header>
    </div>
    </div>
  )
}

export default Header
