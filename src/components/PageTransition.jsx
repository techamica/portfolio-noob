"use client"

import { AnimatePresence, motion } from "framer-motion"
import { usePathname } from "next/navigation"

export default function PageTransition({ children }) {
    const pathname = usePathname()

    return <AnimatePresence>
        <div key={`container-${pathname}`}>
            <motion.div
                className="h-screen w-screen bg-primary pointer-events-none fixed top-0"
                initial={{ opacity: 1 }}
                animate={{
                    opacity: 0,
                    transition: { delay: 0, duration: 0.5, ease: "easeInOut" }
                }}
            />
            {children}
        </div>
    </AnimatePresence>
}