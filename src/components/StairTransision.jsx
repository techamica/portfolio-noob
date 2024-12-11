"use client"

import { AnimatePresence, motion } from "framer-motion"
import { usePathname } from "next/navigation"
import Stairs from "./Stairs"

export default function StairTransision() {
    const pathname = usePathname()

    return <AnimatePresence mode="wait">
        <div key={pathname}>
            <div className="h-screen w-screen fixed top-0 left-0 pointer-events-none z-40 flex">
                <Stairs />
            </div>
        </div>
    </AnimatePresence>
}