import { useCount } from "../hooks/useCount"

export const ItemCount = ({initial=1, stock=10, min=1, onAdd}) =>{
    const {count, increment, decrement, reset} = useCount (1, stock, initial)

    function handleOnAdd() {
        onAdd(count)
    }

    return(
        <div className="count">
            <h2>Cantidad: {count}</h2>
            <button onClick={increment}> + </button>
            <button onClick={decrement}> - </button>
            <button onClick={reset}> reset </button>
            <button onClick={handleOnAdd}>agregar al carrito</button>
        </div>
    )
} 