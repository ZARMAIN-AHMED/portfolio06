
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineCloudDownload } from "react-icons/ai";

function About() {
  return (
    <div>
      <div className="text-white bg-black body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <Image
              className="object-cover object-center rounded-full border-3 border-stone-400 ml-24 shadow-orange-500 shadow-2xl"
              alt="hero"
              src={"/hijabi.png"}
              height={400}
              width={400}
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
              About Me
              <br />
            </h1>
            <h2 className="text-3xl font-bold text-orange-300">
              I am Zarmain Ahmed | Enthusiastic Frontend Student at GIAIC, Exploring Web Development
            </h2><br />
            <p className="mb-8 leading-relaxed">
              A passionate frontend development student at GIAIC. I have learned HTML, CSS, JavaScript, and 
              Tailwind CSS, building several impressive projects. I have also participated in a hackathon, honing my skills further.
              Though my course covers IT, starting with full-stack and later advancing to AI, I am currently 
              focused on mastering frontend technologies, preparing for more complex AI topics in the future.
              <br />
              I am 17 years old, and currently, I am a 1st-year student. Along with my regular studies, I am eager to grow my skills and knowledge in this field.
            </p>
            <div className="flex justify-center">
              <Link href={'/component/skills'}>
                <button className="inline-flex text-white bg-orange-500 border-0 py-2 px-6 focus:outline-none hover:bg-amber-600 rounded text-lg font-bold">
                  Skills
                </button>
              </Link>

              <a href='/myCV.pdf' target="_blank" rel="noopener noreferrer">
                <button className="ml-4 inline-flex text-white font-bold bg-gray-600 border-0 py-2 px-6 focus:outline-none hover:bg-orange-500 rounded text-lg">
                  Download CV
                  <AiOutlineCloudDownload className="text-2xl ml-2" />
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
