import Navbar from '../components/Navbar'

export default function RoomLayout({ children }) {
    return (
        <div className='relative flex w-full h-full select-none bgroom'>
            {children}
        </div>
    )
}