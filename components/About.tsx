import React from "react";
import { FaHtml5, FaCss3, FaReact, FaJsSquare } from "react-icons/fa";
import { DiRuby, DiDocker, DiPostgresql, DiRedis } from "react-icons/di";
import Link from "next/link";
import Button from "./Button";

export default function About() {
  return (
    <section id="about">
      <h1 className="my-10 text-center font-bold text-4xl">
        About-me
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col md:flex-row items-center justify-center py-16 px-4 gap-6">
        <div className="w-full md:w-1/2 lg:w-1/1 flex flex-col items-center md:items-start text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">About Me</h1>
          <p className=" mb-8">
            I am a passionate developer with expertise in Ruby on Rails,
            JavaScript, HTML, CSS, Node.js, and PostgreSQL. I have a strong
            background in building scalable web applications and managing cloud
            infrastructure.
          </p>
          <div className="flex justify-center md:justify-start w-ful">
            <Link className="bg-teal-500 text-white py-2 px-4 rounded-lg mr-4 text-sm" href={''}>
              Download CV
            </Link>

            <Button/>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left mt-8 md:mt-0">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">My Skills</h1>
          <div className="flex flex-wrap justify-center md:justify-start">
            <div className="flex flex-col items-center m-4">
              <FaHtml5 className="text-3xl mb-2" />
              <p className="text-gray-400">HTML</p>
            </div>
            <div className="flex flex-col items-center m-4">
              <FaCss3 className="text-3xl mb-2" />
              <p className="text-gray-400">CSS</p>
            </div>
            <div className="flex flex-col items-center m-4">
              <FaJsSquare className="text-3xl mb-2" />
              <p className="text-gray-400">JavaScript</p>
            </div>
            <div className="flex flex-col items-center m-4">
              <FaReact className="text-3xl mb-2" />
              <p className="text-gray-400">Node.js</p>
            </div>
            <div className="flex flex-col items-center m-4">
              <DiRuby className="text-3xl mb-2" />
              <p className="text-gray-400">Ruby</p>
            </div>

            <div className="flex flex-col items-center m-4">
              <DiDocker className="text-3xl mb-2" />
              <p className="text-gray-400">Docker</p>
            </div>

            <div className="flex flex-col items-center m-4">
              <DiPostgresql className="text-3xl mb-2" />
              <p className="text-gray-400">PostgreSQL</p>
            </div>
            <div className="flex flex-col items-center m-4">
              <DiRedis className="text-3xl mb-2" />
              <p className="text-gray-400">Redis</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
