import React, { createContext, useEffect, useState } from 'react'
import Nav from './../NavBar/Nav'
import Hero from './..//Hero/Hero'
import Section from './../Section/Section'
import Section2 from './../section1/Section'
import Footer from '../footer/footer'
import moon from './../../assets/moon-01.svg'
import sun from './../../assets/sun.svg'
export const ThemContext = createContext(null)
const App=() =>{
 const [text , setText]=useState('dark-mode')
 const [imgt , setImgt] = useState(moon)
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
      if(Theme=='light'){
        setText('light-mode')
        setImgt(sun)
      }
      else{
        setText('dark-mode')
        setImgt(moon)
      }
  }

return (
<ThemContext.Provider value={{Theme , ToggleThem}}  >
<Nav ToggleThem={ToggleThem} Theme={Theme} text ={text} imgt={imgt}logo="B-World"  list={[{title:"Home"},{title:"News"},{title:"Promotion of the mount"},{title:"Plublishs"},{title:"Subscribe to the newsletter"}]} btn1="Dark-Mode" btn2="Light-Mode" />
<Hero   Theme={Theme}/>
<Section/>
<Section2/>
<Footer/>
</ThemContext.Provider>
)
}

export default App
