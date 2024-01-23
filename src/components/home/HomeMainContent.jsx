import React, { useEffect, useState } from "react"
import { AddShoppingItem, SaveShoppingList } from "./HomeButtons"

export default function HomeMainContent() {
    // null items
    const nullArray = [
        { id: 1, amount: null, item: null },
        { id: 2, amount: null, item: null },
        { id: 3, amount: null, item: null },
        { id: 4, amount: null, item: null }
    ]
    const [shoppingNull, setShoppingNull] = useState(nullArray)

    // shopping items
    const itemsArray = [
        { id: 1, amount: 5, name: 'Ichi Ocha Greentea' },
        { id: 2, amount: 2, name: 'Beng Beng' },
        { id: 3, amount: 1, name: 'Minyak Goreng' },
        { id: 4, amount: 2, name: 'Boncabe level 15' }
    ]
    const [shoppingItems, setShoppingItems] = useState(itemsArray)
    const [shoppingItemCounter, setShoppingItemCounter] = useState(0)
    // limit shopping items length to only 8
    shoppingItems.length = Math.min(shoppingItems.length, 8)
    // get shopping item that sent by child component
    const getNewShoppingItem = (counter, item) => {
        setShoppingItems(oldArray => [...oldArray, item])
        setShoppingItemCounter(counter)
    }
    const shoppingItemProps = {
        counter: shoppingItemCounter,
        length: shoppingItems.length,
        getNewShoppingItem: getNewShoppingItem
    }
    // detect change on shoppingItems 
    useEffect(() => {
        if(shoppingItemCounter > 0) {
            setShoppingNull(oldArray => oldArray.filter((item, i, arr) => { return item.id !== arr.length }))
        }
    }, [shoppingItems, shoppingItemCounter])

    return (
        <>
            {/* button to add new shopping item */}
            <AddShoppingItem shoppingItemProps={ shoppingItemProps } />
            {
                // display shopping items, when new item added, 1 row will be inserted 
                shoppingItems.map((list, i) => {
                    const itemText = `${list.amount}x ${list.name}`
                    return (
                        // paper (row)
                        <div className="grid grid-cols-6 pl-2 py-2 bg-orange-300 border-b-2 border-gray-800" 
                            key={list.id} data-item={itemText}
                        >
                            {/* paper hole */}
                            <div className="text-left">
                                <div className="rounded-full bg-white w-8 h-8"></div>
                            </div>
                            { /* shopping items */ }
                            <ShoppingItemList itemText={ itemText } />
                        </div>
                    )
                })
            }
            
            {
                // display empty row, when new item added, 1 row will be deleted 
                shoppingNull.map((list, i) => {
                    return (
                        // paper (row)
                        <div className="grid grid-cols-6 pl-2 py-2 bg-orange-300 border-b-2 border-gray-800" 
                            key={list.id} 
                        >
                            {/* paper hole */}
                            <div className="text-left">
                                <div className="rounded-full bg-white w-8 h-8"></div>
                            </div>
                            { /* shopping items */ }
                            <ShoppingNullList />
                        </div>
                    )
                })
            }
            {/* button to generate random list / save list to database */}
            <SaveShoppingList />
        </>
    )
}

function ShoppingItemList({ itemText }) {
    return (
        <>
            {/* item */}
            <div className="handWritingFont col-span-4 text-3xl"> {itemText} </div>
            {/* options */}
            <div className="grid grid-cols-2">
                <div className=""> ✅ ❔ </div>
                <button id="removeItemButton" className="w-fit mx-auto"> 🚮 </button>
            </div>
        </>
    )
}

function ShoppingNullList() {
    return (
        <>
            <div className="col-span-4"></div>
            <div></div>
        </>
    )
}