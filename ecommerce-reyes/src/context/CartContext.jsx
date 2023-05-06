import { createContext, useContext, useState } from "react";

const CartContext = createContext([])
export const useCartContext = ()=> useContext(CartContext)

export const CartContextProvider = ({children}) => {
    const [cartList , setCartList] = useState([])

    const addToCart = (newProducts) => {
        const indexProduct = cartList.findIndex(products => products.id == newProducts.id)
        if (indexProduct == -1){
            setCartList([
                ...cartList,
                newProducts
            ])
        } else {
            cartList[indexProduct].quantity += newProducts.quantity
            setCartList([ ...cartList ])
        }
    }

    const totalQuantity = () => cartList.reduce((totalQuantity, objProduct) => totalQuantity += objProduct.quantity, 0)

    const deleteProduct = (pid) => {
        setCartList(cartList.filter(products => products.id != pid))
    }

    const emptyCart = () => {
        setCartList([])
    }

    const finalPrice = () => {
        return cartList.reduce((totalPrice, objProduct) => totalPrice = totalPrice + (objProduct.price * objProduct.quantity), 0)
    }

    return(
        <CartContext.Provider value={{
            cartList, 
            addToCart,
            emptyCart,
            finalPrice,
            totalQuantity,
            deleteProduct
            }}>
            {children}
        </CartContext.Provider>
    )
}