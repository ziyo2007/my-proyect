import React from 'react'
import './Footer.scss'
function Footer() {
  return (
    <div className='footer'>
      <ul className='f-list'>
        <li className='f-list-item'>
          <a href="">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <i class="bi bi-facebook"></i>
          </a>
        </li>
        <li className='f-list-item'>
          <a href="https://github.com/ziyo2007" target='_blank'>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <i class="bi bi-github"></i>
          </a>
        </li>
        <li className='f-list-item'>
          <a href="https://instagram.com/qodirjonov.z?igshid=OGQ5ZDc2ODk2ZA==" target='_blank'>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <i class="bi bi-instagram"></i>
          </a>
        </li>
        <li className='f-list-item'>
          <a href="https://mail.google.com/mail/u/0/#inbox" target='_blank'>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <i class="bi bi-google"></i>
          </a>
        </li>
      </ul>
    </div>
  )
}
export default Footer
