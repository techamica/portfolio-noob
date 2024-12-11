"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

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

export default function Nav() {
    const pathname = usePathname()

    return <nav className="flex gap-2 sm:gap-4 md:gap-6 lg:gap-8">
        {links.map((link, index) => {
            return <Link
                key={`link_${index}`}
                className={`${link.path === pathname && "text-accent border-b-2 border-accent"} capitalize font-medium hover:text-accent transition-all duration-500`}
                href={link.path}>
                {link.name}
            </Link>
        })}
    </nav>
}