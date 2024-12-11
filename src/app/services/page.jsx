"use client"

import Link from "next/link"
import { BsArrowDownRight } from "react-icons/bs"
import { motion } from "framer-motion"

const services = [
    {
        num: "01",
        title: "Web Development",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        href: "https://example.com/"
    },
    {
        num: "02",
        title: "UI/UX Design",
        description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        href: "https://example.com/"
    },
    {
        num: "03",
        title: "Server Setup",
        description: "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        href: "https://example.com/"
    },
    {
        num: "04",
        title: "Hosting",
        description: "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        href: "https://example.com/"
    },
    {
        num: "05",
        title: "Logo Design",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        href: "https://example.com/"
    },
    {
        num: "06",
        title: "SEO",
        description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        href: "https://example.com/"
    },
]

export default function Services() {
    return <section>
        <div className="container mx-auto">
            <motion.div
                className="grid grid-cols-1 md:grid-cols-2 gap-16"
            >
                {
                    services.map((service, index) => {
                        return <motion.div
                            className="border-b border-white/20 w-full pb-4 group"
                            key={`service-${index}`}
                            initial={{ opacity: 0 }}
                            animate={{
                                opacity: 1,
                                transition: {
                                    delay: 0.5,
                                    duration: 0.5,
                                    ease: "easeIn"
                                }
                            }}
                        >
                            <div className="flex justify-between">
                                <h1 className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">{service.num}</h1>
                                <Link href={service.href} aria-label="Service details">
                                    <div className="p-2 bg-white rounded-full group-hover:-rotate-45 text-primary group-hover:bg-accent-hover group-hover:text-white group-hover:scale-150 transition-all duration-500">
                                        <BsArrowDownRight
                                        />
                                    </div>
                                </Link>
                            </div>
                            <h2 className="text-3xl font-extrabold mt-6 group-hover:text-accent transition-all duration-500">{service.title}</h2>
                            <p className="text-md mt-6 text-white/70 leading-6">{service.description}</p>
                        </motion.div>
                    })
                }
            </motion.div>
        </div>
    </section>
}