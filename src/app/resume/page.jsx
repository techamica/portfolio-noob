"use client"

import { FaHtml5, FaCss3, FaJs, FaPhp, FaNodeJs, FaLaravel, FaReact, FaGit } from "react-icons/fa"
import { SiTailwindcss, SiNextdotjs, SiExpress, SiMysql, SiMongodb, SiMariadb, SiCouchbase, SiScylladb, SiClickhouse, SiRedis, SiRabbitmq, SiFirebase } from "react-icons/si"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { ScrollArea } from "@/components/ui/scroll-area"
import { motion } from "framer-motion"

const about = {
    title: "About me",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tempus bibendum tortor quis iaculis. Fusce sem elit, sodales et fermentum in, interdum eu diam. Ut bibendum diam consectetur urna blandit rutrum. Nullam erat orci, venenatis eu bibendum eu, consequat non nisl. Nullam condimentum dictum massa, a vehicula felis hendrerit condimentum.",
    info: [
        {
            fieldName: "Name",
            fieldValue: "Noob Dev"
        },
        {
            fieldName: "Phone",
            fieldValue: "(+91) 1234 567 890"
        },
        {
            fieldName: "Experience",
            fieldValue: "7+ Years"
        },
        {
            fieldName: "Email",
            fieldValue: "noob@nowhere.com"
        },
        {
            fieldName: "Skype",
            fieldValue: "noob.dev"
        },
        {
            fieldName: "Nationality",
            fieldValue: "Indian"
        },
        {
            fieldName: "Freelance",
            fieldValue: "Available"
        },
        {
            fieldName: "Language",
            fieldValue: "English"
        },
    ]
}

const education = {
    title: "My education",
    description: "Ut bibendum diam consectetur urna blandit rutrum. Nullam erat orci, venenatis eu bibendum eu, consequat non nisl. Nullam condimentum dictum massa, a vehicula felis hendrerit condimentum.",
    items: [
        {
            institute: "Some Institure of Science & Tehnology",
            degree: "B.Tech in Computer Science & Engineering",
            duration: "2012 - 2016"
        },
        {
            institute: "Another Very Old High School",
            degree: "Higher Secondary",
            duration: "2010 - 2012"
        },
        {
            institute: "An Old High School (H.S)",
            degree: "Secondary Education",
            duration: "2004 - 2010"
        },
        {
            institute: "A Local Primary School",
            degree: "Primary Education",
            duration: "1999 - 2004"
        },
    ]
}

const experience = {
    title: "My experience",
    description: "Ut bibendum diam consectetur urna blandit rutrum. Nullam erat orci, venenatis eu bibendum eu, consequat non nisl. Nullam condimentum dictum massa, a vehicula felis hendrerit condimentum.",
    items: [
        {
            company: "Nowhere Specific Pvt. Ltd.",
            designation: "Node.JS Developer",
            duration: "Jan 2020 - Present"
        },
        {
            company: "Nowhere Specific Pvt. Ltd.",
            designation: "Junior Software Developer",
            duration: "Jun 2019 - Dec 2020"
        },
        {
            company: "Nowhere Specific Pvt. Ltd.",
            designation: "Junior PHP Developer",
            duration: "Feb 2018 - May 2019"
        },
        {
            company: "Somewhere Pvt. Ltd.",
            designation: "Junior PHP Developer",
            duration: "Mar 2017 - Jan 2018"
        },
    ]
}

const skills = {
    title: "My skills",
    description: "Ut bibendum diam consectetur urna blandit rutrum. Nullam erat orci, venenatis eu bibendum eu, consequat non nisl. Nullam condimentum dictum massa, a vehicula felis hendrerit condimentum.",
    skillList: [
        {
            icon: <FaHtml5 />,
            name: "HTML 5"
        },
        {
            icon: <FaCss3 />,
            name: "CSS 3"
        },
        {
            icon: <SiTailwindcss />,
            name: "Tailwind CSS"
        },
        {
            icon: <FaJs />,
            name: "JavaScript"
        },
        {
            icon: <FaPhp />,
            name: "PHP"
        },
        {
            icon: <FaLaravel />,
            name: "Laravel"
        },
        {
            icon: <FaNodeJs />,
            name: "Node.JS"
        },
        {
            icon: <FaReact />,
            name: "React"
        },
        {
            icon: <SiExpress />,
            name: "Express.JS"
        },
        {
            icon: <SiNextdotjs />,
            name: "Next.JS"
        },
        {
            icon: <FaGit />,
            name: "Git"
        },
        {
            icon: <SiMariadb />,
            name: "MariaDB"
        },
        {
            icon: <SiMysql />,
            name: "MySQL"
        },
        {
            icon: <SiMongodb />,
            name: "MongoDB"
        },
        {
            icon: <SiFirebase />,
            name: "Firebase"
        },
        {
            icon: <SiCouchbase />,
            name: "Couchbase"
        },
        {
            icon: <SiClickhouse />,
            name: "Clickhouse"
        },
        {
            icon: <SiScylladb />,
            name: "ScyllaDB"
        },
        {
            icon: <SiRedis />,
            name: "Redis"
        },
        {
            icon: <SiRabbitmq />,
            name: "RabbitMQ"
        },
    ]
}

