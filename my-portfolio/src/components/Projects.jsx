import React from "react";
import proj1 from "../assets/proj1.png";
import proj2 from "../assets/proj2.png";
import proj3 from "../assets/proj3.png";
import proj4 from "../assets/proj4.png";
import proj5 from "../assets/proj5.png";
import proj6 from "../assets/proj6.png";

export default function Projects() {
  return (
    <div className="max-w-6xl mx-auto my-20 py-10" id="projects">
      <div className="pb-8 text-center mt-10">
        <p className="text-4xl mb-7 font-bold primary-color ">Projects</p>
        <p className="text-gray-400">Check out some of my  Projects</p>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-x-7 gap-y-7">

        <div className="transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group  rounded-md flex justify-center items-center   h-[200px] bg-cover relative">
          <img src={proj1} alt="Project 1" />

          {/* Live effect */}
          <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center">
            <span className="text-2xl font-bold text-white tracking-wider">Project</span>
            <div className="pt-8 text-center">
              <a href="/">
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gary-700 font-bold text-lg">
                  Live
                </button>
              </a>
            </div>
          </div>
        </div>

        <div className="transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group  rounded-md flex justify-center items-center   h-[200px] bg-cover relative">
          <img src={proj2} alt="Project 1" />

          {/* Live effect */}
          <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center">
            <span className="text-2xl font-bold text-white tracking-wider">Project</span>
            <div className="pt-8 text-center">
              <a href="/">
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gary-700 font-bold text-lg">
                  Live
                </button>
              </a>
            </div>
          </div>
        </div>

        <div className="transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group  rounded-md flex justify-center items-center   h-[200px] bg-cover relative">
          <img src={proj1} alt="Project 1" />

          {/* Live effect */}
          <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center">
            <span className="text-2xl font-bold text-white tracking-wider">Project</span>
            <div className="pt-8 text-center">
              <a href="/">
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gary-700 font-bold text-lg">
                  Live
                </button>
              </a>
            </div>
          </div>
        </div>

        <div className="transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg sshadow-[#040c16] group  rounded-md flex justify-center items-center   h-[200px] bg-cover relative">
          <img src={proj3} alt="Project 1" />

          {/* Live effect */}
          <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center">
            <span className="text-2xl font-bold text-white tracking-wider">Project</span>
            <div className="pt-8 text-center">
              <a href="/">
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gary-700 font-bold text-lg">
                  Live
                </button>
              </a>
            </div>
          </div>
        </div>

        <div className="transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group  rounded-md flex justify-center items-center   h-[200px] bg-cover relative">
          <img src={proj4} alt="Project 1" />

          {/* Live effect */}
          <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center">
            <span className="text-2xl font-bold text-white tracking-wider">Project</span>
            <div className="pt-8 text-center">
              <a href="/">
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gary-700 font-bold text-lg">
                  Live
                </button>
              </a>
            </div>
          </div>
        </div>

        <div className="transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group  rounded-md flex justify-center items-center   h-[200px] bg-cover relative">
          <img src={proj5} alt="Project 1" />

          {/* Live effect */}
          <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center">
            <span className="text-2xl font-bold text-white tracking-wider">Project</span>
            <div className="pt-8 text-center">
              <a href="/">
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gary-700 font-bold text-lg">
                  Live
                </button>
              </a>
            </div>
          </div>
        </div>


        
      </div>
    </div>
  );
}
