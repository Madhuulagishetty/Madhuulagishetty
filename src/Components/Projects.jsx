import React from "react";
import { Link } from "react-router-dom";


const Projects = () => {
  return (
    <div className=" ">
      <div className=" text-center md:p-20">
        <h1 className="font-bold text-4xl p-4">
          My Recent <span className="text-blue-700">Work</span>
        </h1>
        <p className="text-xl">Here are a Few Projects I Worked on Recently</p>
      </div>
      <div className="flex text-white flex-wrap justify-center gap-11 font-light ">
        {" "}
        <div className="Box-1 group hover:scale-105 hover:shadow-white hover:shadow-md border m-5 md:m-none border-black md:border-none transition-transform duration-300 w-[400px] flex justify-center flex-col items-center p-8 gap-3 rounded-md">
         <Link to='https://imaginative-conkies-8c4422.netlify.app/'>
          <img
            src="https://c8.alamy.com/comp/2GBKETF/kolkata-india-aug-02-2021-flipkart-online-shopping-app-on-app-store-opened-in-iphone-device-on-a-black-table-background-surface-with-airpods-pro-2GBKETF.jpg"
            alt="Flipkart Clone"
            className="md:w-[300px] md:h-[300px] h-[200px] w-[200px] object-cover"
          />
          </Link>
          <h1 className="font-bold text-xl">Flipkart Clone</h1>
          <p>
            The project showcases a responsive, interactive, and user-friendly
            experience to add items to the cart and proceed to checkout. It was
            developed using HTML, CSS, JavaScript, and ReactJS, focusing on a
            seamless user experience and modern web design.
          </p>
        </div>
        <div className="Box-1  group hover:scale-105 hover:shadow-white hover:shadow-md border border-black m-5 md:m-none md:border-none transition-transform duration-300  w-[400px] flex justify-center flex-col items-center p-8 gap-3 rounded-md">
          <img
            src="data:image/jpeg;base64,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"
            alt=""
            className="md:w-[300px] md:h-[300px] h-[200px] w-[200px] object-cover "
          />
          <h1 className="font-bold text-xl">portfolio</h1>
          <p>
            {" "}
            The Personal Portfolio Website is a showcase of my skills, projects,
            and professional journey as a ReactJS developer. Built with a modern
            and responsive design. The website is easy to navigate and visually
            engaging, reflecting my passion for clean, interactive, and
            efficient web design. Features:
          </p>
        </div>
        <div className="Box-1  group hover:scale-105 hover:shadow-white border border-black m-5 md:m-none md:border-none hover:shadow-md  transition-transform duration-300 w-[400px]  flex justify-center flex-col items-center p-8 gap-3 rounded-md">
          <img
            src="data:image/jpeg;base64,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"
            alt=""
            className="md:w-[300px] md:h-[300px] h-[200px] w-[200px] object-cover "
          />
          <h1 className="font-bold text-xl">Text convert into Speech</h1>
          <p>
            {" "}
            The Text to Speech Converter is a simple web application that allows
            users to input text and hear it spoken aloud using the Web Speech
            API. This project demonstrates how to integrate speech synthesis
            functionality into a website, providing an interactive way for users
            to convert written text into audible speech.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
