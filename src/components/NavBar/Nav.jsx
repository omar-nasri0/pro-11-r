import React, { createContext, useEffect, useState } from 'react'
import './Nav.css'
import moon from './../../assets/moon-01.svg'
import sun from './../../assets/sun.svg'
import menu2 from './../../assets/Menu.png'
import { Link } from 'react-router-dom'
export const ThemContext = createContext(null)
function Nav({logo , list , btn1 , btn2 , Theme,ToggleThem , text , imgt}) {

        const[menu , range]= useState(false)
      
  return (
        <div className="Nav" id={Theme} >
          <p className="logo">{logo}</p>
            <ul className='main-list'>
              {list.map((item , index)=>{
                return(
                  <li key={index}><Link to={item.path} >{item.title}</Link></li>
              )})}
            </ul>

          <button onClick={ToggleThem} id={Theme} className='bnav'>
              <img src={imgt} alt="" /><p>{text}</p>
          </button>

        

        <img className='list' onClick={()=>{range(!menu)}}src={menu2}/>
        <div className='pop' style={{display:(menu)? "block" : "none"}} id={Theme}>
            <p  onClick={()=>{range(!menu)}} style={{cursor:"pointer"}}> X</p>
                <ul >
            {list.map((item , index)=>{
                return(
                    <li key={index}><Link to={item.path}>{item.title}</Link></li>
                )
                })}
        </ul>

        <hr style={{marginTop:("50px")}} />

        <button onClick={ToggleThem} id={Theme} className='bnav2'>
              <img src={imgt} alt="" />{text}
          </button>
    </div>
    </div>
  )
}

export default Nav