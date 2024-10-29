"use client"
import React from 'react';
import Image from 'next/image';
import Typewriter from 'typewriter-effect';
import Link from 'next/link';
import { AiOutlineCloudDownload } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";

function Hero() {
  return (
    <div className='text-white bg-black'>
      <section className="text-white body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
              HELLO!<br />
              I AM <span className='text-orange-400 font-bold'>ZARMAIN AHMED</span>
              <br className="hidden lg:inline-block" />
              <Typewriter
                options={{
                  strings: ['Web Developer', 'UI/UX Designer'],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
            <div className='w-[100px] h-[2px] bg-orange-500'></div>
            <p className="mb-8 leading-relaxed">
              A passionate Student of IT, Cloud Computing, Applied Generative AI, Web 3.0 and Metaverse & Full Stack Developer at Governor House Karachi.
              I am committed to continuously learning and applying my knowledge to create impactful web solutions🚀.
            </p>
            <div className="flex justify-center">
              <Link href={'/component/contact'}>
                <button className="inline-flex text-white bg-orange-500 border-0 py-2 px-6 focus:outline-none hover:bg-amber-600 rounded text-lg font-bold">
                  Contact
                </button>
              </Link>
              <a href='/myCV.pdf' target="_blank" rel="noopener noreferrer">
                <button className="ml-4 inline-flex text-white font-bold bg-gray-600 border-0 py-2 px-6 focus:outline-none hover:bg-orange-500 rounded text-lg">
                  Download CV
                  <AiOutlineCloudDownload className='text-2xl ml-2' />
                </button>
              </a>
              <a href='https://github.com/ZARMAIN-AHMED' className="ml-4">
                <AiFillGithub className='text-4xl text-white' />
              </a>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <Image
              className="object-cover object-center rounded-full border-3 border-stone-400 shadow-xl shadow-orange-500"
              alt="hero"
              src={'/hijabi.png'}
              height={400}
              width={400}
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
