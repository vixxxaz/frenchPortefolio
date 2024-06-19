import { BiBadgeCheck, BiChip } from "react-icons/bi";
import React from "react";
import { skills } from "../data/data";

export default function Skills() {
  return (
    <section  id="skills" aria-labelledby="skills-title">
      <div className="container px-5  py-10 h-20 mx-auto ">
        <div className="text-center mb-10 h-20">
          <BiChip className="w-10 inline-block mb-4" aria-hidden="true"/>
          <h1 className="sm:text-4xl text-xl font-medium title-font text-black mb-4">
            Skills &amp; Technologies
          </h1>
          <p className="text-base text-sm leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            Tous les language que je maîtrise ! 
          </p>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {skills.map((skill) => (
            <div key={skill} className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-800 rounded flex sm:p-4 sm:h-10 p-4 h-3 items-center">
                <BiBadgeCheck className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" aria-hidden="true"/>
                <span className="title-font font-medium text-white">
                  {skill}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}