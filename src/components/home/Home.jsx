import HomeMainContent from "./HomeMainContent";
import HomeNavigation from "./HomeNavigation";

export default function Home() {
    return (
        <div className="text-center text-xl w-full">
            {/* Navbar */}
            <header className="wavyHeader pb-5">
                <h1 className="text-sky-200 text-2xl font-semibold pt-2"> Catatan Belanja </h1>
                <HomeNavigation />
            </header>
            {/* Main */}
            <main className="border-t-2 border-gray-800">
                <div id="paperContainer">
                    <HomeMainContent />
                </div>
            </main>
            {/* Footer */}
            <footer className="wavyFooter pt-4 pb-2">
                <p> ini adalah footer </p>
            </footer>
        </div>
    )
}