import { Route, Routes } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import BrowseCollection from './pages/BrowseCollection'
import JsFull2025 from './pages/JsFull2025'
import JsMarathon from './pages/JsMarathon'
import Asynchronous from './pages/Asynchronous'
import Loginpage from './pages/Loginpage'
import Cart from './pages/Cart'
import Purchase from './pages/Purchase'

function App() {


  return (
    <>
  
     <Routes>
      <Route path='/' element={<LandingPage/>} />
      <Route path='/collection' element={<BrowseCollection/>}/>
      <Route path='/the-complete-javascript-course' element={<JsFull2025/>}/>
      <Route path='/javascript-marathon-interview-questions-series' element={<JsMarathon/>}/>
      <Route path='/asynchronous-javascript-promises-callbacks-async-await' element={<Asynchronous/>} />
      <Route path='/Login' element={<Loginpage/>}/>
      <Route path='/Cart' element={<Cart/>}/>
      <Route path='/Purchase' element={<Purchase/>}/>
     </Routes>
     
    
    </>
  )
}

export default App