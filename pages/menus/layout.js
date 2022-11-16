import Navbar from './../components/Navbar'

export default function MenusLayout({ children }) {
    return (
        <div className='relative flex flex-col w-full h-full select-none bg-hero-patterns'>
            <div id='mainlayout' className='relative overflow-hidden flex flex-col h-full w-full flex-none text-white p-4 xl:py-10'>
                <div className='flex-1'>
                    {children}
                </div>  
                <div className='flex-none h-[13%]'></div>
            </div>
            <div className='h-[13%] absolute bottom-0 z-[999] w-full felx-none items-end bg-white rounded-t-lg'><Navbar /></div>
        </div>
    )
}