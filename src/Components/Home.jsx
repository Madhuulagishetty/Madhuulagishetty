import React from "react";
import Image from "../Assets/imagemadhu.jpg";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import { Link } from "react-router-dom";
import Technology from "./Technology";

const Home = () => {
  return (
    <>
      <div className=" min-h-screen md:justify-around md:flex-row flex flex-col justify-center items-center md:p-10 md:items-center">
        <div
          className="Home-Text text-white md:w-[50%] pt-[10%] md:pt-[0%] "
          style={{ padding: "78px 10px" }}
        >
          <h1 className="text-3xl font-bold md:text-6xl">
            Hi, I'm <span className="text-blue-700">Madhu</span>, a passionate{" "}
            <span className="text-blue-700">software developer</span>.
          </h1>
          <p className="pt-[12px] pb-[13px]">
            I build interactive UI in React.
          </p>
          <button className="bg-blue-700 p-2 text-white rounded-md text-xl mt-[12px] mb-[13px]">
            <Link to={"Projects"}> See my Projects </Link>
          </button>
        </div>
        <div className=" md:flex pt-[30px] pb-[10%] items-center justify-center">
          <img
            src={Image}
            alt="Madhu"
            className="md:w-[300px] md:h-[300px] h-[250px] w-[250px] object-cover rounded-full transition-transform duration-300 ease-in-out hover:scale-105 hover:translate-x-2 hover:translate-y-2"
          />
        </div>
      </div>
      <AboutMe />
      <Projects />
      <Technology />
    </>
  );
};

export default Home;
