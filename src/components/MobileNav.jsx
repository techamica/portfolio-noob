"use client"

import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { CiMenuFries } from "react-icons/ci"

const links = [
    {
        name: "home",
        path: "/"
    },
    {
        name: "services",
        path: "/services"
    },
    {
        name: "resume",
        path: "/resume"
    },
    {
        name: "work",
        path: "/work"
    },
    {
        name: "contact",
        path: "/contact"
    },
]

export default function MobileNav() {
    const pathname = usePathname()

    return <Sheet>
        <SheetTrigger className="flex items-center justify-center" aria-label="Menu">
            <CiMenuFries className="text-accent text-[28px]" />
        </SheetTrigger>
        <SheetContent className="text-gray-700 flex flex-col overflow-auto">
            <SheetHeader>
                <SheetTitle>

                </SheetTitle>
            </SheetHeader>
            <div>
                {/* LOGO */}
                <div className="flex mt-16 justify-center">
                    <Link href={"/"}>
                        <h1 className="text-white text-4xl font-semibold">
                            Noob<span className="text-accent">.</span>
                        </h1>
                    </Link>
                </div>

                {/* NAV MENU */}
                <nav className="flex flex-col justify-center items-center mt-14 gap-3 text-white">
                    {links.map((link, index) => {
                        return <Link
                            className={`${pathname === link.path && "text-accent border-b-2 border-accent"} capitalize font-medium hover:text-accent transition-all duration-500`}
                            key={`nav-${index}`}
                            href={link.path}
                        >
                            {link.name}
                        </Link>
                    })}
                </nav>
            </div>
        </SheetContent>
    </Sheet>
}