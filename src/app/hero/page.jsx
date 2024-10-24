"use client"

import React from 'react'
import { Spotlight } from '@/components/ui/spotlight'
import Image from 'next/image'
import { TextGenerateEffect } from '@/components/ui/text-generate-effect'
import myImg from "../../../public/myPfImg.png"
import { BackgroundBeams } from '@/components/ui/background-beams'

const Hero = () => {
  const text =
    "I'm a passionate developer with a strong focus on creating scalable, maintainable, and efficient web applications. I'm always looking for ways to improve my skills and stay up-to-date with the latest technologies.";
  return (
    <div>
         <Spotlight className="-top-40 left-0 md:left-20 md:-top-40" fill="white" />
      <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start md:items-center">
  {/* Left Image */}
  <div className="mt-16 lg:w-[750px] lg:h-[750px] lg:ml-[100px] md:w-[400px] md:h-[400px] sm:w-[300px] sm:h-[300px]">
    <Image src={myImg} alt="Profile Image" className="rounded-full mx-auto lg:mx-0" />
  </div>

  {/* Right Text Content */}
  <div className="md:mt-32 lg:mt-40 lg:w-[70%] lg:mr-36 text-center lg:text-left md:text-center sm:text-center">
    <h1 className="text-gray-400 mt-6 text-md">
      We help you achieve your goals faster
    </h1>

    {/* Text Generation Effect */}
    <TextGenerateEffect
      className={"text-gray-200 mt-4 text-4xl md:text-2xl sm:text-2xl"}
      words={`Hi, I'm Ahmed, a MERN Stack Developer based in Pakistan.`}
      duration={0}  
      filter={false}
      colors={["#00FFAB", "#FFC300"]}
    />

    <div>
      <TextGenerateEffect
        className={"text-gray-500 mt-4 text-xl md:text-md sm:text-md"}
        words={`${text}`}
        duration={0} 
        filter={false}
        colors={["#00FFAB", "#FFC300"]}
      />
    </div>
  </div>
</div>

<BackgroundBeams />
    </div>
  )
}

export default Hero