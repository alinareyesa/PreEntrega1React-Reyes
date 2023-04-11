const ItemDetail = ({productos}) => {
    console.log(productos)
    return(
        <div className="item-detail-container">
        <img className="item-detail-img" src={productos.foto}/>
        <h3>{productos.nombre}</h3>
        <p>${productos.precio}</p>
        <button>Comprar</button>
        </div>
    )
}

export default ItemDetail