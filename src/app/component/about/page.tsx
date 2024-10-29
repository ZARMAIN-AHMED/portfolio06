
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineCloudDownload } from "react-icons/ai";

function About() {
  return (
    <div className="text-white bg-black body-font">
      <div className="container mx-auto flex flex-col md:flex-row items-center px-4 md:px-8 py-16 md:py-24">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-full mb-10 md:mb-0 flex justify-center">
          <Image
            className="object-cover object-center rounded-full border-4 border-stone-400 shadow-orange-500 shadow-2xl"
            alt="Zarmain Ahmed"
            src="/hijabi.png"
            height={400}
            width={400}
          />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start items-center text-center md:text-left">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            About Me
          </h1>
          <h2 className="text-3xl font-bold text-orange-300">
            I am Zarmain Ahmed | Enthusiastic Frontend Student at GIAIC
          </h2>
          <br />
          <p className="mb-8 leading-relaxed text-base md:text-lg">
            A passionate frontend development student at GIAIC. I have learned HTML, CSS, JavaScript, and Tailwind CSS, building several impressive projects. I have also participated in a hackathon, honing my skills further. Though my course covers IT, starting with full-stack and later advancing to AI, I am currently focused on mastering frontend technologies, preparing for more complex AI topics in the future.
            <br />
            I am 17 years old and currently a 1st-year student. Along with my regular studies, I am eager to grow my skills and knowledge in this field.
          </p>
          <div className="flex flex-col md:flex-row justify-center md:justify-start">
            <Link href="/component/skills">
              <button className="inline-flex text-white bg-orange-500 border-0 py-2 px-6 focus:outline-none hover:bg-amber-600 rounded text-lg font-bold mb-4 md:mb-0 md:mr-4">
                Skills
              </button>
            </Link>
            <a href="/zari.pdf">
              <button className="inline-flex text-white font-bold bg-gray-600 border-0 py-2 px-6 focus:outline-none hover:bg-orange-500 rounded text-lg">
                Download CV
                <AiOutlineCloudDownload className="text-2xl md:ml-2" />
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
