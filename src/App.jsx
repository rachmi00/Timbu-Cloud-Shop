
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Cart from './pages/Cart'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Shop from './pages/Shop/Shop'
import ShopContextProvider from './context/shop-context'

function App() {


  return (
    <>
      <ShopContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path='/' element={<Shop />}></Route>
            <Route path='/cart' element={<Cart />}></Route>
          </Routes>
          <Footer />
        </Router>
      </ShopContextProvider>
    </>
  )
}

export default App
