import Image from "next/image";
import MenusLayout from "./layout";

export default function Home() {
    return (
        <MenusLayout>
            <div className='flex flex-1 flex-col h-full'>
                <div className='relative flex-none h-[30%] w-full justify-center items-start'>
                    <Image src="/ui/logo.svg" layout="fill" alt="logo" />
                </div>
            </div>
        </MenusLayout>
    );
}