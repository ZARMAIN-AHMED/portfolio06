

import react from 'react';



import Image from 'next/image';

import { AiFillGithub } from "react-icons/ai";
function Footer() {
  return (
    <div className="bg-gray-950">
        <div className="text-white body-font">
  <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
    <div className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
    <Image
                src={"/logoo.jpg"}
                alt={"logo"}
                width={100}
                height={50}
                className='rounded-full' />
      <span className="ml-3 text-xl font-bold text-orange-500">Zarmain Ahmed</span>
    </div>
    <h2 className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 border-white sm:py-2 sm:mt-0 mt-4 font-semibold">Copyright © 2024 Zarmain Ahmed —

      <div  className="text-white ml-1 inline-flex">@kkkk45@gmail.com</div>

      <div  className="text-white ml-1 inline-flex">@KKKK45@gmail.com</div>

    </h2>
    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
    <a  href='https://github.com/ZARMAIN-AHMED' className="text-white">
    <AiFillGithub  className="text-4xl"/>
      </a>
     
      
    </span>
  </div>
</div>
    </div>
  )
}

export default Footer

