"use client"
import Link from "next/link"
import { FaGithub, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa"

const icons = [
    { icon: <FaGithub />, link: "#", label: "Github" },
    { icon: <FaLinkedin />, link: "#", label: "LinkedIn" },
    { icon: <FaYoutube />, link: "#", label: "YouTube" },
    { icon: <FaTwitter />, link: "#", label: "Twitter" },
]

export default function Socials({ containerStyle, iconStyle }) {
    return <div className={containerStyle}>
        {icons.map((item, index) => {
            return <Link href={item.link} key={`social-link-${index}`} className={iconStyle} aria-label={item.label}>
                {item.icon}
            </Link>
        })}
    </div>
}