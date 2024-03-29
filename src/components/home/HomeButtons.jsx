// COMPONENTS
const AddShoppingItem = ({ addShoppingItemProps }) => {
    const optionAmount = [1,2,3,4,5]
    return (
        // paper (row)
        <div className="grid grid-cols-6 pl-2 py-2 bg-orange-300 border-b-2 border-gray-800">
            {/* paper hole */}
            <div className="text-left">
                <div className="rounded-full bg-white w-8 h-8"></div>
            </div>
            {/* add item form */}
            <form className="col-span-4 text-center" onSubmit={(ev) => addShoppingItem(ev, addShoppingItemProps)}>
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

const SaveShoppingList = ({ generateShoppingItemsProps, saveShoppingItemsProps }) => {
    // button handler
    // generate button and props
    const handleGenerateRandom = () => {
        const { array, generateRandomFunc } = generateShoppingItemsProps
        const shuffledArray = shuffle(array).slice(0, 8)
        return generateRandomFunc(shuffledArray)
    }
    // save list button and props
    const handleSaveList = () => {
        const { array, saveListFunc } = saveShoppingItemsProps
        return saveListFunc(array)
    }

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
                    onClick={() => { handleGenerateRandom() }}
                > Generate List </button>
                
                <span className="mx-2"> {/* separator */} </span>

                <button className="
                    bg-gradient-to-b from-slate-300 to-slate-400
                    border-2 border-slate-500 rounded-md p-1 
                    active:from-slate-200 active:to-slate-200" 
                    onClick={() => { handleSaveList() }}
                > Save List </button>
            </div>
        </div>
    )
}

// FUNCTIONS
function addShoppingItem(ev, addShoppingItemProps) {
    // prevent form to submit
    ev.preventDefault()
    const { counter, newItemFunc } = addShoppingItemProps
    const { addItemAmount, addItemName } = ev.target.elements 
    const newItem = { id: (counter + 1), amount: +addItemAmount.value, name: addItemName.value }
    return newItemFunc(newItem)
}

function shuffle(customArray) {
    let currentIndex = customArray.length, randomIndex;
    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [customArray[currentIndex], customArray[randomIndex]] = [customArray[randomIndex], customArray[currentIndex]];
    }
    return customArray;
}

export { AddShoppingItem, RemoveShoppingItem, SaveShoppingList }