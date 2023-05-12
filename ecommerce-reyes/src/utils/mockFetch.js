let products = [
    {id: '1', category: 'choker', name: 'choker lolita', stock: 12, price: 260, image: '/public/images/chokerlolita.jpg'},
    {id: '2', category: 'choker', name: 'choker goth', stock: 14, price: 250, image: '/public/images/chokergoth.jpg'},
    {id: '3', category: 'headband', name: 'headband lolita', stock: 10, price: 450, image: '/public/images/headbandlolita.jpg'},
    {id: '4', category: 'headband', name: 'headband goth', stock: 12, price: 450, image: '/public/images/headbandgoth.jpg'},
    {id: '5', category: 'choker', name: 'choker moon', stock: 10, price: 300, image: '/public/images/chokermoon.jpg'},
    {id: '6', category: 'headband', name: 'headband bunny', stock: 8, price: 500, image: '/public/images/bunnyheadband.jpg'},
    {id: '7', category: 'headband', name: 'headband neko', stock: 10, price: 500, image: '/public/images/headbandneko.jpg'},
    {id: '8', category: 'choker', name: 'choker neko', stock: 10, price: 280, image: '/public/images/chokerneko.jpg'},
    {id: '9', category: 'choker', name: 'choker sanrio', stock: 10, price: 300, image: '/public/images/chokersanrio.jpg'}
]

export let mockFetch = (id) => {
    return new Promise ((resolve, reject) => {
        setTimeout (() =>{
            resolve(id ? products.find(prod => prod.id == id) : products)
        }, 2000)
    })
}