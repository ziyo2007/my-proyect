import React from 'react'
import './Header.scss'
import { Link } from 'react-router-dom'
import headerLogo from '../../img/nav-logo.png'
function Header() {
  return (
    <div className='header'>
      <div className="container">
        <nav className='header__nav'>
          <img className='logo' src={headerLogo} alt="" />
          <h1 className='tittle'>Ziyo</h1>
          <ul className='header__list'>
            <li className='header__list-item'>
              <Link>About me</Link>
            </li>
            <li className='header__list-item'>
              <Link>Portfolio</Link>
            </li>
            <li className='header__list-item'>
              <Link>Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}
export default Header
