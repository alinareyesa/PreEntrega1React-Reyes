import { useEffect } from "react"
import { useState } from "react"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import Loading from "../Loading/Loading"
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore"

const ItemListContainer = () => {
    const [products, setProducts]= useState([])
    const [isLoading, setIsLoading] = useState(true)
    const {cid} = useParams()

        useEffect(()=>{

             if (cid) {
                const db = getFirestore()

                const queryCollection = collection(db, "products")
    
                const queryFilter = query(queryCollection, where('category', '==', cid))
    
                getDocs(queryFilter)
                    .then(resp => setProducts(resp.docs.map(product => ({id: product.id, ...product.data()}))))
                    .catch(err => console.log(err))
                    .finally(()=> setIsLoading(false))
             } else {
                const db = getFirestore()

                const queryCollection = collection(db, "products")
    
                getDocs(queryCollection)
                    .then(resp => setProducts(resp.docs.map(product => ({id: product.id, ...product.data()}))))
                    .catch(err => console.log(err))
                    .finally(()=> setIsLoading(false))
             }
         }, [cid])

        return (
            <> { isLoading ? 
                <Loading />
            :
                <div className="item-list-container">
                    <ItemList products={products}/>
                </div>
            }
            </>
        )
}


export default ItemListContainer