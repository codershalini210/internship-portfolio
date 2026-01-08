import React from 'react'
import { skills } from './data'
export default function Skills() {
    let skillsUI = skills.map((skill)=>
    {
        return <div className='rounded-2xl h-15 w-max p-3 bg-black text-white flex justify-center items-center'>
            <img src={skill.logo} className='h-12' alt="" />
            {skill.name}

        </div>
    })
  return (
    <>
    <h1 className='text-center text-4xl font-bold'>Skills</h1>
    <div className='flex flex-wrap w-3/5 mx-auto gap-x-10 gap-y-10 py-15 items-center'>
        {skillsUI}
    </div>
    </>
  )
}
