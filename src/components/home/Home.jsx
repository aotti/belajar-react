import HomeNavigation from "./HomeNavigation";

export default function Home() {
    const shoppingList = [
        '5x Ichi Ocha Greentea',
        '2x Beng Beng',
        '1x Minyak Goreng',
        '2x Boncabe level 15'
    ]
    return (
        <div className="text-center text-xl w-full">
            {/* Navbar */}
            <header className="wavyHeader pb-5">
                <h1 className="text-sky-200 text-2xl font-semibold p-2"> Homepage </h1>
                <HomeNavigation />
            </header>
            {/* Main */}
            <main className="border-t-2 border-gray-800">
                {shoppingList.map(list => {
                    return (
                        // paper
                        <div className="grid grid-cols-6 pl-2 py-2 bg-orange-300 border-b-2 border-gray-800" key={list}>
                            {/* paper hole */}
                            <div className="text-left">
                                <div className="rounded-full bg-white w-8 h-8"></div>
                            </div>
                            {/* shopping list item */}
                            <div className="col-span-4"> {list} </div>
                            {/* options */}
                            <div className="grid grid-cols-2">
                                <div className=""> ✅ ❔ </div>
                                <div className=""> 🚮 </div>
                            </div>
                        </div>
                    )
                })}
            </main>
            {/* Footer */}
            <footer className="wavyFooter pt-4 pb-2">
                <p> ini adalah footer </p>
            </footer>
        </div>
    )
}