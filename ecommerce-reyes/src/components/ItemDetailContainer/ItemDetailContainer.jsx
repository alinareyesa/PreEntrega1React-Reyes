import { useEffect, useState } from "react"
import { mockFetch } from "../../utils/mockFetch"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"

const ItemDetailContainer = () => {
    const [productos, setProductos] = useState({})
    const {pid} = useParams()

    useEffect(() => {
        mockFetch(pid)
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