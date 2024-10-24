"use client";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import Image from "next/image"; // Importing Image from next/image for optimized image loading
import myImg from "../../public/myPfImg.png";
import { SparklesCore } from "@/components/ui/sparkles";
import { motion } from "framer-motion";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { LampContainer } from "@/components/ui/lamp";
import { Spotlight } from "@/components/ui/spotlight";
import { technologies } from "@/data";
import { Projects } from "@/data";
import { Meteors } from "@/components/ui/meteors";
import Link from "next/link";
import { contacts } from "@/data";
import { cn } from "@/lib/utils";
import { Boxes } from "@/components/ui/background-boxes";

export default function Home() {
  const text =
    "I'm a passionate developer with a strong focus on creating scalable, maintainable, and efficient web applications. I'm always looking for ways to improve my skills and stay up-to-date with the latest technologies.";

  return (
    <div className="bg-slate-950 min-h-screen pb-8">
      {/* Top navigation section */}
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />

      {/* Main content section */}
      <div className="flex justify-center mb-[-120px]">
        {/* Left Image */}
        <div className="mt-16 lg:w-[750px] lg:h-[750px] lg:ml-[100px]">
          <Image src={myImg} alt="Profile Image" className="rounded-full" />
        </div>

        {/* Right Text Content */}
        <div>
          <div className="mt-20 lg:w-[70%] lg:mr-36">
            <h1 className="text-gray-400 text-center mt-10 text-md">
              We help you achieve your goals faster
            </h1>

            {/* Text Generation Effect */}
            <TextGenerateEffect
              className={"text-gray-200 ml-16 text-4xl"}
              words={`Hi, I'm Ahmed, a MERN Stack Developer based in Pakistan.  
             `}
              duration={1}
              filter={false}
              colors={["#00FFAB", "#FFC300"]}
            />

            <div>
              <TextGenerateEffect
                className={"text-gray-500 ml-16 text-xl"}
                words={`${text}`}
                duration={1}
                filter={false}
                colors={["#00FFAB", "#FFC300"]}
              />
            </div>
          </div>

        </div>
      </div>

      <BackgroundBeams />

      <LampContainer>
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 pt--4 bg-clip-text text-center lg:text-5xl font-medium tracking-tight text-transparent md:text-7xl"
        >
          Here are the Technologies I work with
        </motion.h1>
      </LampContainer>

      {/* Technologies Section */}
      <div id="technologies" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 min-h-screen gap-6 px-8 pb-8">
        {technologies.map((tech, index) => (
          <div
            key={index}
            className="bg-slate-800 rounded-lg p-6 shadow-lg 
           hover:shadow-xl hover:shadow-gray-400 hover:-translate-y-2 hover:-translate-x-4
           border-2 border-transparent hover:border-white
           transition-all duration-300 transform"
          >
            <Image 
            src={tech.image}cd 
            width={50}
             height={50}
             alt="technologies Image"
             className="mb-2"
             />
            <h2 className="text-lg font-semibold text-slate-200 mb-2">
              {tech.title}
            </h2>
            <p className="text-gray-400">{tech.description}</p>
          </div>
        ))}
      </div>

      {/* Projects Section */}
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
                <p className="text-xl font-semibold text-slate-200 mt-4 mb-2">
                  {project.title}
                </p>
                <p className="text-sm text-gray-400">{project.description}</p>
                <p className="text-sm text-gray-400 mt-2">
                  {project.technologies.join(", ")}
                </p>
                <Meteors number={40} />
              </div>
            </Link>
          ))}
        </div>
      </div>

            {/* Contact Section */}


        <div className="h-96 relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg">
      <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
 
      <Boxes />
      <h1 className={cn("md:text-4xl text-xl text-white relative z-20 mb-4")}>
        Reach me out through
      </h1>
    <div className="flex flex-wrap gap-x-20 mt-5">
    {contacts.map((contact) => (
       <Link href={contact.link} key={contact.id}>
       <span id={contact.id} className="text-center mt-2 text-neutral-300 gap-y-4 flex flex-col relative z-20">
         <span>
         <Image src={contact.image}
         width={50}
         height={50}
         alt="contact images"/>
         <h1 className="text-center mt-5"> {contact.text}</h1>
         </span>
       </span>
       </Link>
     ))}
    </div>
    </div>
        
      </div>
  
  );
}