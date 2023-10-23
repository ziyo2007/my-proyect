import React from 'react'
import './Portfolio.scss'
import firstPort from '../../img/first-port.jpg'
import secondPort from '../../img/second-port.jpg'
import thirdPort from '../../img/third_port.jpg'


function Portfolio() {
  return (
    <div className='portfolio'> 
      <div className="container">
        <div className="wrapper">
            <ul className='portfolio-list'>
                <li className='portfolio__list-item'>
                    <img className='first-img' src={firstPort} alt="" />
                    <h2>salom</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                         Facere quo fugiat hic aperiam! Voluptas esse, doloremque 
                         deleniti eligendi ullam quisquam voluptatum rem, cum 
                         saepe maxime totam, autem aut minus nulla!</p>
                         <button>Read more</button>
                </li>
                <li className='portfolio__list-item'>
                    <img className='sec-img' src={secondPort} alt="" />
                    <h2>salom</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex odit atque mollitia. 
                        Fugit rem architecto alias ullam, repellat doloribus voluptat
                        e, similique vel fuga mollitia minima esse, consequuntur necessitatibus ipsa odit?</p>
                    <button>Read more</button>
                </li>
                <li className='portfolio__list-item'>
                    <img className='third-img' src={thirdPort} alt="" />
                    <h2>salom</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                        Aliquid officia praesentium possimus expedita iure,
                         voluptatem quam libero, consequatur vitae temporibus, eaque repudiandae
                         repellat? Maxime minus blanditiis expedita reiciendis ea rerum?</p>
                         <button>Read more</button>
                </li>
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Portfolio
