import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import './App.css'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartContextProvider } from './context/cartContext'
import CartContainer from './components/CartContainer/CartContainer'
import NotFound from './components/NotFoundContainer/NotFound'

function App() {

  return (
    <BrowserRouter>
    <CartContextProvider>
    <div className='app'>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/categoria/:cid' element={<ItemListContainer />} />
          <Route path='/detail/:pid' element={<ItemDetailContainer />} />
          <Route path='/cart' element={<CartContainer />} />
          <Route path='/*' element={<NotFound />} />
        </Routes>
    </div>
    </CartContextProvider>
    </BrowserRouter>
  )
}

export default App
