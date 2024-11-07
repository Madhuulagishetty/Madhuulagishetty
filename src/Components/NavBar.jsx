import React from "react";
import { IoHomeOutline } from "react-icons/io5";
import { IoMdPerson } from "react-icons/io";
import { GoProjectRoadmap } from "react-icons/go";
import { FaCode } from "react-icons/fa";
import { AiOutlineBars } from "react-icons/ai";
import { LuSunMedium } from "react-icons/lu";
import { Link } from "react-router-dom";
import useDarkMode from "use-dark-mode";
import { IoMoonOutline } from "react-icons/io5";

const NavBar = () => {
    const darkMode = useDarkMode(false);

    return (
        <div className=" w-[100%] fixed z-50">
            <div className="NavBar-Main flex  justify-between items-center p-2 md:justify-around">
                <Link to={"/"}>
                    <h1 className="uppercase font-bold text-xl pl-[15px]">'madhu'</h1>
                </Link>
                <div className="flex items-center pr-[15px] text-xl gap-5">
                    <p className="md:hidden">
                        <AiOutlineBars />
                    </p>
                    <button onClick={darkMode.toggle} className="md:hidden">
                        {darkMode.value ? <LuSunMedium /> : <IoMoonOutline />}
                    </button>
                </div>
                <ul className="hidden md:flex items-center gap-8 text-[17px]">
                    <li className="flex items-center gap-1 hover:border-b-2 hover:border-white">
                        <Link to={"/"} className="flex items-center gap-1 ">
                            <IoHomeOutline /> Home
                        </Link>
                    </li>
                    <li className="hover:border-b-2 hover:border-white">
                        <Link to={"AboutMe"} className="flex items-center gap-1 hover:to-blue-800">
                            <IoMdPerson /> About
                        </Link>
                    </li>
                    <li className="flex items-center gap-1 hover:border-b-2 hover:border-white">
                        <Link to={"Projects"} className="flex items-center gap-1">
                            <GoProjectRoadmap /> Projects
                        </Link>
                    </li>
                    <li className="flex items-center gap-1">
                        {/* <Link to={'Technology'} className="flex items-center gap-1"> */}
                        <FaCode /> Tech

                    </li>
                    <button onClick={darkMode.toggle} className="DarkMode p-3 text-2xl ">
                        {darkMode.value ?   <IoMoonOutline  />:<LuSunMedium />}
                    </button>
                </ul>
            </div>
        </div>
    );
};

export default NavBar;
