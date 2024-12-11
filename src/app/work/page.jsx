"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import Link from "next/link"
import Image from "next/image"

import { Swiper, SwiperSlide, useSwiper } from "swiper/react"
import "swiper/css"

import { BsArrowUpRight } from "react-icons/bs"
import { HiOutlineCog } from "react-icons/hi"
import { FaHtml5, FaCss3, FaJs, FaLaravel, FaGit } from "react-icons/fa"
import { SiTailwindcss, SiNextdotjs, SiExpress, SiMysql, SiMongodb, SiMariadb, } from "react-icons/si"
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi"

import { Tooltip, TooltipProvider, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip"

import nextConfig from "../../../next.config.mjs";
const basePath = nextConfig.basePath || '';

const projects = [
    {
        num: "01",
        category: "Frontend",
        title: "Project - 1",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        stack: [
            { name: "HTML 5", icon: <FaHtml5 /> },
            { name: "CSS 3", icon: <FaCss3 /> },
            { name: "JavaScript", icon: <FaJs /> },
            { name: "Laravel", icon: <FaLaravel /> },
            { name: "MariaDB", icon: <SiMariadb /> },
        ],
        image: `${basePath}/img/slider/slide-1.jpg`,
        live: "https://example.com/",
        github: "https://github.com/"
    },
    {
        num: "02",
        category: "Fullstack",
        title: "Project - 2",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        stack: [
            { name: "HTML 5", icon: <FaHtml5 /> },
            { name: "Tailwind CSS", icon: <SiTailwindcss /> },
            { name: "JavaScript", icon: <FaJs /> },
            { name: "Express.JS", icon: <SiExpress /> },
            { name: "MySQL", icon: <SiMysql /> },
        ],
        image: `${basePath}/img/slider/slide-2.png`,
        live: "https://example.com/",
        github: "https://github.com/"
    },
    {
        num: "03",
        category: "Fullstack",
        title: "Project - 3",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        stack: [
            { name: "HTML 5", icon: <FaHtml5 /> },
            { name: "CSS 3", icon: <FaCss3 /> },
            { name: "JavaScript", icon: <FaJs /> },
            { name: "Express.JS", icon: <FaLaravel /> },
            { name: "MySQL", icon: <SiMariadb /> },
        ],
        image: `${basePath}/img/slider/slide-3.jpg`,
        live: "https://example.com/",
        github: "https://github.com/"
    },
    {
        num: "04",
        category: "Fullstack",
        title: "Project - 4",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        stack: [
            { name: "Tailwind CSS", icon: <SiTailwindcss /> },
            { name: "Shadcn", icon: <HiOutlineCog /> },
            { name: "Next.JS", icon: <SiNextdotjs /> },
            { name: "MongoDB", icon: <SiMongodb /> },
        ],
        image: `${basePath}/img/slider/slide-4.png`,
        live: "https://example.com/",
        github: "https://github.com/"
    },
]

function SwiperControls() {
    const swiper = useSwiper();

    return (
        <div className="flex w-full justify-between gap-2">
            <PiCaretLeftBold
                className="bg-accent w-10 h-10 p-2 md:h-20 md:p-0 text-4xl text-primary cursor-pointer"
                onClick={() => swiper.slidePrev()}
            />
            <PiCaretRightBold
                className="bg-accent w-10 h-10 p-2 md:h-20 md:p-0 text-4xl text-primary cursor-pointer"
                onClick={() => swiper.slideNext()}
            />
        </div>
    );
}

export default function Work() {
    const [project, setProject] = useState(projects[0])

    function handleSlideChange(swipe) {
        setProject(projects[swipe.activeIndex])
    }

    return <motion.div
        initial={{ opacity: 0 }}
        animate={{
            opacity: 1,
            transition: {
                delay: 0.5,
                duration: 0.5,
                ease: "easeInOut"
            }
        }}
    >
        <div className="container mx-auto">
            <div className="flex flex-col gap-4 xl:flex-row xl:gap-8">
                <div className="w-full xl:w-[50%] flex flex-col order-2 xl:order-none">
                    <div className="flex flex-col gap-2">
                        {/* PROJECT NUMBER */}
                        <div className="text-8xl font-extrabold text-outline text-transparent leading-none">{project.num}</div>

                        {/* PROJECT CATEGORY */}
                        <div className="text-4xl font-bold leading-none text-accent transition-all duration-500 capitalize">{project.category} Project</div>

                        {/* PROJECT DESCRIPTION */}
                        <p className="text-white/60 leading-6 text-sm mt-2">{project.description}</p>

                        {/* STACK */}
                        <div className="mt-2 pb-4 border-b border-white/20">
                            <ul className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4">
                                {project.stack.map((item, index) => {
                                    return <li key={`stack-${index}`} className="group">
                                        <TooltipProvider delayDuration={200}>
                                            <Tooltip>
                                                <TooltipTrigger
                                                    className="w-full h-full p-4 rounded-lg flex gap-3 bg-[#2a2a31] justify-center items-center hover:bg-transparent hover:shadow-md hover:shadow-[#00ff9952] transition-all duration-300"
                                                    aria-label={item.name}
                                                >
                                                    <div className="text-4xl group-hover:text-accent transition-all duration-500">
                                                        {item.icon}
                                                    </div>
                                                </TooltipTrigger>
                                                <TooltipContent>
                                                    <span className="capitalize">{item.name}</span>
                                                </TooltipContent>
                                            </Tooltip>
                                        </TooltipProvider>
                                    </li>
                                })}
                            </ul>
                        </div>

                        {/* BUTTONS */}
                        <div className="flex gap-4 mt-2">
                            <div>
                                <Link href={project.live} aria-label="Visit live project" target="_blank">
                                    <TooltipProvider delayDuration={200}>
                                        <Tooltip>
                                            <TooltipTrigger
                                                className="bg-zinc-700 p-3 rounded-full text-2xl hover:rotate-45 hover:text-primary hover:bg-accent hover:shadow-md hover:shadow-[#00ff9952] transition-all duration-300"
                                                aria-label="Live project"
                                            >
                                                <BsArrowUpRight />
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                Live project
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </Link>
                            </div>
                            <div>
                                <Link href={project.github} aria-label="Visit git repo" target="_blank">
                                    <TooltipProvider delayDuration={200}>
                                        <Tooltip>
                                            <TooltipTrigger
                                                className="bg-zinc-700 p-3 rounded-full text-2xl hover:text-primary hover:bg-accent hover:shadow-md hover:shadow-[#00ff9952] transition-all duration-300"
                                                aria-label="Github link"
                                            >
                                                <FaGit />
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                Github link
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* SLIDER */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: 1,
                        transition: {
                            delay: 1,
                            duration: 0.5,
                            ease: "easeInOut"
                        }
                    }}
                    className="w-full order-none xl:order-1 xl:w-[50%] mb-4 xl:mb-0"
                >
                    <Swiper
                        // loop={true}
                        spaceBetween={30}
                        slidesPerView={1}
                        className="h-64 sm:h-80 md:h-96 lg:h-[420] xl:h-[450]"
                        onSlideChange={handleSlideChange}
                    >
                        {projects.map((project, index) => {
                            return <SwiperSlide
                                key={`slide-${index}`}
                                className="h-full flex justify-center items-center bg-pink-50/20"
                            >
                                {/* IMAGE */}
                                <div className="w-full h-full">
                                    <Image
                                        src={project.image}
                                        fill
                                        className="object-cover"
                                        alt={project.title}
                                    />
                                </div>
                            </SwiperSlide>
                        })}

                        {/* OVERLAY */}
                        <div className="absolute z-10 w-full bottom-[calc(50%_-_20px)] md:bottom-[calc(50%_-_40px)] right-0">
                            <SwiperControls />
                        </div>
                    </Swiper>
                </motion.div>
            </div>
        </div>
    </motion.div>
}