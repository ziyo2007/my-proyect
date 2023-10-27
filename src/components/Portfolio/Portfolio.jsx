import React from 'react'
import './Portfolio.scss'
import firstPort from '../../img/first-port.jpg'
import secondPort from '../../img/second-port.jpg'
// import thirdPort from '../../img/third_port.jpg'
import thirdPort from '../../img/third-port.jpg'


function Portfolio() {
  return (
    <div id='portfolio' className='portfolio'> 
      <div className="container">
        <div className="wrapper">
            <div className="card1">
              <img className='port-img1' src={firstPort} alt="" />
              <div className="card1-body">
                <h2 className='card1-tittle'>proyect</h2>
                <p className='card1-info'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio aspernatur, corporis voluptas accusamus tempore necessitatibus labore, error quod exercitationem dolorem ut accusantium? Sed, necessitatibus consequuntur?</p>
                <a href="https://f3-team-project3.vercel.app/ " target='_blank'><button className='card1-btn'>Go to proyect</button></a>
              </div>
            </div>
            <div className="card2">
              <img className='port-img2' src={secondPort} alt="" />
              <div className="card2-body">
                <h2 className='card2-tittle'>proyect</h2>
                <p className='card2-info'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio aspernatur, corporis voluptas accusamus tempore necessitatibus labore, error quod exercitationem dolorem ut accusantium? Sed, necessitatibus consequuntur?</p>
                <a href="https://f3-badiat-proyekt.vercel.app/ " target='_blank'><button className='card2-btn'>Go to proyect</button></a>
              </div>
            </div>
            <div className="card3">
              <img className='port-img3' src={thirdPort} alt="" />
              <div className="card3-body">
                <h2 className='card3-tittle'>proyect</h2>
                <p className='card3-'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio aspernatur, corporis voluptas accusamus tempore necessitatibus labore, error quod exercitationem dolorem ut accusantium? Sed, necessitatibus consequuntur?</p>
                <a href="https://portifolio-first-project.vercel.app/ " target='_blank'><button className='card3-btn'>Go to proyect</button></a>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio
