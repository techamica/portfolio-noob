"use client"

import CountUp from "react-countup"
import { motion } from "framer-motion"

const stats = [
    {
        num: 9,
        text: "Years of experience"
    },
    {
        num: 25,
        text: "Projects completed"
    },
    {
        num: 8,
        text: "Technologies mastered"
    },
    {
        num: 434,
        text: "Code commits"
    },
]

export default function Stats() {
    return <motion.div
        className="container mx-auto mt-4 mb-10 flex justify-evenly gap-8 flex-wrap lg:justify-between"
        initial={{ opacity: 0 }}
        animate={{
            opacity: 1,
            transition: {
                delay: 2.5,
                duration: 1,
                ease: "easeIn"
            }
        }}
    >
        {
            stats.map((stat, index) => {
                return <div key={`stat-${index}`} className="flex items-center gap-2 justify-center flex-1">
                    <CountUp
                        end={stat.num}
                        duration={5}
                        delay={3}
                        className="text-4xl xl:text-6xl font-extrabold"
                    />

                    <p className="text-sm max-w-20 text-start text-white/80">{stat.text}</p>
                </div>
            })
        }
    </motion.div>
}