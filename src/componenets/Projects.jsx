import React from 'react'
import { WebProjects } from './data'
import myprojectimg from "../assets/Projects.png"
import bgproject from "../assets/bgprojects.png"
export default function Projects() {
  //  id: 1,
  //   title: "Task Management System",
  //   tecogies: ["MongoDB", "Express.js", "React.js", "Node.js", "JWT", "REST API"],
  //   img: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800",
  //   github: "https://github.com/",
  //   descriphnoltion:
  //     "A full-stack task management application that allows users to create, update, delete, and track daily tasks with secure authentication.",
  //   live: "#"
  
  let projectsUI = WebProjects.map((p)=>
  {
    return <div className='w-80 bg-gray-300 flex flex-col gap-2 justify-center 
    items-center p-5'>
     
      <img src={p.img} className='w-full aspect-video' alt="Image not Loaded" />
      <div className='font-bold text-lg'>{p.title}</div>
      <div className='flex flex-wrap gap-2 text-sm '>
        {p.technologies.map((t)=><div className=' bg-blue-900 text-sm rounded-3xl text-white px-2'>{t}</div>)}
      </div>
      <div className='text-sm'>{p.description}</div>
      <div className='flex justify-evenly w-full'>
        <a href={p.github} target='_blank' className='bg-blue-950 w-20 text-center text-white p-2 rounded-lg'>Github</a>
        <a href={p.live} target='_blank' className='bg-blue-950 text-white p-2  w-20 text-center rounded-lg'>Live</a>
      </div>
      
    </div>
  })
  return (
    <>
    <div className='bg-center bg-fixed bg-cover 'style={{backgroundImage:`url(${bgproject})`}}>
    <div className='bg-[#3f226d73] flex flex-wrap gap-10 justify-center py-10'
    // <img src={myprojectimg} ></img>
    >
      {projectsUI}
    </div>
    </div>
    </>
  )
}
