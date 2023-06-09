import { useEffect, useState } from "react"
import { mockFetch } from "../../utils/mockFetch"
import ItemDetail from "../ItemDetail/ItemDetail"
import { Link, useParams } from "react-router-dom"
import Loading from "../Loading/Loading"
import { doc, getDoc, getFirestore } from "firebase/firestore"
import NotFound from "../NotFoundContainer/NotFound"

const ItemDetailContainer = () => {
    const [products, setProducts] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const {pid} = useParams()

    useEffect(() => {
        const dbFirestore = getFirestore()
        const queryDocument = doc(dbFirestore, 'products', pid)
        
        getDoc(queryDocument)
            .then(resp => setProducts({id: resp.id, ...resp.data()}))
            .catch((err) => console.log(err))
            .finally(()=> setIsLoading(false))
    }, [])

    if (products.name == undefined && !isLoading) {
        return (<NotFound/>)
    } else {
        return(
            <> { isLoading ? 
                <Loading />
            :
                <ItemDetail products={products}/>
            }
            </>
        )
    }
}

export default ItemDetailContainer