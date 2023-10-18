import React from 'react'
import imgMe from '../../img/img__me.jpg'
import './About.scss'
function About() {
  return (
    <div className='about'>
        <div className="container">
            <div className="about__wrapper">
            <div className="about__left">   
                  <h2 className='about-tittle'>
                  <span className='about-span'>ABOUT</span>
                  <span className='about-span'>ME</span>
                </h2>
                <h1 className='about__tittle'>Qodirjonov Ziyodillo</h1>
                <p className='info-about-me'>
                My full name is Qodirjonov Ziyodillo. <br />
                At the moment I am finishing courses on Frontend. <br />
                I am also interested in being a doctor and am even studying. <br /> In the future I want to become a good doctor and programmer.</p>
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
