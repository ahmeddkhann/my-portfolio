"use client"
import { cn } from '@/lib/utils'
import Image from 'next/image'
import { Boxes } from 'lucide-react'
import { contacts } from '@/data'
import Link from 'next/link'

import React from 'react'

const Contact = () => {
  return (
    <div>
       <div className="h-96 relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg">
        <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

        <Boxes />
        <h1 className={cn("md:text-4xl text-xl text-white relative z-20 mb-4")}>
          Reach me out through
        </h1>
        <div className="flex flex-wrap gap-x-20 mt-5 ">
          {contacts.map((contact) => (
            <Link href={contact.link} key={contact.id}>
              <span id={contact.id} className="text-center mt-2 sm:ml-4 text-neutral-300 gap-y-4 flex flex-col relative z-20">
                <span>
                  <Image src={contact.image} width={50} height={50} alt="contact images" />
                  <h1 className="text-center mt-5"> {contact.text}</h1>
                </span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Contact
