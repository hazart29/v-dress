
export default function RootLayout({ children }) {
    return (
        <div className='flex h-screen w-screen select-none absolute'>
            <div className='flex-none w-1/3 hidden lg:flex'></div>
            <div className='flex-1 lg:flex bg-gradient-to-b from-cyan-500 via-blue-700 to-blue-900'>
                {children}
            </div>
            <div className='flex-none w-1/3 hidden lg:flex'></div>
        </div>
    )
}