import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
function Page() {
  return (
    <div>

<section className="text-white body-font bg-black">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="sm:text-3xl text-3xl font-medium title-font  mb-4 text-white">
      Feature Projects
      </h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
      A passionate student of Information Technology, I am currently focusing on Cloud Computing, Generative AI, and Web 3.0 technologies.
      where I am gaining valuable experience and applying my skills in real-world projects.
      </p>
    </div>
    <div className="flex flex-wrap m-5 mt-8">
        {/*project*/}
      <div className="lg:w-1/3 sm:w-1/2  p-4">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0  object-cover object-center cursor-pointer border-4  border-orange-200"
            src={"/project.png"}
            height={500}
            width={380}
          />
          <div className="px-8 py-10 relative z-10 w-96 border-4 border-gray-200 bg-gray-900 opacity-0 hover:opacity-100 text-white">
            <h2 className="tracking-widest text-1xl title-font font-medium text-white mb-1">
              ID CARD Project
            </h2>
            <h1 className="title-font text-lg font-medium text-orange-500 white mb-3">
              ID CARD
            </h1>
            <p className="leading-relaxed line-clamp-2">
            I made this ID Card project. Here is the link of my Website
            </p><Link target='_blank' href={'https://github.com/ZARMAIN-AHMED/Nextjsassignment04.git'}>
            <p className='leading-relaxed text-blue-500'>View Project</p></Link>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2  p-4">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0  object-cover object-center cursor-pointer border-4  border-orange-200"
            src={"/portfolio.png"}
            height={600}
            width={380}
          />
          <div className="px-8 py-10 relative z-10 w-96 border-4 border-orange-200 bg-gray-900  opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-1xl title-font font-medium text-white mb-1">
              PORFOLIO PROJECT
            </h2>
            <h1 className="title-font text-lg font-medium  text-orange-500 mb-3">
              Portfolio with Next.js
            </h1>
            <p className="leading-relaxed line-clamp-2">
            A dynamic and responsive portfolio built using Next.js 14 with TypeScript (TSX), 
            showcasing projects, skills, and contact details with a clean, modern interface.
            </p><Link target='_blank' href={''}>
            <p className='leading-relaxed text-blue-500'>View Project</p></Link>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2  p-4">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0  object-cover object-center cursor-pointer border-4  border-orange-200"
            src={"/resume.png"}
            height={500}
            width={380}
          />
          <div className="px-8 py-10 relative z-10 w-96 border-4 border-orange-200 bg-gray-900 opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-1xl title-font font-medium text-white mb-1">
              RESUME Project
            </h2>
            <h1 className="title-font text-lg font-medium   text-orange-500 mb-3">
              Resume
            </h1>
            <p className="leading-relaxed line-clamp-2">
            I made this Resume project with HTML, CSS and JavaScript. In this you can practice TypeScript Quizzes. Here is the link of my Website
            </p><Link target='_blank' href={'https://github.com/ZARMAIN-AHMED/HAKATHON-MILESTONE1-2.git'}>
            <p className='leading-relaxed text-blue-500'>View Project</p></Link>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2  p-4">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0  object-cover object-center cursor-pointer border-4  border-orange-200"
            src={"/clicurrency.png"}
            height={400}
            width={380}
          />
          <div className="px-8 py-10 relative z-10 w-96 border-4 border-orange-200 bg-gray-900 opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-1xl title-font font-medium text-white mb-1">
              CLI CURRENCY CONVERTOR Project
            </h2>
            <h1 className="title-font text-lg font-medium  text-orange-500 mb-3">
           Cli Currency Convertor
            </h1>
            <p className="leading-relaxed line-clamp-2">
            I made this Cli Currency Convertor project. Here is the link of my project share your feedback
            </p>
            <Link target='_blank' href={'https://github.com/ZARMAIN-AHMED/Cli_currency_converter.git'}>
            <p className='leading-relaxed text-blue-500'>View Project</p></Link>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2  p-4">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0  object-cover object-center cursor-pointer border-4  border-orange-200"
            src={"/quiz.png"}
            height={500}
            width={380}
          />
          <div className="px-8 py-10 relative z-10 w-96 border-4 border-orange-200 bg-gray-900 opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-1xl title-font font-medium text-white mb-1">
              CLI QUIZ Project
            </h2>
            <h1 className="title-font text-lg font-medium   text-orange-500 mb-3">
              Cli Quiz
            </h1>
            <p className="leading-relaxed line-clamp-2">
            I made this Cli Quiz Project.. Here is the link of my Website
            </p>
            <Link target='_blank' href={'https://github.com/ZARMAIN-AHMED/Quiz-projec-t08.git'}>
            <p className='leading-relaxed text-blue-500'>View Project</p></Link>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2  p-4">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0  object-cover object-center cursor-pointer border-4  border-orange-200"
            src={"/game.png"}
            height={500}
            width={380}
          />
          <div className="px-8 py-10 relative z-10 w-96 border-4 border-orange-200 bg-gray-900 opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-1xl title-font font-medium text-white mb-1">
              CLI Adventure GAME Project
            </h2>
            <h1 className="title-font text-lg font-medium  text-orange-500 mb-3">
              Cli Adventure Game
            </h1>
            <p className="leading-relaxed line-clamp-2">
            I made this Cli Adventure game project. Here is the link of my project share your feedback
            </p>
            <Link target='_blank' href={'https://github.com/ZARMAIN-AHMED/Adventure-game.git '}>
            <p className='leading-relaxed text-blue-500'>View Project</p></Link>
          </div>
        </div>
      </div>
      
    </div>
   
    </div>

</section>


    </div>
  )
}

export default Page