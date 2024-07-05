import React from "react";
import about from "../assets/about.jpg";

export default function About() {
  return (
    <div
      className="text-white max-w-6xl mx-auto my-12 flex flex-col gap-7 py-10"
      id="about"
    >
      <div className="text-center mb-5">
        <h1 className="text-4xl font-bold mb-4 primary-color ">About Me</h1>
      </div>
      <div className="md:grid md:grid-cols-2 s:py-16">
        <div className="mt-4 md:mt-0 text-left flex">
          <div className="my-auto mx-6 ">
            <h2 className="text-4xl font-bold mb-5 primary-color">
              Ajay Prajapati
            </h2>
            <p className="text-xl lg:text-lg tracking-wide mt-3">
              I am a proficient MERN stack developer with a robust understanding
              of MongoDB, Express.js, React, and Node.js. She excels in creating
              dynamic and responsive web applications, leveraging her expertise
              in front-end and back-end development. Additionally, Yesha
              possesses strong programming skills(JAVA, JAVA SCRIPT etc.),
              enhancing her ability to deliver efficient and scalable solutions.
            </p>
          </div>
        </div>

        <img
          src={about}
          alt="About me"
          className="mx-auto rounded-3xl py-8 md:py-0 w-96 shadow-lg shadow-white"
        />
      </div>
    </div>
  );
}
