import { useEffect } from "react"
import { useState } from "react"
import { mockFetch } from "../../utils/mockFetch"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"

const ItemListContainer = () => {
    const [productos, setProductos]= useState([])
    const {cid} = useParams()

        useEffect(()=>{

            if (cid) {
                mockFetch()
                .then(resp => setProductos(resp.filter(prod => prod.categoria == cid)))
                .catch(err => console.log(err))

            } else {
                mockFetch()
                .then(resp => setProductos(resp))
                .catch(err => console.log(err))
            }
        }, [cid])

        console.log(productos)

        return (
            <div className="item-list-container">
                <ItemList productos={productos}/>
            </div>
        )
}


export default ItemListContainer