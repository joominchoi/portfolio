import React from "react";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            About me
            {/* <br className="hidden lg:inline-block" /> Check out my portfolio! */}
          </h1>
          <p className="mb-8 leading-relaxed">
          Managing a business for six years allowed me to see first-hand the power and importance of technology. From switching to an EPOS to creating a website as well as running promotions on the various social media platforms, I experienced how efficient and valuable these tools are, both for companies and customers alike.
          <br/>
          Realising that technology is an indispensable aspect of the world we live in today, my interest for technology grew ever more, which naturally led me to teaching myself to code before eventually joining Makers.
          <br/>
          I am a highly motivated and determined individual, with an appetite for learning. I have a proven track-record for delivering results and enjoy the challenges that come with every unique problem. The core programming fundamentals I have acquired through Makers combined with the soft skills I have honed over the years as a businessman, has made me into a well rounded developer.
          <br/>
          I am currently looking for a role that will enable me to continue my learning and growth.
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
              Here are my details
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              Check out my top projects!
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="./coding.svg"
          />
        </div>
      </div>
    </section>
  );
}
