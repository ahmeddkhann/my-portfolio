"use client"

import React from 'react'
import { Projects } from '@/data'
import Image from 'next/image'
import { SparklesCore } from '@/components/ui/sparkles'
import Link from 'next/link'
import { Meteors } from '@/components/ui/meteors'
const Project = () => {
  return (
    <div>
         <div id="projects">
        <div className="h-[20rem] w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
          <h1 className="md:text-4xl text-3xl lg:text-6xl font-bold text-center text-white relative z-20">
            Projects
          </h1>
          <div className="w-[40rem] h-40 relative">
            {/* Gradients */}
            <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
            <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
            <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
            <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

            {/* Core component */}
            <SparklesCore
              background="transparent"
              minSize={0.4}
              maxSize={1}
              particleDensity={1200}
              className="w-full h-full"
              particleColor="#FFFFFF"
            />
          </div>
        </div>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 py-8">
          {Projects.map((project) => (
            <Link href={project.link} key={project.id}>
              <div
                className="relative transform transition-all duration-300 
                  hover:-translate-y-2 hover:-translate-x-4 hover:shadow-xl hover:shadow-gray-400
                  border-2 border-transparent hover:border-white
                  p-6 rounded-lg bg-slate-800 shadow-lg"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  height={400}
                  width={400}
                  className="object-contain w-full h-64 rounded-lg"
                />
                <p className="text-xl font-semibold text-slate-200 mt-4 mb-2 text-center md:text-left">
                  {project.title}
                </p>
                <p className="text-sm text-gray-400 text-center md:text-[17px] md:text-left">{project.description}</p>
                <p className="text-sm text-gray-400 mt-2 text-center md:text-left">
                  {project.technologies.join(", ")}
                </p>
                <Meteors number={40} />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Project