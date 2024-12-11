"use client"

import { motion } from "framer-motion"

const stairsNumber = 4,
    stairAnimation = {
        initial: {
            top: "0%",
            opacity: 1
        },
        animate: {
            top: "100%",
            opacity: 1,
        },
        exit: {
            top: ["100%", "0%"],
            opacity: [1, 1]
        }
    }

function reverseIndex(index) {
    return stairsNumber - index - 1
}

export default function Stairs() {
    return <>
        {[...Array(stairsNumber)].map((_, index) => {
            return <motion.div
                key={index}
                variants={stairAnimation}
                initial="initial"
                animate="animate"
                exit={"exit"}
                transition={{
                    duration: 0.5,
                    ease: "easeInOut",
                    delay: reverseIndex(index) * 0.1
                }}
                className={`h-full w-full relative bg-white`}
            />
        })}
    </>
}