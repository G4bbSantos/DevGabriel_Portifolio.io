'use client';

import { AboutMe } from "@/components/AboutMe";
import { HeaderPage } from "@/components/HeaderPage";
import { Language } from "@/components/language";
import { Projects } from "@/components/projects";
import { Start } from "@/components/Start";

const page = () => {
  return(
    <div className="w-full min-h-screen bg-gradient-to-r from-slate-300 to-blue-500">
        <HeaderPage/>
        <Start/>
        <hr className="border-zinc-900 w-full"/>
        <AboutMe/>
        <hr className="border-zinc-900 w-full"/>
        <Language/>
        <hr className="border-zinc-900 w-full"/>
        <Projects/>
    </div>
  )
}

export default page