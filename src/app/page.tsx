'use client';

import { AboutMe } from "@/components/AboutMe";
import { HeaderPage } from "@/components/HeaderPage";
import { Language } from "@/components/language";
import { Projects } from "@/components/projects";
import { Start } from "@/components/Start";

const page = () => {
  return(
    <div className="w-full min-h-screen">
        <HeaderPage/>
        <Start/>
        <hr className="border-zinc-900 dark:border-zinc-200 w-full"/>
        <AboutMe/>
        <hr className="border-zinc-900 dark:border-zinc-200 w-full"/>
        <Language/>
        <hr className="border-zinc-900 dark:border-zinc-200 w-full"/>
        <Projects/>
    </div>
  )
}

export default page