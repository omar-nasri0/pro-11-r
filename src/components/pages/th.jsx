import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Nav from '../NavBar/Nav'

function Th() {
  const [Theme , setTheme]=useState(()=>{
    const saveMode=localStorage.getItem('Themed')
    return saveMode ? JSON.parse(saveMode):false
  })

  useEffect(()=>{
    document.body.id =Theme
    localStorage.setItem('Themed' , JSON.stringify(Theme))
    
  })
  const ToggleThem =()=>{
    setTheme((curr)=>(curr==="light"?"dark":"light"))
}
    const {id} = useParams()
    const [card , setCard]= useState(null)
    useEffect(()=>{
        const storedinfo  = localStorage.getItem('cards')
        if(storedinfo){
            const cards = JSON.parse(storedinfo)
            const last = cards.find((c)=>c.id===parseInt(id))
            setCard(last)
        }
        
    },[id])
    
    if(!card){
      return<div>Not found</div>
    }


    
  return (
    <div className="">
      <Nav ToggleThem={ToggleThem} Theme={Theme} logo="B-World"  list={[{title:"Home" , path:"/"},{title:"News"},{title:"Promotion of the mount"},{title:"Plublishs"},{title:"Subscribe to the newsletter"}]} btn1="Dark-Mode" btn2="Light-Mode" />
      <div class="container">
        <div class="book-details">
            <div class="book-image">
                <img src={card.image_url} alt="Book Cover"/>
            </div>
            <div class="book-info">
                <h1>{card.title}</h1>
                <h3>{card.authors}</h3>
                <p><strong>About Book:</strong></p>
                <p>{card.description}</p>
                <div class="actions">
                    <button class="btn add-to-cart">Add to cart</button>
                    <button class="btn favorite">Favorite</button>
                </div>
                <div class="book-meta">
                    <p><div className="p">Pages number:</div> 860 Pages{card.num_pages}</p>
                    <p><div className="p">Rating Count:</div> {card.rating_count}</p>
                    <p><div className="p">Reviews:</div> {card.review_count}</p>
                </div>
            </div>
        </div>
        <hr />
        <footer>
            <p>© All copyrights are reserved. B-World 2022.</p>
        </footer>
    </div>
    </div>
  )
}

export default Th