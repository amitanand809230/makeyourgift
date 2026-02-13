import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import GiftHampersCategory from './components/GiftHampersCategory'
import Footer from './components/Footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import GiftHampers from './pages/GiftHampers'
import Bracelet from './pages/Bracelet'
import GiftForKids from './pages/GiftForKids'
import Devotional from './pages/Devotional'
import GiftForHer from './pages/GiftForHer'
import SurpriseInBox from './pages/SurpriseInBox'
import ValentineGift from './pages/ValentineGift'
import Home from './pages/Home'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <Routes>
         {/* HOME PAGE */}
        <Route path="/" element={<Home/>} />
        <Route path='/gifthampers' element={<GiftHampers/>}/>
        <Route path='/bracelet' element={<Bracelet/>}/>
        <Route path='/giftforkids' element={<GiftForKids/>}/>
        <Route path='/devotional' element={<Devotional/>}/>
        <Route path='/giftforher' element={<GiftForHer/>}/>
        <Route path='/surpriseinbox' element={<SurpriseInBox/>}/>
        <Route path='/valentinegift' element={<ValentineGift/>}/>

      </Routes>

      
      <Footer/>
      </BrowserRouter>
      
    </>
  )
}

export default App
