import React, { useState } from 'react'
import openb from './../../assets/book-open-01.svg'
import star from './../../assets/Vector.png'
import './Section.css'
import { json, Link } from 'react-router-dom'
function Section() {

  const  [cards , setCards ]=useState([
    {
      id: 1,
      title: "The Hunger Games",
      authors: "Suzanne Collins",
      description: "Winning will make you famous. Losing means certain death.The nation of Panem, formed from a post-apocalyptic North America, is a country that consists of a wealthy Capitol region surrounded by 12 poorer districts. Early in its history, a rebellion led by a 13th district against the Capitol resulted in its destruction and the creation of an annual televised event known as the Hunger Games. In punishment, and as a reminder of the power and grace of the Capitol, each district must yield one boy and one girl between the ages of 12 and 18 through a lottery system to participate in the games. The 'tributes' are chosen during the annual Reaping and are forced to fight to the death, leaving only one survivor to claim victory.When 16-year-old Katniss's young sister, Prim, is selected as District 12's female representative, Katniss volunteers to take her place. She and her male counterpart Peeta, are pitted against bigger, stronger representatives, some of whom have trained for this their whole lives. , she sees it as a death sentence. But Katniss has been close to death before. For her, survival is second nature.",
      edition: "",
      format: "Hardcover",
      num_pages: "374",
      rating: "4.33",
      rating_count: "5519135",
      review_count: "160706",
      genres: "Young Adult, Fiction, Science Fiction, Dystopia, Fantasy, Science Fiction",
      genre_list: "Young Adult,Fiction,Science Fiction,Dystopia,Fantasy",
      image_url: "https://images.gr-assets.com/books/1447303603l/2767052.jpg",
      Quote1: "“You don’t forget the face of the person who was your last hope.”",
      Quote2: "“Remember, we're madly in love, so it's all right to kiss me anytime you feel like it.”",
      Quote3: "“May the odds be ever in your favor!”"
    },
    {
      id: 2,
      title: "Harry Potter and the Order of the Phoenix",
      authors: "J.K. Rowling",
      description: "There is a door at the end of a silent corridor. And it’s haunting Harry Pottter’s dreams. Why else would he be waking in the middle of the night, screaming in terror?Harry has a lot on his mind for this, his fifth year at Hogwarts: a Defense Against the Dark Arts teacher with a personality like poisoned honey; a big surprise on the Gryffindor Quidditch team; and the looming terror of the Ordinary Wizarding Level exams. But all these things pale next to the growing threat of He-Who-Must-Not-Be-Named---a threat that neither the magical government nor the authorities at Hogwarts can stop.As the grasp of darkness tightens, Harry must discover the true depth and strength of his friends, the importance of boundless loyalty, and the shocking price of unbearable sacrifice.His fate depends on them alll.(back cover)",
      edition: "US Edition",
      format: "Paperback",
      num_pages: "870",
      rating: "4.48",
      rating_count: "2041594",
      review_count: "33264",
      genres: "Fantasy, Young Adult, Fiction",
      genre_list: "Fantasy,Young Adult,Fiction",
      image_url: "https://images.gr-assets.com/books/1255614970l/2.jpg",
      Quote1: "“Wit beyond measure is man’s greatest treasure.”",
      Quote2: "“Indifference and neglect often do much more damage than outright dislike.”",
      Quote3: "“Things we lose have a way of coming back to us in the end, if not always in the way we expect.”"
    },
    {
      id: 3,
      title: "To Kill a Mockingbird",
      authors: "Harper Lee",
      description: "The unforgettable novel of a childhood in a sleepy Southern town and the crisis of conscience that rocked it, To Kill A Mockingbird became both an instant bestseller and a critical success when it was first published in 1960. It went on to win the Pulitzer Prize in 1961 and was later made into an Academy Award-winning film, also a classic.Compassionate, dramatic, and deeply moving, To Kill A Mockingbird takes readers to the roots of human behavior - to innocence and experience, kindness and cruelty, love and hatred, humor and pathos. Now with over 18 million copies in print and translated into forty languages, this regional story by a young Alabama woman claims universal appeal. Harper Lee always considered her book to be a simple love story. Today it is regarded as a masterpiece of American literature.",
      edition: "50th Anniversary",
      format: "Paperback",
      num_pages: "324",
      rating: "4.27",
      rating_count: "3745197",
      review_count: "79450",
      genres: "Classics, Fiction, Historical, Historical Fiction, Academic, School",
      genre_list: "Classics,Fiction,Historical,Historical Fiction,Academic,School",
      image_url: "https://images.gr-assets.com/books/1361975680l/2657.jpg",
      Quote1: "“Until I feared I would lose it, I never loved to read. One does not love breathing.”",
      Quote2: "“People generally see what they look for, and hear what they listen for.”",
      Quote3: "“The one thing that doesn't abide by majority rule is a person's conscience.”"
    },
    {
      id: 4,
      title: "Pride and Prejudice",
      authors: "Jane Austen",
      description: "Since its immediate success in 1813, Pride and Prejudice has remained one of the most popular novels in the English language. Jane Austen called this brilliant work \"her own darling child\" and its vivacious heroine, Elizabeth Bennet, \"as delightful a creature as ever appeared in print.\" The romantic clash between the opinionated Elizabeth and her proud beau, Mr. Darcy, is a splendid performance of civilized sparring. And Jane Austen's radiant wit sparkles as her characters dance a delicate quadrille of flirtation and intrigue, making this book the most superb comedy of manners of Regency England.",
      edition: "Modern Library Classics, USA / CAN",
      format: "Paperback",
      num_pages: "279",
      rating: "4.25",
      rating_count: "2453620",
      review_count: "54322",
      genres: "Classics, Fiction, Romance",
      genre_list: "Classics,Fiction,Romance",
      image_url: "https://images.gr-assets.com/books/1320399351l/1885.jpg",
      Quote1: "“A lady's imagination is very rapid; it jumps from admiration to love, from love to matrimony in a moment.”",
      Quote2: "“It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.”",
      Quote3: "“I must learn to be content with being happier than I deserve.”"
    },
    {
      id:5,
      title: "Twilight",
      authors: "Stephenie Meyer",
      description: "About three things I was absolutely positive.First, Edward was a vampire.Second, there was a part of him—and I didn't know how dominant that part might be—that thirsted for my blood.And third, I was unconditionally and irrevocably in love with him.In the first book of the Twilight Saga, internationally bestselling author Stephenie Meyer introduces Bella Swan and Edward Cullen, a pair of star-crossed lovers whose forbidden relationship ripens against the backdrop of small-town suspicion and a mysterious coven of vampires. This is a love story with bite.",
      edition: "",
      format: "Paperback",
      num_pages: "498",
      rating: "3.58",
      rating_count: "4281268",
      review_count: "97991",
      genres: "Young Adult, Fantasy, Romance, Paranormal, Vampires, Fiction, Fantasy, Paranormal",
      genre_list: "Young Adult,Fantasy,Romance,Paranormal,Vampires,Fiction",
      image_url: "https://images.gr-assets.com/books/1361039443l/41865.jpg",
      Quote1: "“I like the night. Without the dark, we'd never see the stars.”",
      Quote2: "“I decided as long as I'm going to hell, I might as well do it thoroughly.”",
      Quote3: "“When life offers you a dream so far beyond any of your expectations, it’s not reasonable to grieve when it comes to an end.”"
    },
    {
      id: 6,
      title: "The Book Thief",
      authors: "Markus Zusak",
      description: "Trying to make sense of the horrors of World War II, Death relates the story of Liesel--a young German girl whose book-stealing and story-telling talents help sustain her family and the Jewish man they are hiding, as well as their neighbors.",
      edition: "First American Edition (US / CAN)",
      format: "Hardcover",
      num_pages:" 552",
      rating: "4.36",
      rating_count: "1485632",
      review_count: "100821",
      genres: "Historical, Historical Fiction, Fiction, Young Adult",
      genre_list: "Historical,Historical Fiction,Fiction,Young Adult",
      image_url: "https://images.gr-assets.com/books/1522157426l/19063.jpg",
      Quote1: "“You don’t forget the face of the person who was your last hope.”",
      Quote2: "“Remember, we're madly in love, so it's all right to kiss me anytime you feel like it.”",
      Quote3: "“May the odds be ever in your favor!”"
    },
    {
      id: 7,
      title: "The Chronicles of Narnia",
      authors: "C.S. Lewis",
      description: "Journeys to the end of the world, fantastic creatures, and epic battles between good and evil—what more could any reader ask for in one book? The book that has it all is The Lion, the Witch and the Wardrobe, written in 1949 by Clive Staples Lewis. But Lewis did not stop there. Six more books followed, and together they became known as The Chronicles of Narnia.For the past fifty years, The Chronicles of Narnia have transcended the fantasy genre to become part of the canon of classic literature. Each of the seven books is a masterpiece, drawing the reader into a land where magic meets reality, and the result is a fictional world whose scope has fascinated generations.This edition presents all seven books—unabridged—in one impressive volume. The books are presented here in chronlogical order, each chapter graced with an illustration by the original artist, Pauline Baynes. Deceptively simple and direct, The Chronicles of Narnia continue to captivate fans with adventures, characters, and truths that speak to readers of all ages, even fifty years after they were first published.",
      edition: "Reissue Edition",
      format: "Paperback",
      num_pages: "767",
      rating: "4.25",
      rating_count: "437829",
      review_count: "9439",
      genres: "Fantasy, Classics, Fiction, Young Adult, Childrens",
      genre_list: "Fantasy,Classics,Fiction,Young Adult,Childrens",
      image_url: "https://images.gr-assets.com/books/1449868701l/11127.jpg",
      Quote1: "“Wit beyond measure is man’s greatest treasure.”",
      Quote2: "“Indifference and neglect often do much more damage than outright dislike.”",
      Quote3: "“Things we lose have a way of coming back to us in the end, if not always in the way we expect.”"
    },
    {
      id: 8,
      title: "Animal Farm",
      authors: "George Orwell",
      description: "A farm is taken over by its overworked, mistreated animals. With flaming idealism and stirring slogans, they set out to create a paradise of progress, justice, and equality. Thus the stage is set for one of the most telling satiric fables ever penned –a razor-edged fairy tale for grown-ups that records the evolution from revolution against tyranny to a totalitarianism just as terrible.\nWhen Animal Farm was first published, Stalinist Russia was seen as its target. Today it is devastatingly clear that wherever and whenever freedom is attacked, under whatever banner, the cutting clarity and savage comedy of George Orwell’s masterpiece have a meaning and message still ferociously fresh.",
      edition: "",
      format: "Paperback",
      num_pages: "122",
      rating: "3.9",
      rating_count: "2235084",
      review_count: "42156",
      genres: "Classics, Fiction, Science Fiction, Dystopia, Fantasy, Literature, Academic, School, Politics, Science Fiction, Novels, Academic, Read For School",
      genre_list: "Classics,Fiction,Science Fiction,Dystopia,Fantasy,Literature,Academic,School,Politics,Novels,Read For School",
      image_url: "https://images.gr-assets.com/books/1424037542l/7613.jpg",
      Quote1: "“Until I feared I would lose it, I never loved to read. One does not love breathing.”",
      Quote2: "“People generally see what they look for, and hear what they listen for.”",
      Quote3: "“The one thing that doesn't abide by majority rule is a person's conscience.”"
    }
  ])
  localStorage.setItem('cards' , JSON.stringify(cards) )
  return (
    <div className="section">
      <h1 className="Select">Selected For You</h1>
      <div className="father-2">
      {cards.map(card=>(
        <div className="cart" key={card.id}>
          <img src={card.image_url} alt="" className='film' />
          <p className="name">{card.title}</p>
          <div className="info">
            <div className="bock">
            <img className="openbock" src={openb}></img>
            <p className="mach">{card.num_pages}</p>
            </div>
            <div className="Rstar">
            <img src={star} alt="" className="star" />
            <p className="numstar">{card.rating}</p>
            </div>
          </div>
          <button className='Show' ><Link to={`/Th/${card.id}`}>Show Details</Link></button>
        </div>
      ))}
      </div>
    </div>
  )
}

export default Section