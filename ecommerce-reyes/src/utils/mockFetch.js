let productos = [
    {id: '1', categoria: 'choker', nombre: 'choker lolita', stock: 12, precio: 260, foto: '../src/assets/imagenes/chokerlolita.jpg'},
    {id: '2', categoria: 'choker', nombre: 'choker goth', stock: 14, precio: 250, foto: '../src/assets/imagenes/chokergoth.jpg'},
    {id: '3', categoria: 'headband', nombre: 'headband lolita', stock: 10, precio: 450, foto: '../src/assets/imagenes/headbandlolita.jpg'},
    {id: '4', categoria: 'headband', nombre: 'headband goth', stock: 12, precio: 450, foto: '../src/assets/imagenes/headbandgoth.jpg'},
    {id: '5', categoria: 'choker', nombre: 'choker moon', stock: 10, precio: 300, foto: '../src/assets/imagenes/chokermoon.jpg'},
    {id: '6', categoria: 'headband', nombre: 'headband bunny', stock: 8, precio: 500, foto: '../src/assets/imagenes/bunnyheadband.jpg'}

]

export let mockFetch = (id) => {
    return new Promise ((resolve, reject) => {
        setTimeout (() =>{
            resolve(id ? productos.find(prod => prod.id == id) : productos)
        }, 1000)
    })
}