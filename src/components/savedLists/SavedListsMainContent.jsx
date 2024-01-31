import { useState } from "react"

export default function SavedListMainContent({ savedShoppingItems }) {
    const [savedList, setSavedList] = useState(savedShoppingItems || [])
    return (
        // display saved shopping items
        <div className="grid grid-cols-4">
            {
                savedList.map((firstDimArray, i) => {
                    return (
                        <div className="border-2 py-2" key={i}>
                            {/* header */}
                            <span className="font-semibold underline"> Daftar {+i + 1} </span>
                            {
                                firstDimArray.map(secondDimArray => {
                                    return (
                                        /* content */
                                        <div className="" key={secondDimArray.id}>
                                            {secondDimArray.amount}x {secondDimArray.name}
                                        </div>
                                    )
                                })
                            }
                        </div>
                    )
                })
            }
        </div>
    )
}