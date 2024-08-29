import React from 'react'
import './Section.css'
function Section() {
  return (
    <div className="father-3">
        <div className="left">
        <h1 className='did'>
        Did you know us?
        </h1>
        <p className='we'>
            We are about books and our purpose is to show you the book who can chage your life or distract you from the real world în a better one. BWorld works with the must popular
            publishs just for your delight. If you are about books, you must to subscribe to our newsletter.</p>
        <div className="form-container">
            <form >
            <input type="text" name="name" placeholder="Your name" required/>
            <input type="email" name="email" placeholder="Your e-mail" required/>
            <button type="submit">Subscribe</button>
            </form>
        </div>
        </div>
        <div className="right">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d53166.26457024075!2d36.36036984173968!3d33.60811862147816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1518e8f3190a5ad5%3A0xbf67d34c98ea2da5!2z2KfZhNiq2YTYjCDYs9mI2LHZitin!5e0!3m2!1sar!2snl!4v1723369272036!5m2!1sar!2snl"
        width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </div>

  )
}

export default Section