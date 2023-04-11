import { useEffect } from "react"
import { useState } from "react"
import { mockFetch } from "../../utils/mockFetch"
import ItemList from "../ItemList/ItemList"

const ItemListContainer = () => {
    const [productos, setProductos]= useState([])
        useEffect(()=>{
            mockFetch()
            .then(resp => setProductos(resp))
            .catch(err => console.log(err))
        }, [])

        console.log(productos)

        return (
            <div className="item-list-container">
                <ItemList productos={productos}/>
            </div>
        )
}


export default ItemListContainer