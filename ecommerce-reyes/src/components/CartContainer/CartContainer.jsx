import { Link } from "react-router-dom"
import { useCartContext } from "../../context/cartContext"
import { addDoc, collection, getFirestore } from "firebase/firestore"
import { useState } from "react"

const CartContainer = () => {
    const [ id, setId ] = useState(null)
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        repeatedEmail: '',
    })
    const {cartList, emptyCart, finalPrice, deleteProduct} = useCartContext()

    console.log(cartList)

    const handleSubmit = async (event) => {
        event.preventDefault()

        const order ={
            buyer: formData,
            items: cartList.map(({id, name, price}) => ({id, name, price})),
            total: finalPrice()
        }

        if(order.buyer.email != order.buyer.repeatedEmail){
            alert("Los email deben coincidir")
            return
        }
        const db = getFirestore()
        const queryCollection = collection(db, 'orders')
        addDoc(queryCollection, order)
        .then(resp => setId(resp.id))
        .catch(err => console.log(err))
        .finally(() =>{
            console.log('termino la promesa')
            emptyCart()
        })
    }

    console.log(formData)

    const handleOnChange = (event) => {
        console.log(event.target.name)
        console.log(event.target.value)
        setFormData({
            ...formData,
            [event.target.name] : event.target.value
        })
    }

    return( <>
        {id && <div className="id-order"><h2>El id de la orden de su compra es: {id}</h2></div>}
        {cartList.length == 0 ?
            <div className="cart-empty-div">
                <h2>Su carrito está vacío</h2>
                <Link to="/"><button>Ir a comprar</button></Link>
            </div>
            :
            <div className="cart-container">
                {cartList.map(products =>(
                    <div className="cart-product-list" key={products.id}>
                        <img src={products.image}/>
                        <p className="cart-product-list-name">{products.name}</p>
                        <p className="cart-product-list-quantity">x{products.quantity}</p> 
                        <p className="cart-product-list-price">${products.price}</p>
                        <button onClick={() => deleteProduct(products.id)} >X</button>
                    </div>
                ))}
                <div className="final-price-div">
                    <h3>Precio total: ${finalPrice()}</h3>                   
                    <form onSubmit={handleSubmit}>
                        <input 
                            type="text"
                            name="name"
                            placeholder="Ingrese el nombre"
                            onChange={handleOnChange}
                            value={formData.name}
                        />
                        <input 
                            type="text"
                            name="phone"
                            placeholder="Ingrese el teléfono"
                            onChange={handleOnChange}
                            value={formData.phone}
                        />
                        <input 
                            type="text"
                            name="email"
                            placeholder="Ingrese el email"
                            onChange={handleOnChange}
                            value={formData.email}
                        />
                        <input 
                            type="text"
                            name="repeatedEmail"
                            placeholder="Repita el email"
                            onChange={handleOnChange}
                            value={formData.repeatedEmail}
                        />
                          <button type='submit'>Realizar compra</button>
                    </form>
                    <button className="cart-button" onClick={emptyCart}>Vaciar carrito</button>
                </div>
            </div>
        }
    </>
        
    )
}

export default CartContainer