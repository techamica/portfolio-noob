"use client"

import Image from "next/image"
import { motion } from "framer-motion"

import nextConfig from "../../next.config.mjs";

export default function Photo({ imgStyle }) {
    const basePath = nextConfig.basePath || '';

    return <div className="w-full h-full relative flex justify-center items-center">
        <motion.div
            className="mix-blend-difference"
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: {
                    delay: 1.7,
                    duration: 0.5,
                    ease: "easeInOut"
                }
            }}>
            <div className="w-[250px] h-[250px] lg:w-[398px] lg:h-[398px]">
                <Image
                    priority
                    fill
                    quality={100}
                    className="object-contain"
                    alt="Noob Dev"
                    src={`${basePath}/img/ronaldo.webp`}
                />
            </div>
        </motion.div>

        <motion.div className="mix-blend-difference absolute" initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 2, duration: 1, ease: "easeInOut" } }}>
            <motion.svg
                className="w-[300px] h-[300px] lg:w-[470px] lg:h-[470px]"
                fill="transparent"
                viewBox="0 0 506 506"
                xmlns="http://www.w3.org/2000/svg"
            >
                <motion.circle
                    cx="253"
                    cy="253"
                    r={250}
                    stroke={"#00ff99"}
                    strokeWidth={4}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{ strokeDasharray: "24 20 0 0" }}
                    animate={{
                        strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 240 22 22"],
                        rotate: [120, 360]
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        repeatType: "reverse"
                    }}
                />
            </motion.svg>
        </motion.div>
    </div>
}