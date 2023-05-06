let products = [
    {id: '1', category: 'choker', name: 'choker lolita', stock: 12, price: 260, image: '../src/assets/imagenes/chokerlolita.jpg'},
    {id: '2', category: 'choker', name: 'choker goth', stock: 14, price: 250, image: '../src/assets/imagenes/chokergoth.jpg'},
    {id: '3', category: 'headband', name: 'headband lolita', stock: 10, price: 450, image: '../src/assets/imagenes/headbandlolita.jpg'},
    {id: '4', category: 'headband', name: 'headband goth', stock: 12, price: 450, image: '../src/assets/imagenes/headbandgoth.jpg'},
    {id: '5', category: 'choker', name: 'choker moon', stock: 10, price: 300, image: '../src/assets/imagenes/chokermoon.jpg'},
    {id: '6', category: 'headband', name: 'headband bunny', stock: 8, price: 500, image: '../src/assets/imagenes/bunnyheadband.jpg'}

]

export let mockFetch = (id) => {
    return new Promise ((resolve, reject) => {
        setTimeout (() =>{
            resolve(id ? products.find(prod => prod.id == id) : products)
        }, 2000)
    })
}