function shoppingItemsArray() {
    // null items
    const nullArray = [
        { id: 1, amount: null, item: null },
        { id: 2, amount: null, item: null },
        { id: 3, amount: null, item: null },
        { id: 4, amount: null, item: null }
    ]
    // shopping items
    const itemsArray = [
        { id: 1, amount: 5, name: 'Ichi Ocha Greentea' },
        { id: 2, amount: 2, name: 'Beng Beng' },
        { id: 3, amount: 1, name: 'Minyak Goreng' },
        { id: 4, amount: 2, name: 'Boncabe level 15' }
    ]
    // generate items
    const randomArray = [
        { id: 1, amount: 5, name: 'Ichi Ocha Greentea' },
        { id: 2, amount: 2, name: 'Beng Beng' },
        { id: 3, amount: 1, name: 'Minyak Goreng' },
        { id: 4, amount: 5, name: 'Yakult' },
        { id: 5, amount: 2, name: 'Tepung Terigu' },
        { id: 6, amount: 4, name: 'Blueband' },
        { id: 7, amount: 2, name: 'Susu L-Men' },
        { id: 8, amount: 1, name: 'Baygon HIT' },
        { id: 9, amount: 3, name: 'Oreo' },
        { id: 10, amount: 5, name: 'Indomie Cabe Ijo' },
        { id: 11, amount: 2, name: 'Cottonbud' },
        { id: 12, amount: 1, name: 'Sikat Gigi' },
    ]
    return [nullArray, itemsArray, randomArray]
}

export { shoppingItemsArray }