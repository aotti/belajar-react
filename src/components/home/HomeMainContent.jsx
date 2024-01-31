import { useState } from "react"
import { AddShoppingItem, SaveShoppingList } from "./HomeButtons"
import { shoppingItemsArray } from "./helper/HomeShoppingItems"

export default function HomeMainContent({ getShoppingSave }) {
    // get static data
    const [nullArray, itemsArray, randomArray] = shoppingItemsArray()

    // ~~~ useState var ~~~
    // shopping null AND shopping items used for div elements 
    const [shoppingNull, setShoppingNull] = useState(nullArray)
    const [shoppingItems, setShoppingItems] = useState(itemsArray)
    // counter used for item id
    const [shoppingItemCounter, setShoppingItemCounter] = useState(itemsArray.length)
    // limit shopping items length to only 8
    shoppingItems.length = Math.min(shoppingItems.length, 8)
    shoppingNull.length = Math.min(shoppingNull.length, 8)

    // ~~~ FUNCTIONS ~~~
    // get shopping item that sent by child component
    const getNewShoppingItem = (item) => {
        setShoppingItemCounter(oldCounter => oldCounter + 1)
        // push new item to current shopping items
        setShoppingItems(oldArray => [...oldArray, item])
        setShoppingNull(oldArray => oldArray.filter((item, i, arr) => { return item.id !== arr.length }))
    }
    // get item id to delete the row
    const getItemIdForRemove = (id, itemNull) => {
        setShoppingNull(oldArray => [...oldArray, itemNull])
        setShoppingItems(oldArray => oldArray.filter(item => { return item.id !== id }))
    }
    // generate random list
    const getRandomShoppingItems = (shuffledArray) => {
        // shuffled array = 8, shoppingItemCounter = 4  
        const newCounter = shoppingItemCounter + shuffledArray.length
        setShoppingItemCounter(newCounter)
        setShoppingItems(shuffledArray)
        setShoppingNull([])
    }
    // get shopping items to save
    const getShoppingItemsForSave = (itemList) => {
        return getShoppingSave(itemList)
    }

    // ~~~ PROPS ~~~
    // props for onClick event when adding new item
    const addShoppingItemProps = {
        counter: shoppingItemCounter,
        newItemFunc: getNewShoppingItem
    }
    // props for onClick event when remove item
    const removeShoppingItemProps = {
        length: shoppingNull.length,
        removeItemFunc: getItemIdForRemove
    }
    // props for onClick event when generate list
    const generateShoppingItemsProps = {
        array: randomArray,
        generateRandomFunc: getRandomShoppingItems
    }
    // props for onClick event when save list
    const saveShoppingItemsProps = {
        array: shoppingItems,
        saveListFunc: getShoppingItemsForSave
    }

    return (
        <>
            {/* button to add new shopping item */}
            <AddShoppingItem addShoppingItemProps={ addShoppingItemProps } />
            {
                // display shopping items, when new item added, 1 row will be inserted 
                shoppingItems.map((list) => {
                    const itemText = `${list.amount}x ${list.name}`
                    return (
                        // paper (row)
                        <div className="grid grid-cols-6 pl-2 py-2 bg-orange-300 border-b-2 border-gray-800" 
                            key={list.id} data-item-id={list.id}
                        >
                            {/* paper hole */}
                            <div className="text-left">
                                <div className="rounded-full bg-white w-8 h-8"></div>
                            </div>
                            { /* shopping items */ }
                            <ShoppingItemList itemId={ list.id } itemText={ itemText } removeShoppingItemProps={ removeShoppingItemProps } />
                        </div>
                    )
                })
            }
            {
                // display empty row, when new item added, 1 row will be deleted 
                shoppingNull.map((list) => {
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
            <SaveShoppingList generateShoppingItemsProps={ generateShoppingItemsProps } saveShoppingItemsProps={ saveShoppingItemsProps } />
        </>
    )
}

function ShoppingItemList({ itemId, itemText, removeShoppingItemProps }) {
    const { length, removeItemFunc } = removeShoppingItemProps
    // function to delete a row
    const handleDeleteRow = () => {
        const [idForRemove, itemNull] = [
            itemId,
            // length is shoppingNull array length
            { id: (length + 1), amount: null, item: null }
        ]
        return removeItemFunc(idForRemove, itemNull)
    }
    // function to change item status
    const handleItemStatus = (ev) => {
        let iconStatus = ev.target.innerText 
        switch(iconStatus) {
            case '✅': return ev.target.innerText = '❔' 
            case '❔': return ev.target.innerText = '✅' 
            default: return ev.target.innerText = 'null'
        }
    }

    return (
        <>
            {/* item */}
            <div className="handWritingFont col-span-4 text-3xl"> {itemText} </div>
            {/* options */}
            <div className="grid grid-cols-2">
                <button className="mx-auto px-4" onClick={(ev) => { handleItemStatus(ev) }}> ❔ </button>
                <button className="mx-auto px-4" onClick={() => { handleDeleteRow() }}> 🚮 </button>
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