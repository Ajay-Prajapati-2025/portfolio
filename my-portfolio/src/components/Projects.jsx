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
          <img src="https://images.unsplash.com/photo-1517292987719-0369a794ec0f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cmVhbCUyMEV0YXN0ZSUyMGJvb2tpbmclMjBhcHB8ZW58MHwwfDB8fHww" alt="Project 1" />

          {/* Live effect */}
          <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center">
            <span className="text-2xl font-bold text-white tracking-wider">MittiHomes</span>
            <div className="pt-8 text-center">
              <a href="https://github.com/Ajay-Prajapati-2025">
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gary-700 font-bold text-lg">
                  Know More
                </button>
              </a>
            </div>
          </div>
        </div>

        <div className="transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group  rounded-md flex justify-center items-center   h-[200px] bg-cover relative">
          <img src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Project 1" />

          {/* Live effect */}
          <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center">
            <span className="text-2xl font-bold text-white tracking-wider">Blog App</span>
            <div className="pt-8 text-center">
              <a href="https://github.com/Ajay-Prajapati-2025">
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gary-700 font-bold text-lg">
                Know More
                </button>
              </a>
            </div>
          </div>
        </div>

        <div className="transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group  rounded-md flex justify-center items-center   h-[200px] bg-cover relative">
          <img src="https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Project 1" />

          {/* Live effect */}
          <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center">
            <span className="text-2xl font-bold text-white tracking-wider">Quiz Generator</span>
            <div className="pt-8 text-center">
              <a href="https://github.com/Ajay-Prajapati-2025">
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gary-700 font-bold text-lg">
                Know More
                </button>
              </a>
            </div>
          </div>
        </div>

        <div className="transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg sshadow-[#040c16] group  rounded-md flex justify-center items-center   h-[200px] bg-cover relative">
          <img src="https://images.unsplash.com/photo-1608111283390-2e333b9b279c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Project 1" />

          {/* Live effect */}
          <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center">
            <span className="text-2xl font-bold text-white tracking-wider">Tic-Tac-Toe</span>
            <div className="pt-8 text-center">
              <a href="https://github.com/Ajay-Prajapati-2025">
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gary-700 font-bold text-lg">
                Know More
                </button>
              </a>
            </div>
          </div>
        </div>

        <div className="transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group  rounded-md flex justify-center items-center   h-[200px] bg-cover relative">
          <img src="https://images.unsplash.com/photo-1567606404787-ebd010176fdf?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Project 1" />

          {/* Live effect */}
          <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center">
            <span className="text-2xl font-bold text-white tracking-wider">Netflix-clone</span>
            <div className="pt-8 text-center">
              <a href="https://github.com/Ajay-Prajapati-2025">
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gary-700 font-bold text-lg">
                Know More
                </button>
              </a>
            </div>
          </div>
        </div>

        <div className="transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group  rounded-md flex justify-center items-center   h-[200px] bg-cover relative">
          <img src="https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Project 1" />

          {/* Live effect */}
          <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center">
            <span className="text-2xl font-bold text-white tracking-wider">Simon-game</span>
            <div className="pt-8 text-center">
              <a href="https://github.com/Ajay-Prajapati-2025">
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gary-700 font-bold text-lg">
                Know More
                </button>
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
