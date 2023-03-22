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
                <li><a href="index.html">Inicio</a></li>
                <li>
                  <a href="">Productos</a>
                  <ul>
                    <li><a href="">Chokers</a></li>
                    <li><a href="">Headbands</a></li>
                  </ul>
                </li>
                <li><a href="">Comprar</a></li>
                <li><a href="">Info</a></li>
              </ul>
        </div>
        <CartWidget />
    </nav>
        </div>
    )
}

export default NavBar