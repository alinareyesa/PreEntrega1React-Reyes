import { useState } from "react"
import { useCartContext } from "../../context/cartContext"
import { ItemCount } from "../ItemCount/ItemCount"
import { Link } from "react-router-dom"

const ItemDetail = ({products}) => {
    const [isQuantity, setQuantity] = useState(false)
    const {addToCart} = useCartContext()

    const onAdd = (quantity) => {
        console.log(quantity)
        addToCart({...products, quantity: quantity})
        setQuantity(true)
    }
    return(<div className="item-detail-container">{ isQuantity ?
            <>
                <Link to="/cart"><button>Finalizar compra</button></Link>
                <Link to="/"><button>Seguir comprando</button></Link>
            </>
        :

         <>
            <img className="item-detail-img" src={products.image}/>
            <div>
            <h3>{products.name}</h3>
            <p>${products.price}</p>
            <ItemCount initial={1} stock={10} onAdd={onAdd} />
            </div>
         </>
    }
    </div>
    )
}

export default ItemDetail