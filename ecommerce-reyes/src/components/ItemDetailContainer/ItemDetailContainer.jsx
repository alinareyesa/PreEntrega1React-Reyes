import { useEffect, useState } from "react"
import { mockFetch } from "../../utils/mockFetch"
import ItemDetail from "../ItemDetail/ItemDetail"

const ItemDetailContainer = () => {
    const [productos, setProductos] = useState({})
    useEffect(() => {
        mockFetch('1')
        .then(resp => setProductos(resp))
        .catch((err) => console.log(err))
    }, [])
    return(
        <>
             <ItemDetail productos={productos}/>
        </>
)
}

export default ItemDetailContainer