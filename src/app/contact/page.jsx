"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select"

import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa"

import { motion } from "framer-motion"

import Link from "next/link"
import { FaFacebook, FaLinkedin, FaTwitter, FaYoutube, FaGithub, FaReddit } from "react-icons/fa"
import { Tooltip, TooltipProvider, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip"

const info = [
    {
        icon: <FaPhoneAlt />,
        title: "Phone",
        description: "(+91) 1234 567 890"
    },
    {
        icon: <FaEnvelope />,
        title: "Email",
        description: "noob@nowhere.com"
    },
    {
        icon: <FaMapMarkedAlt />,
        title: "Address",
        description: "Victoria Memorial Hall, 1, Queens Way, Maidan, Kolkata, West Bengal 700071"
    },
]

const socials = [
    {
        name: "LinkedIn",
        icon: <FaLinkedin />,
        link: "#"
    },
    {
        name: "Github",
        icon: <FaGithub />,
        link: "#"
    },
    {
        name: "Youtube",
        icon: <FaYoutube />,
        link: "#"
    },
    {
        name: "Reddit",
        icon: <FaReddit />,
        link: "#"
    },
    {
        name: "Twitter",
        icon: <FaTwitter />,
        link: "#"
    },
    {
        name: "Facebook",
        icon: <FaFacebook />,
        link: "#"
    },
]

export default function Contact() {
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
            <div className="flex flex-col xl:flex-row gap-8">
                {/* FORM */}
                <div className="w-full xl:w-[50%] order-2 xl:order-none">
                    <form className=" flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
                        <h1 className="text-4xl text-accent">
                            Let&apos;s work together
                        </h1>
                        <p className="text-white/60 leading-7 text-sm">
                            Ut bibendum diam consectetur urna blandit rutrum. Nullam erat orci, venenatis eu bibendum eu, consequat non nisl. Nullam condimentum dictum massa, a vehicula felis hendrerit condimentum.
                        </p>

                        {/* INPUT */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <Input type="firstname" placeholder="First name" />
                            <Input type="lastname" placeholder="Last name" />
                            <Input type="email" placeholder="Email" />
                            <Input type="phone" placeholder="Phone number" />
                        </div>

                        {/* SELECT */}
                        <Select>
                            <SelectTrigger className="w-full" aria-label="Select a service">
                                <SelectValue placeholder="Select a service" />
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Select a service</SelectLabel>
                                        <SelectItem value="wdev">Web Development</SelectItem>
                                        <SelectItem value="uixd">UI/UX Design</SelectItem>
                                        <SelectItem value="ldes">Logo Design</SelectItem>
                                        <SelectItem value="sset">Server Setup</SelectItem>
                                        <SelectItem value="host">Hosting</SelectItem>
                                        <SelectItem value="seo">SEO</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </SelectTrigger>
                        </Select>

                        {/* TEXTAREA */}
                        <Textarea
                            className="h-52"
                            placeholder="Type your message here"
                        />

                        {/* BUTTON */}
                        <Button className="max-w-40">
                            Send message
                        </Button>
                    </form>
                </div>

                {/* INFO */}
                <div className="order-none xl:order-1 flex flex-col flex-1 items-start mb-8 xl:mb-0">
                    <div className="flex flex-col gap-6">
                        <div className="order-3 xl:order-none w-full rounded-xl">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14739.663169456908!2d88.3241037018403!3d22.54482696604579!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02771346ae015d%3A0xb540e4bce39763!2sVictoria%20Memorial!5e0!3m2!1sen!2sin!4v1733947578752!5m2!1sen!2sin" className="w-full h-[300px] border-0 rounded-lg mt-2 xl:mt-0" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </div>

                        <ul className="order-1 xl:order-none mt-0 xl:mt-4 flex flex-col gap-12 border-b-[2px] border-white/10 pb-6">
                            {
                                info.map((item, index) => {
                                    return <li
                                        key={`info-${index}`}
                                        className="flex items-start leading-7 gap-6"
                                    >
                                        <div className="w-12 h-12 bg-[#27272c] flex justify-center items-center rounded-lg text-accent flex-none">
                                            <div className="text-xl">{item.icon}</div>
                                        </div>
                                        <div>
                                            <p className="text-sm text-white/60">{item.title}</p>
                                            <h1 className="text-lg font-bold">{item.description}</h1>
                                        </div>
                                    </li>
                                })
                            }
                        </ul>

                        <div className="order-2 xl:order-none flex gap-4 flex-wrap">
                            {
                                socials.map((item, index) => {
                                    return <Link href={item.link} aria-label={item.name} target="_blank" key={`social-${index}`}>
                                        <TooltipProvider delayDuration={200}>
                                            <Tooltip>
                                                <TooltipTrigger
                                                    className="bg-[#27272c] p-3 rounded-full text-xl text-accent hover:text-primary hover:bg-accent hover:shadow-md hover:shadow-[#00ff9952] transition-all duration-300"
                                                    aria-label={item.name}
                                                >
                                                    {item.icon}
                                                </TooltipTrigger>
                                                <TooltipContent>
                                                    {item.name}
                                                </TooltipContent>
                                            </Tooltip>
                                        </TooltipProvider>
                                    </Link>
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </motion.div>
}