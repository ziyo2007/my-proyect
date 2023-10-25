import React from 'react'
import './Callme.scss'



function Callme() { 

  return (
    <div className='callme container'>
      <h2 className='tittle-me'>About Me</h2>
      <p className='info-me'>At the moment I am finishing courses on
         Frontend.I am also interested in 
         being a doctor and am even studying. <br /> 
         In the future I want to become a good doctor and programmer.</p>
        <ul className='aboutmore__list'>
            <li>
                <a className='aboutmore__link' target='_blank' href="https://mail.google.com/mail/u/0/#inbox">Here you can see my google account</a>
            </li>
            <li>
                <a href="https://github.com/ziyo2007" target='_blank'>Here you can see my github account</a>
            </li>
            <li>
                <a href="tel:998905247027" target='_blank'>Here you can contact me on the telephone</a>
            </li>
                        {/* <li className='aboutmore__item'>
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
                        </li> */}
                    </ul>
  



 




    </div>
  )
}

export default Callme
