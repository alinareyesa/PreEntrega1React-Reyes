import { Link } from "react-router-dom"
import logo from "../../assets/imagenes/logo.png"
import CartWidget from "./CartWidget"

const NavBar = () => {
    return (
        <div>
                <nav className="navbar">
        <div className="logo">
            <img src={logo}/>
        </div>
        <div className="links">
            <ul>
                <li><Link to='/'>Inicio</Link></li>
                <li>
                  <a href="">Productos</a>
                  <ul>
                    <li><Link to='/categoria/choker'>Chokers</Link></li>
                    <li><Link to='/categoria/headband'>Headbands</Link></li>
                  </ul>
                </li>
                <li><a href="">Comprar</a></li>
                <li><a href="">Info</a></li>
              </ul>
        </div>
        <Link to='/cart'><CartWidget /></Link>
    </nav>
        </div>
    )
}

export default NavBar