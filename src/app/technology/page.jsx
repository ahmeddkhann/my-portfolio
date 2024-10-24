"use client"

import { technologies } from '@/data' 
import { LampContainer } from '@/components/ui/lamp'
import { motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'

const Technologies = () => {
  return (
    <div>
        <LampContainer>
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 pt--4 bg-clip-text text-center lg:text-5xl md:text-4xl sm:text-3xl font-medium tracking-tight text-transparent"
        >
          Here are the Technologies I work with
        </motion.h1>
      </LampContainer>

      {/* Technologies Section */}
      <div id="technologies" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 py-8">
        {technologies.map((tech, index) => (
          <div
            key={index}
            className="bg-slate-800 rounded-lg p-6 shadow-lg 
             hover:shadow-xl hover:shadow-gray-400 hover:-translate-y-2 hover:-translate-x-4
             border-2 border-transparent hover:border-white
             transition-all duration-300 transform"
          >
            <Image 
            src={tech.image}
            width={50}
            height={50}
            alt="technologies Image"
            className="mb-2 mx-auto"
            />
            <h2 className="text-lg font-semibold text-slate-200 mb-2 text-center">
              {tech.title}
            </h2>
            <p className="text-gray-400 text-center">{tech.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Technologies