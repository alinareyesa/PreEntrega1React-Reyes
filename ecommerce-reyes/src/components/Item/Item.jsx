import { Link } from "react-router-dom"

const Item = ({product}) => {
    return(
        <div className="card-products">
        <img className="img-products" src={product.image}/>
        <h3>{product.name}</h3>
        <p>${product.price}</p>
        <Link to={`/detail/${product.id}`}>
         <button>Comprar</button>
        </Link>
    </div>
    )
}

export default Item