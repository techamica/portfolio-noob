"use client"

import Photo from "@/components/Photo";
import Socials from "@/components/Socials";
import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi"
import { motion } from "framer-motion";
import ParticleContainer from "@/components/ParticleContainer";

export default function Home() {
  return <motion.div
    initial={{ opacity: 0 }}
    animate={{
      opacity: 1,
      transition: {
        delay: 1.2,
        duration: 0.5,
        ease: "easeInOut"
      }
    }}
    className="h-full"
  >
    <div className="container mx-auto h-full">
      <div className="flex flex-col gap-12 lg:gap-8 lg:flex-row items-center justify-between lg:pt-8 lg:pb-24">
        <div className="text-center lg:text-left order-2 lg:order-none">
          {/* DESIGNATION */}
          <span className="text-xl">Software Developer</span>
          {/* SAY HI */}
          <h1 className="h1 mb-4 mt-2">
            Hello, It&apos;s
            <br />
            <span className="text-accent">
              Noob Dev
            </span>
          </h1>
          {/* SMALL DESCRIPTION */}
          <p className="max-w-[500] text-white/80">
            I excel at crafting amazing digital experience and I and proficient in many different programming languages.
          </p>
          {/* DOWNLOAD CV */}
          <div className="mt-6 flex flex-col gap-6 lg:flex-row lg:gap-8 items-center">
            <Button variant="outline" className="uppercase flex gap-2 items-center">
              <span>Download CV</span>
              <FiDownload className="text-xl" />
            </Button>

            <div>
              <Socials containerStyle="flex gap-4" iconStyle="text-accent w-8 h-8 flex justify-center items-center border border-accent p-2 rounded-full mb-6 lg:mb-0 hover:bg-accent hover:text-primary transition-all duration-300" />
            </div>
          </div>
        </div>

        <div className="flex-1 md:h-[390px] lg:h-[430px] p-4 justify-center items-center order-1 lg:order-none mt-6 lg:mt-0">
          <ParticleContainer />
          <Photo />
        </div>
      </div>
    </div>

    <Stats />
  </motion.div>;
}
