
import Inter  from './components/pages/inter'
import Th from './components/pages/th'
import { Route, Routes } from 'react-router-dom'

const App=() =>{


return (
 <Routes>
  <Route path='/' element={<Inter/>}/>
  <Route path='/th/:id' element={<Th/>}/>
 </Routes>
)
}

export default App
