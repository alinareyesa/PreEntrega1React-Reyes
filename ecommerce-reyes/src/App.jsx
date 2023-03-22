import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import './App.css'

function App() {

  return (
    <div className='app'>
      <NavBar />
      <ItemListContainer greeting={"Item list texto"}/>
    </div>
  )
}

export default App
