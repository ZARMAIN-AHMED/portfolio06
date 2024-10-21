import React from 'react'
import {  AiOutlineCheckCircle } from "react-icons/ai";

import { AiFillHtml5 } from "react-icons/ai";
import { FaCss3Alt } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript } from 'react-icons/io5';

function Skills() {
  return (
    <div>
<section className="text-white bg-black body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h2 className="text-xs text-orange-500 tracking-widest font-medium title-font mb-1">
        SKILLS
      </h2>
      <h1 className="sm:text-4xl text-4xl font-medium  text-white">
        My Skills
      </h1>
    </div>
    <div className="flex flex-wrap -m-4">
      <div className="p-4  w-[100%] md:w-1/3">
        <div className="flex rounded-lg h-full bg-gray-900 p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-orange-500 text-white flex-shrink-0">
            < AiOutlineCheckCircle  className='text-2xl font-bold'/>
            </div>
            <h2 className="text-white text-lg title-font font-medium">
            HTML
            </h2>
            <div className='text-5xl pl-72'><AiFillHtml5 /> </div>
          </div>
          <div className="flex-grow">
            
            <div className='relative h-1 w-full bg-white rounded-xl'>
                <div className='absolute bg-orange-500 h-1 rounded-xl w-[100%]'></div>
            </div>
            <p className='font-bold text-orange-500 text-right'>100%</p>
          </div>
        </div>
      </div>
      <div className="p-4 w-[100%]  md:w-1/3">
        <div className="flex rounded-lg h-full bg-gray-900 p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-orange-500 text-white flex-shrink-0">
            < AiOutlineCheckCircle  className='text-2xl font-bold'/>
            </div>
            <h2 className="text-white text-lg title-font font-medium">
            CSS
            </h2>
            <div className='text-5xl pl-72'><FaCss3Alt /> </div>

          </div>
          <div className="flex-grow">
            <div className='relative h-1 w-full bg-white rounded-xl'>
                <div className='absolute bg-orange-500 h-1 rounded-xl w-[90%]'></div>
            </div>
            <p className='font-bold text-orange-500 text-right'>90%</p>
          </div>
        </div>
      </div>

      <div className="p-4 w-[100%]  md:w-1/3">
        <div className="flex rounded-lg h-full bg-gray-900 p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-orange-500 text-white flex-shrink-0">
            < AiOutlineCheckCircle  className='text-2xl font-bold'/>
            </div>
            <h2 className="text-white text-lg title-font font-medium">
            JAVASCRIPT
            </h2>
            <div className='text-5xl pl-60'><IoLogoJavascript  /> </div>

          </div>
          <div className="flex-grow">
            <div className='relative h-1 w-full bg-white rounded-xl'>
                <div className='absolute bg-orange-500 h-1 rounded-xl w-[80%]'></div>
            </div>
            <p className='font-bold text-orange-500 text-right'>80%</p>
          </div>
        </div>
      </div>


      <div className="p-4 w-[100%]  md:w-1/3">
        <div className="flex rounded-lg h-full bg-gray-900 p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-orange-500 text-white flex-shrink-0">
            < AiOutlineCheckCircle  className='text-2xl font-bold'/>
            </div>
            <h2 className="text-white text-lg title-font font-medium">
            TYPESCRIPT 
            </h2>
            <div className='text-5xl pl-60'><SiTypescript /> </div>

          </div>
          <div className="flex-grow">
            <div className="relative h-1 w-full bg-white rounded-xl">
                <div className="absolute bg-orange-500 h-1 rounded-xl w-[95%]"></div>
            </div>
            <p className="font-bold text-orange-500 text-right">95%</p>
          </div>
        </div>
      </div>


      <div className="p-4  w-[100%] md:w-1/3">
        <div className="flex rounded-lg h-full bg-gray-900 p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-orange-500 text-white flex-shrink-0">
            < AiOutlineCheckCircle  className="text-2xl font-bold"/>
            </div>
            <h2 className="text-white text-lg title-font font-medium">
            NEXT.JS
            </h2>
            <div className='text-5xl pl-64'><RiNextjsFill /> </div>

          </div>
          <div className="flex-grow">
            <div className="relative h-1 w-full bg-white rounded-xl">
                <div className='absolute bg-orange-500 h-1 rounded-xl w-[70%]'></div>
            </div>
            <p className="font-bold text-orange-500 text-right">70%</p>
          </div>
        </div>
      </div>
      <div className="p-4  w-[100%] md:w-1/3">
        <div className="flex rounded-lg h-full bg-gray-900 p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-orange-500 text-white flex-shrink-0">
            < AiOutlineCheckCircle  className="text-2xl font-bold"/>
            </div>
            <h2 className="text-white text-lg title-font font-medium">
            TAILWIND CSS
            </h2>
            <div className="text-5xl pl-64"><RiTailwindCssFill /> </div>
          </div>
          <div className="flex-grow">
            <div className="relative h-1 w-full bg-white rounded-xl">
                <div className="absolute bg-orange-500 h-1 rounded-xl w-[90%]"></div>
            </div>
            <p className="font-bold text-orange-500 text-right">90%</p>
          </div>
        </div>
      </div>
      
      <div className="p-4  w-[100%] md:w-1/3">
        <div className="flex rounded-lg h-full bg-gray-900 p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-orange-500 text-white flex-shrink-0">
            < AiOutlineCheckCircle  className='text-2xl font-bold'/>
            </div>
            <h2 className="text-white text-lg title-font font-medium">
            GRAPHIC DESGINER
            </h2>

            <div className='text-5xl pl-64'>< AiOutlineCheckCircle /> </div>
          </div>
          <div className="flex-grow">
            <div className='relative h-1 w-full bg-white rounded-xl'>
                <div className='absolute bg-orange-500 h-1 rounded-xl w-[95%]'></div>
            </div>
            <p className='font-bold text-orange-500 text-right'>95%</p>
          </div>
        </div>
      </div>








    </div>
  </div>
</section>


    </div>
  )
}

export default Skills
