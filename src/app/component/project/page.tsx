import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

function Page() {
  return (
    <div>
      <section className="text-white body-font bg-black">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-3xl font-medium title-font mb-4 text-white">
              Feature Projects
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              A passionate student of Information Technology, I am currently focusing on Cloud Computing, Generative AI, and Web 3.0 technologies, gaining valuable experience and applying my skills in real-world projects.
            </p>
          </div>
          <div className="flex flex-wrap m-5 mt-8">
            {/* Project */}
            {[
              {
                title: 'ID CARD Project',
                description: 'I made this ID Card project. Here is the link to my Website.',
                image: '/project.png',
                link: 'https://github.com/ZARMAIN-AHMED/Nextjsassignment04.git',
                category: 'ID CARD',
              },
              {
                title: 'PORTFOLIO Project',
                description: 'A dynamic and responsive portfolio built using Next.js 14 with TypeScript (TSX).',
                image: '/portfolio.png',
                link: '',
                category: 'Portfolio with Next.js',
              },
              {
                title: 'RESUME Project',
                description: 'I made this Resume project with HTML, CSS and JavaScript. You can practice TypeScript quizzes.',
                image: '/resume.png',
                link: 'https://github.com/ZARMAIN-AHMED/HAKATHON-MILESTONE1-2.git',
                category: 'Resume',
              },
              {
                title: 'CLI CURRENCY CONVERTER Project',
                description: 'I made this CLI Currency Converter project. Share your feedback.',
                image: '/clicurrency.png',
                link: 'https://github.com/ZARMAIN-AHMED/Cli_currency_converter.git',
                category: 'Cli Currency Convertor',
              },
              {
                title: 'CLI QUIZ Project',
                description: 'I made this CLI Quiz Project. Here is the link to my Website.',
                image: '/quiz.png',
                link: 'https://github.com/ZARMAIN-AHMED/Quiz-projec-t08.git',
                category: 'Cli Quiz',
              },
              {
                title: 'CLI Adventure GAME Project',
                description: 'I made this CLI Adventure game project. Share your feedback.',
                image: '/game.png',
                link: 'https://github.com/ZARMAIN-AHMED/Adventure-game.git',
                category: 'Cli Adventure Game',
              },
            ].map((project, index) => (
              <div key={index} className="lg:w-1/3 sm:w-1/2 p-4">
                <div className="flex relative">
                  <Image
                    alt="gallery"
                    className="absolute inset-0 object-cover object-center cursor-pointer border-4 border-orange-200"
                    src={project.image}
                    height={500}
                    width={380}
                  />
                  <div className="px-8 py-10 relative z-10 w-full border-4 border-orange-200 bg-gray-900 opacity-0 hover:opacity-100">
                    <h2 className="tracking-widest text-1xl title-font font-medium text-white mb-1">
                      {project.title}
                    </h2>
                    <h1 className="title-font text-lg font-medium text-orange-500 mb-3">
                      {project.category}
                    </h1>
                    <p className="leading-relaxed line-clamp-2">
                      {project.description}
                    </p>
                    <Link target="_blank" href={project.link}>
                      <p className="leading-relaxed text-blue-500">View Project</p>
                    </Link>
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

export default Page;
