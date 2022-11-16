import Link from "next/link";

export default function Home() {
    return (
        <div className='flex flex-1 flex-col items-center justify-start h-full'>
            <div className='flex flex-col flex-1 py-40'>
                <div className='flex flex-col flex-1 w-full justify-between items-center'>
                    <img src="/ui/logo.svg" alt="" className='w-2/3' />
                    <Link href="/menus/Home">
                        <a  className="transform hover:scale-110 ease-in-out hover:text-orange-700 flex rounded-lg bg-gradient-to-r hover:from-orange-400 from-orange-500 hover:to-red-400 to-red-500 p-4 text-2xl text-orange-300 font-bold">Play</a>
                    </Link>
                </div>
            </div>
        </div>
    )
}
