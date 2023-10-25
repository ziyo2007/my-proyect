import React, { useContext } from 'react'
import imgMe from '../../img/img__me.jpg'
import './About.scss'
import { Context } from '../../Context/Context'
function About() {
  const {svet, setSvet} = useContext(Context)

  return (
    <div id='about' className='about'>
        <div className="container">
            <div className="about__wrapper">
            <div className="about__left">     
                  <h2 className='about-tittle'>
                  Qodirjonov Ziyodillo
                  {/* <div className='why'>
                  <span className='about-span'>Qodirjonov</span>
                  <span className='about-span'>Ziyodillo</span>
                  </div> */}
                </h2>
                <p className='info-about-me'>
                My full name is Qodirjonov Ziyodillo. <br />
                At the moment I am finishing courses on Frontend. <br />
                 </p>
            </div>
            <div className="about__right">
              <img className='me-img' src={imgMe} alt="img" />
            </div>
            </div>
        </div>
        {/* <ul>
    <li>
      <input type="checkbox" />
      <div>W</div>
    </li>
    <li>
      <input type="checkbox" />
      <div>E</div>
    </li>
    <li>
      <input type="checkbox" />
      <div>B</div>
    </li>
  </ul>
  <ul>
    <li>
      <input type="checkbox" />
      <div>B</div>
    </li>
    <li>
      <input type="checkbox" />
      <div>E</div>
    </li>
    <li>
      <input type="checkbox" />
      <div>K</div>
    </li>
    <li>
      <input type="checkbox" />
      <div>S</div>
    </li>
  </ul> */}
    </div>
  )
}

export default About
