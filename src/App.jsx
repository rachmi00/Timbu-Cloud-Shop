
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Cart from './pages/Cart'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Shop from './pages/Shop/Shop'
import ShopContextProvider from './context/shop-context'
import Checkout from './pages/Checkout'
import { PRODUCTS } from './products'

function App() {


  return (
    <>
      <ShopContextProvider>
        <Router>
          <Navbar products={PRODUCTS}/>
          <Routes>
            <Route path='/' element={<Shop />}></Route>
            <Route path='/cart' element={<Cart />}></Route>
            <Route path='/checkout' element={<Checkout/>}></Route>
          </Routes>
          <Footer />
        </Router>
      </ShopContextProvider>
    </>
  )
}

export default App
