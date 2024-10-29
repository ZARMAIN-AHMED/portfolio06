
import React from 'react';


function Contact() {
  return (
    <div>
<section className="text-white bg-black body-font relative">
  <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
    
    <div className="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex relative">
     
    
        <div className="lg:w-1/2 px-6 mt-4 lg:mt-0 bg-gray-900 rounded-lg p-5">
        <h1 className='text-4xl font-serif'>LETS CONNECT</h1><br/>
        <p>Send me a message by submitting the from.</p><br/>
          <h2 className="font-sans  font-bold text-white tracking-widest text-xl">
            EMAIL
          </h2>

          <a className="text-white leading-relaxed text-xl">kkkk45@gmail.com</a>
          <h2 className="font-sans font-bold text-white tracking-widest text-xl mt-4">
            PHONE
          </h2>
          <p className="leading-relaxed text-xl ">03837563822</p><br/>

          <a className="text-white leading-relaxed text-xl">kkkkk45@gmail.com</a>
          <h2 className="font-sans font-bold text-white tracking-widest text-xl mt-4">
            PHONE
          </h2>
          <p className="leading-relaxed text-xl ">037905325897</p><br/>

          <span className=" font-bold">I HOPE YOU LIKE MY PORTFOLIO WEBSITE.<br/>
            THANKS FOR VISITING MY WEBSITE🥰.</span>
        </div>
      </div>
    
    <div className="lg:w-1/3 md:w-1/2 bg-gray-900 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0 p-6 rounded-l-lg">
      <h2 className="text-white text-3xl  mb-1 font-medium title-font">
        Contact Me
      </h2>
      <p className="leading-relaxed mb-5 text-white">
    Feel Free to Contact
      </p>
      <div className="relative mb-4">
        <label htmlFor="name" className="leading-7 text-sm text-white">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="w-full bg-gray-600 rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
      </div>
      <div className="relative mb-4">
        <label htmlFor="email" className="leading-7 text-sm text-white">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="w-full bg-gray-600 rounded border  border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
      </div>
      <div className="relative mb-4">
        <label htmlFor="message" className="leading-7 text-sm text-white">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          className="w-full bg-gray-600 rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-white py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
          defaultValue={""}
        />
      </div>
      <button className="text-white bg-orange-500 border-0 py-2  font-bold px-6 focus:outline-none hover:bg-amber-600 rounded text-lg">
        Send Message
      </button>
      
    </div>
  </div>
</section>
     </div>
  )
}

export default Contact
