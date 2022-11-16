import { useRouter } from "next/router";
import Link from "next/link";

export default function Navbar() {
    const router = useRouter()
    return (
        <nav className="h-full w-full flex select-none gap-4 items-center px-4">
            {navigatiunRoute.map((singleRoute) => {
                return (
                    <NavigationLink
                        href={`/${singleRoute.href}`}
                        btn={singleRoute.btn}
                        router={router}
                        key={singleRoute.href}
                    />
                )
            })}
        </nav>
    )
}

function NavigationLink({ href, btn, router }) {
    const isActive = router.asPath === (href === "/home" ? "/" : href)
    return (
        <Link href={href === "/home" ? "/" : href} passHref>
            <a
                href={href === "/home" ? "/" : href}
                className={`p-2 rounded-lg ${isActive && "hover:bg-blue-300 bg-blue-400 focus:bg-blue-400"} hover:bg-blue-300 focus:bg-blue-400`}
            >
                <img src={btn} alt='' className='h-12' />
            </a>
        </Link>
    )
}

const navigatiunRoute = [
    {
        href: "menus/Home",
        asPath: "menus/Home",
        btn: "/ui/btn_home.svg"
    },
    {
        href: "menus/Outfit",
        asPath: "menus/Outfit",
        btn: "/ui/btn_outfit.svg"
    },
    {
        href: "menus/Gacha",
        asPath: "menus/Gacha",
        btn: "/ui/btn_gacha.svg"
    },
    {
        href: "menus/Room",
        asPath: "menus/Room",
        btn: "/ui/btn_room.svg"
    },
]
