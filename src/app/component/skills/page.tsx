import React from 'react';
import { AiOutlineCheckCircle } from "react-icons/ai";
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
        <div className="container mx-auto px-5 py-24">
          <div className="flex flex-col text-center w-full mb-20">
            <h2 className="md:text-xs text-orange-500 tracking-widest font-medium title-font mb-1">
              SKILLS
            </h2>
            <h1 className="sm:text-4xl text-4xl font-medium text-white">
              My Skills
            </h1>
          </div>
          <div className="flex flex-wrap -m-4 justify-center">
            {/* Skill Cards */}
            {[
              { name: "HTML", icon: <AiFillHtml5 />, level: "100%", width: "100%" },
              { name: "CSS", icon: <FaCss3Alt />, level: "90%", width: "90%" },
              { name: "JAVASCRIPT", icon: <IoLogoJavascript />, level: "80%", width: "80%" },
              { name: "TYPESCRIPT", icon: <SiTypescript />, level: "95%", width: "95%" },
              { name: "NEXT.JS", icon: <RiNextjsFill />, level: "70%", width: "70%" },
              { name: "TAILWIND CSS", icon: <RiTailwindCssFill />, level: "90%", width: "90%" },
              { name: "UI/UX DESIGNER", icon: <AiOutlineCheckCircle />, level: "95%", width: "95%" },
            ].map(skill => (
              <div className="p-4 w-full md:w-1/3" key={skill.name}>
                <div className="flex rounded-lg h-full bg-gray-900 p-8 flex-col">
                  <div className="flex items-center mb-3">
                    <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-orange-500 text-white flex-shrink-0">
                      <AiOutlineCheckCircle className='text-2xl font-bold' />
                    </div>
                    <h2 className="text-white text-lg title-font font-medium">
                      {skill.name}
                    </h2>
                    <div className='text-5xl ml-auto'>{skill.icon}</div>
                  </div>
                  <div className="flex-grow">
                    <div className='relative h-1 w-full bg-white rounded-xl'>
                      <div className='absolute bg-orange-500 h-1 rounded-xl' style={{ width: skill.width }}></div>
                    </div>
                    <p className='font-bold text-orange-500 text-right'>{skill.level}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Skills;
