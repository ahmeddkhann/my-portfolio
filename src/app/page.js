"use client";

import Hero from "./hero/page";
import Contact from "./contact/page";
import Project from "./projects/page";
import Technologies from "./technology/page";

export default function Home() {

  return (
    <div className="bg-slate-950 min-h-screen pb-8 overflow-x-hidden">

      <Hero/>
      <Technologies/>
      <Project/>
      <Contact/>

    </div>
 
  );
}