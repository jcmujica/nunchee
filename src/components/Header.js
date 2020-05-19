import React from 'react';
import { Link } from 'react-router-dom';
import image from '../images/logo.png'

function Header() {
  return (
    <nav className="header">
      <div className="header__logo">
        <img src={image} alt="" />
      </div>
      <div className="header__links">
        <ul >
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/contenidos">Contenidos</Link>
          </li>
        </ul>

      </div>
    </nav>
  )
}

export default Header
