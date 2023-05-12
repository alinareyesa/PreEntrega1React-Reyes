import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import './App.css'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartContextProvider } from './context/cartContext'
import CartContainer from './components/CartContainer/CartContainer'
import NotFound from './components/NotFoundContainer/NotFound'
import Footer from './components/Footer/Footer'
import InfoContainer from './components/Extras/InfoContainer'
import BuyContainer from './components/Extras/BuyContainer'

function App() {

  return (
    <CartContextProvider>
      <BrowserRouter>
        <div className='app'>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/categoria/:cid' element={<ItemListContainer />} />
          <Route path='/detail/:pid' element={<ItemDetailContainer />} />
          <Route path='/cart' element={<CartContainer />} />
          <Route path='/info' element={<InfoContainer />} />
          <Route path='/comprar' element={<BuyContainer />} />
          <Route path='/*' element={<NotFound />} />
        </Routes>
        <Footer />
        </div>
      </BrowserRouter>
    </CartContextProvider>
  )
}

export default App
