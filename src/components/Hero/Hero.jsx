import React from 'react'
import './Hero.css'
import img from './../../assets/Schmitt_Nocognia_3D_500pcx 1.png'
function Hero({Theme={Theme} }) {
    return (
        <div className="father-1 " id={Theme} >
          <div className="left">
            <p className="Author">Author of august</p>
            <h1 className="eric">Eric-Emanuel Schmitt</h1>
            <p className="eric">Eric-Emmanuel Schmitt has been awarded more than 20 literary prizes and distinctions, and in 2001 he received the title of Chevalier des Arts et des Lettres. His books have been translated into over 40 languages.</p>
            <button  className="view">View his boooks</button>
          </div>
          <div className="right">
            <img src={img} alt="" />
          </div>
        </div>
      )
  
}

export default Hero