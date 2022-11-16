import MenusLayout from "./layout"
import Image from 'next/image';
import GachaTen from "../components/Modal10xGacha";

export default function Gacha() {
    const banner = '/banner/banner_seifuku.png'
    return (
        <MenusLayout>
            <div className='flex flex-col gap-2 w-full h-full px-4'>
                <div className="flex flex-col flex-1 bg-gradient-to-br from-white to-gray-300 rounded-lg p-4">
                    <div className="relative overflow-hidden flex-1 bg-red-400 rounded-lg">
                        <Image src={banner} layout='fill' objectFit="cover" objectPosition='center top'/>
                    </div>

                </div>
                <div className="flex flex-none gap-4 p-2 font-bold  h-[13%] justify-center items-center">
                    <GachaTen />
                </div>
            </div>
        </MenusLayout>
    )
}