export default function Resume() {
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
        className="min-h-[80vh] flex items-center justify-center py-12 lg:py-0"
    >
        <div className="container mx-auto">
            <Tabs defaultValue="experience" className="flex flex-col lg:flex-row gap-16">
                <TabsList className="flex flex-col w-full max-w-[380px] mx-auto lg:mx-0 gap-6">
                    <TabsTrigger value="experience">Experience</TabsTrigger>
                    <TabsTrigger value="education">Education</TabsTrigger>
                    <TabsTrigger value="skills">Skills</TabsTrigger>
                    <TabsTrigger value="about">About me</TabsTrigger>
                </TabsList>

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
                    className="w-full"
                >
                    {/* EXPERIENCE */}
                    <TabsContent value="experience" className="w-full">
                        <div className="flex flex-col gap-6">
                            <h1 className="h3">{experience.title}</h1>
                            <p className="text-sm leading-6 text-white/80">{experience.description}</p>
                            <div>
                                <ScrollArea className="h-96">
                                    <ul className="grid grid-cols-1 xl:grid-cols-2 gap-6">
                                        {
                                            experience.items.map((item, index) => {
                                                return <li
                                                    key={`experience-${index}`}
                                                    className="flex flex-col gap-3 bg-[#2a2a31] py-4 px-6 rounded-lg justify-center items-center xl:items-start"
                                                >
                                                    <span className="text-sm text-accent">
                                                        {item.duration}
                                                    </span>
                                                    <span className="font-semibold text-xl text-center lg:text-left">
                                                        {item.designation}
                                                    </span>
                                                    <div className="flex gap-2 items-center">
                                                        <span className="flex-none w-2 h-2 bg-accent rounded-full" />
                                                        <span className="text-sm text-white/60">
                                                            {item.company}
                                                        </span>
                                                    </div>
                                                </li>
                                            })
                                        }
                                    </ul>
                                </ScrollArea>
                            </div>
                        </div>
                    </TabsContent>

                    {/* EDUCATION */}
                    <TabsContent value="education" className="w-full">
                        <div className="flex flex-col gap-6">
                            <h3 className="h3">{education.title}</h3>
                            <p className="text-sm leading-6 text-white/80">{education.description}</p>
                            <div>
                                <ScrollArea className="h-96">
                                    <ul className="grid grid-cols-1 xl:grid-cols-2 gap-6">
                                        {
                                            education.items.map((item, index) => {
                                                return <li
                                                    key={`education-${index}`}
                                                    className="flex flex-col gap-3 bg-[#2a2a31] py-4 px-6 rounded-lg justify-center items-center xl:items-start"
                                                >
                                                    <span className="text-sm text-accent">
                                                        {item.duration}
                                                    </span>
                                                    <span className="font-semibold text-xl">
                                                        {item.degree}
                                                    </span>
                                                    <div className="flex gap-2 items-center">
                                                        <span className="flex-none w-2 h-2 bg-accent rounded-full" />
                                                        <span className="text-sm text-white/60">
                                                            {item.institute}
                                                        </span>
                                                    </div>
                                                </li>
                                            })
                                        }
                                    </ul>
                                </ScrollArea>
                            </div>
                        </div>
                    </TabsContent>

                    {/* SKILLS */}
                    <TabsContent value="skills" className="w-full">
                        <div className="flex flex-col gap-6">
                            <h3 className="h3">{skills.title}</h3>
                            <p className="text-sm leading-6 text-white/80">{skills.description}</p>
                            <div>
                                <div>
                                    <ul className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
                                        {
                                            skills.skillList.map((item, index) => {
                                                return <li
                                                    key={`skill-${index}`}
                                                    className="group"
                                                >
                                                    <TooltipProvider delayDuration={200}>
                                                        <Tooltip>
                                                            <TooltipTrigger className="w-full h-full p-6 rounded-lg flex gap-3 bg-[#2a2a31] justify-center items-center  hover:bg-transparent hover:shadow-md hover:shadow-[#00ff9952] transition-all duration-300">
                                                                <div className="text-6xl group-hover:text-accent transition-all duration-500">
                                                                    {item.icon}
                                                                </div>
                                                            </TooltipTrigger>
                                                            <TooltipContent>
                                                                <span className="capitalize">{item.name}</span>
                                                            </TooltipContent>
                                                        </Tooltip>
                                                    </TooltipProvider>
                                                </li>
                                            })
                                        }
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </TabsContent>

                    {/* ABOUT */}
                    <TabsContent value="about" className="w-full">
                        <div className="flex flex-col gap-6">
                            <h3 className="h3">{about.title}</h3>
                            <p className="text-sm leading-6 text-white/80">{about.description}</p>
                            <div>
                                <ScrollArea className="h-96">
                                    <ul className="grid grid-cols-1 xl:grid-cols-2 gap-6">
                                        {
                                            about.info.map((item, index) => {
                                                return <li
                                                    key={`about-${index}`}
                                                    className="flex flex-col gap-3 bg-[#2a2a31] py-4 px-6 rounded-lg justify-center items-center xl:items-start"
                                                >
                                                    <span className="flex gap-2 items-center text-sm text-white/60">
                                                        <span className="flex-none w-2 h-2 bg-accent rounded-full" />
                                                        <span>{item.fieldName}</span>
                                                    </span>
                                                    <span className="font-semibold text-xl">
                                                        {item.fieldValue}
                                                    </span>
                                                </li>
                                            })
                                        }
                                    </ul>
                                </ScrollArea>
                            </div>
                        </div>
                    </TabsContent>
                </motion.div>
            </Tabs>
        </div>
    </motion.div>
}