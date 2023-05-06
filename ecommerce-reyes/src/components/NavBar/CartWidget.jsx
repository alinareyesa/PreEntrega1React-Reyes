import carritoicon from "../../assets/imagenes/carritoicon.png"
import { useCartContext } from "../../context/cartContext"

const CartWidget = () => {
    const { totalQuantity } = useCartContext()
    return (
        <div className="cart-widget">
            <div></div>
            <img src={carritoicon}/>
            <p>{totalQuantity() >0 && totalQuantity()}</p>
        </div>
    )
}

export default CartWidget