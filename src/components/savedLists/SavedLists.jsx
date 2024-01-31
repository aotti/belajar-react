import { useLocation } from 'react-router-dom'
import SavedListNavigation from './SavedListsNavigation';
import SavedListMainContent from './SavedListsMainContent';

export default function SavedLists() {
    const location = useLocation()
    const savedShoppingItems = location.state
    return (
        <div className="text-center text-xl w-full">
            {/* Navbar */}
            <header className=" bg-emerald-600 pb-5">
                <h1 className="text-red-200 text-2xl font-semibold pt-2"> Daftar Catatan Belanja </h1>
                <SavedListNavigation />
            </header>
            {/* Main */}
            <main className="border-t-2 border-gray-800">
                <div className="bg-blue-300">
                    <SavedListMainContent savedShoppingItems={ savedShoppingItems } />
                </div>
            </main>
            {/* Footer */}
            <footer className="bg-emerald-600 pt-4 pb-2">
                <p> ini adalah footer </p>
            </footer>
        </div>
    )
}