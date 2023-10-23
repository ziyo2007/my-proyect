import React from 'react'
import './Call.scss'



function Callme() {

  return (
    <div className='callme'>
      <h2>About Me</h2>
      <p></p>
        <ul className='aboutmore__list'>
                        <li className='aboutmore__item'>
                            <a className='aboutmore__link' href="#/">  
                            </a>
                        </li>
                        <li className='aboutmore__item'>
                            <a className='aboutmore__link'  href="https://mail.google.com/mail/u/0/#inbox">
                                <div className="aboutmore__inner">
                                    <span className='aboutmore__inner1'></span>
                                </div>
                                <span className='aboutmore__link-span'>
                                    <h4>Email Address</h4>
                                    <p><a href="https://mail.google.com/mail/u/0/#inbox">qodirjonovz6@gmail.com</a></p>
                                </span>
                            </a>
                        </li>
                        <li className='aboutmore__item'>
                            <a className='aboutmore__link' href="#/">
                                <div className="aboutmore__inner">
                                    <span className='aboutmore__inner1'></span>
                                </div>
                                <span  className='aboutmore__link-span3'>
                                    <h4>Git Hub</h4>
                                    <p><a href="https://github.com/ziyo2007"></a>ziyo2007</p>
                                </span>
                            </a>
                        </li>
                        <li className='aboutmore__item'>
                            <a className='aboutmore__link' href="tel:998973394343">
                                <div className="aboutmore__inner">
                                    <span className='aboutmore__inner1'></span>
                                </div>
                                <span className='aboutmore__link-span4'>
                                    <h4>Phone Number</h4>
                                    <p><a href="tel:998905247027">998905247027</a></p>
                                </span>
                            </a>
                        </li>
                    </ul>
  



 




    </div>
  )
}

export default Callme