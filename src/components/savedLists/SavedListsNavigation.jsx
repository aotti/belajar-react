import { useNavigate } from 'react-router-dom'

export default function SavedListNavigation() {
    const navigate = useNavigate()
    return (
        <nav className="flex gap-4 justify-center p-2">
            <button className="text-blue-200 hover:text-blue-900 active:text-blue-900"
                onClick={() => { navigate('/') }}
            > Home </button>
            <button className="text-blue-200 hover:text-blue-900 active:text-blue-900"
                onClick={() => { navigate('/lele') }}
            > Unknown Page </button>
        </nav>
    )
}