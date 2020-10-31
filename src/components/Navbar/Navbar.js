import React from 'react'
import './Navbar.css'
import atom from '../../pictures/atompng.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="navWrapper">
      <div className="navlogo">

        <Link to='/' style={{ textDecoration: 'none' }}>
          <img src={atom} alt=""></img>
        </Link>

      </div>
      <div className="favouriteIconWrapper">

        <Link to='/favourites' className="heartLink" style={{ textDecoration: 'none' }}>
          <i class="far fa-heart fa-2x"></i>
        </Link>

      </div>

      <div className="albumIconWrapper">

        <Link to='/albums' className="albumLink" style={{ textDecoration: 'none' }}>
          <i class="fas fa-camera-retro fa-2x"></i>
        </Link>

      </div>

    </div>
  )

}

export default Navbar