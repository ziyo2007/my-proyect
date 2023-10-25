import React, { useContext, useState } from 'react'
import './Header.scss'
import { Link } from 'react-router-dom'
import headerLogo from '../../img/nav-logo.png'
import { Context } from '../../Context/Context'
function Header() {
  const [vWidth, setVWidth] = useState(window.innerWidth);
  window.addEventListener("resize", () => {
    setVWidth(window.innerWidth);
  });
  const { svet, setSvet } = useContext(Context)
  return (
    <div className='header'>

      <div className="container">
        <nav className='header__nav'>
          <img className='logo' src={headerLogo} alt="" />
          <h1 className='tittle'>Ziyo</h1>
          <ul className={vWidth  <= 1335?'none':'header__list'}>
            <li className='header__list-item'>
              <a href='#about' className='a'>About me</a >
            </li>
            <li className='header__list-item'>
              <a href='#portfolio' className='a'>Portfolio</a >
            </li>
            <li className='header__list-item'>
              <a href='#3' className='a'>Contact</a >
            </li>
            <li>
              <form onClick={() => setSvet(!svet)}>
                <input type="checkbox" id='dark-mode' className='toggle' name='Dark mode' role='switch' value='on' />
                <label for="dark-mode" class="sr">Dark Mode</label>
                <div class="curtain"></div>
              </form>
            </li>
          </ul>
          <div class={vWidth  <= 1335?'btn-group':'none'} role="group">
            <button type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
            <i class="bi bi-list"></i>
            </button>
            <ul class="dropdown-menu">
            <li className='header__list-item'>
              <a href='#about' className='a'>About me</a >
            </li>
            <li className='header__list-item'>
              <a href='#portfolio' className='a'>Portfolio</a >
            </li>
            <li className='header__list-item'>
              <a href='#3' className='a'>Contact</a >
            </li>
            <li>
              <form onClick={() => setSvet(!svet)}>
                <input type="checkbox" id='dark-mode' className='toggle' name='Dark mode' role='switch' value='on' />
                <label for="dark-mode" class="sr">Dark Mode</label>
                <div class="curtain"></div>
              </form>
            </li>
            </ul>
          </div>
          <div class="btn-group" role="group" aria-label="Button group with nested dropdown">



          </div>
        </nav>
      </div>
    </div>
  )
}
export default Header
