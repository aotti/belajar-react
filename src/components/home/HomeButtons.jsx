// COMPONENTS
const AddShoppingItem = ({ shoppingItemProps }) => {
    const optionAmount = [1,2,3,4,5]
    return (
        // paper (row)
        <div className="grid grid-cols-6 pl-2 py-2 bg-orange-300 border-b-2 border-gray-800">
            {/* paper hole */}
            <div className="text-left">
                <div className="rounded-full bg-white w-8 h-8"></div>
            </div>
            {/* add item form */}
            <form className="col-span-4 text-center" onSubmit={(ev) => addShoppingItem(ev, shoppingItemProps)}>
                {/* item amount */}
                <select className="p-1" name="addItemAmount" id="addItemAmount">
                    {optionAmount.map((v, i) => { 
                        return ( <option value={v} key={i}>{v}x</option> )
                    })}
                </select>
                {/* item name */}
                <input type="text" className="rounded-full w-1/2 px-2 py-1 mx-2" 
                    name="addItemName" id="addItemName" 
                    maxLength={30} required
                />
                {/* add item button */}
                <button type="submit" id="addItemButton" 
                    className="bg-gradient-to-b from-slate-300 to-slate-400
                    border-2 border-slate-500 rounded-md p-1 
                    active:from-slate-200 active:to-slate-200" 
                > Add Item </button>
            </form>
        </div>
    )
}

const RemoveShoppingItem = () => {

}

const SaveShoppingList = () => {
    return (
        <div className="grid grid-cols-6 pl-2 py-2 bg-orange-300 border-b-2 border-gray-800">
            {/* paper hole */}
            <div className="text-left">
                <div className="rounded-full bg-white w-8 h-8"></div>
            </div>
            {/* save button */}
            <div className="col-span-4 text-center">
                <button className="
                    bg-gradient-to-b from-slate-300 to-slate-400
                    border-2 border-slate-500 rounded-md p-1 
                    active:from-slate-200 active:to-slate-200" 
                > Generate List </button>
                <span className="mx-2"></span>
                <button className="
                    bg-gradient-to-b from-slate-300 to-slate-400
                    border-2 border-slate-500 rounded-md p-1 
                    active:from-slate-200 active:to-slate-200" 
                > Save List </button>
            </div>
        </div>
    )
}

// FUNCTIONS
function addShoppingItem(ev, shoppingItemProps) {
    // prevent form to submit
    ev.preventDefault()
    const { counter, length, getNewShoppingItem } = shoppingItemProps
    const { addItemAmount, addItemName } = ev.target.elements 
    const { newCounter, newItem } = {
        newCounter: counter + 1,
        newItem: { id: (length + 1), amount: +addItemAmount.value, name: addItemName.value }
    }
    return getNewShoppingItem(newCounter, newItem)
}

export { AddShoppingItem, RemoveShoppingItem, SaveShoppingList }