function addShoppingItem(ev) {
    // prevent form to submit
    ev.preventDefault()
    const { addItemAmount, addItemName } = ev.target.elements
    const itemText = `${addItemAmount.value}x ${addItemName.value}`
    // find empty list
    const shoppingItems = document.querySelectorAll('.shopping-item')
    for(let item of shoppingItems) {
        if(item.innerText === '')
            return item.innerText = itemText
    }
}

function removeShoppingItem() {
    console.log('remove shopping item');
}

function saveShoppingList() {
    console.log('shopping list saved');
}
