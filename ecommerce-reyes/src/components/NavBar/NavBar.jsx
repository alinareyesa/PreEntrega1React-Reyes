import { Link } from "react-router-dom"
import logo from "../../../public/images/logo.png"
import CartWidget from "./CartWidget"

const NavBar = () => {
    return (
        <div>
                <nav className="navbar">
        <div className="logo">
            <Link to="/"><img src={logo}/></Link>
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
                <li><Link to='/comprar'>Comprar</Link></li>
                <li><Link to='/info'>Info</Link></li>
              </ul>
        </div>
        <Link to='/cart'><CartWidget /></Link>
    </nav>
        </div>
    )
}

export default NavBar