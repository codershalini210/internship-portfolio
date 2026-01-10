import React from 'react'
import cv from "../assets/cv.pdf"
export default function Resume() {
  return (
    <div>
      {/* <a href={cv} target="_blank">Download CV</a> */}
      <iframe src={cv} width="100%"  className='w-4/5 mx-auto h-[100dvh]'></iframe>
      
    </div>
  )
}
