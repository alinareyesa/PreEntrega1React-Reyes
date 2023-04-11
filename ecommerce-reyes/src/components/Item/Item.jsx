import { Link } from "react-router-dom"

const Item = ({producto}) => {
    return(
        <div className="card-productos">
        <img className="img-productos" src={producto.foto}/>
        <h3>{producto.nombre}</h3>
        <p>${producto.precio}</p>
        <Link to='/detail'>
         <button>Detalle</button>
        </Link>
    </div>
    )
}

export default Item